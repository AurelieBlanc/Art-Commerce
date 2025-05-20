// Code pour les imports : ---------------------------------------------//
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client"; 
import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken"; 
import * as cookie from "cookie"; 
import Tokens from "csrf"; 
import { z } from "zod"; 

const prisma = new PrismaClient(); 
const SECRET_KEY = process.env.JWT_SECRET; 
const ENV = process.env.NODE_ENV; 
const tokens = new Tokens(); 




// Code pour le schéma de validation de données Zod pour le form LOGIN : -----------------------//
export const loginSchema = z.object({
    email: z.string().email({ message: "Email invalide"}), 
    password: z
    .string()
    .min(5, {message: "le mot de passe doit contenir au moins 5 caractères"})
    .regex(/[a-z]/, { message: "le mot de passe doit contenir au moins une lettre minuscule"})
    .regex(/[A-Z]/, { message: "le mot de passe doit contenir au moins une lettre majuscule"})
    .regex(/[0-9]/, { message: "le mot de passe doit contenir au moins un chiffre"})
    .regex(/[^a-zA-Z0-9]/, { message: "le mot de passe doit contenir au moins un caractère spécial"})
  })





export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== "POST") {
        return res.status(405).json({ message: "requête HTTP non autorisée "})
    }


// Code pour verif les formats des données pour le login : ------------------------------//
    const { email, mdp } = req.body; 

    const result = loginSchema.safeParse({
        email: email, 
        password: mdp
    })

    if(!result.success) {
        console.log("le format du mail et/ou mdp est incorrect"); 
        return res.status(401).json({ message: "formats identifiants non valides"})
    }; 




// Code pour la connexion du client : --------------------------------------------------//
    try {
        const client = await prisma.client.findUnique({ 
            where: {mail: email}
        })


    if (client) { // si on a trouvé le client, alors on compare le mdp rentré avec celui stocké en BDD en hash: 
        const passwordMatch = await bcrypt.compare(mdp, client.mdp_hash,);  

        if(!passwordMatch) {
            return res.status(401).json({ message: "identifiants invalides" })
        }

        if (!SECRET_KEY) { // on verifie que la secret_key est bien définie pour eviter une erreur typeSecript
            throw new Error ("le clé secrete SECRET_KEY n'est pas définie dans les variables d'environnement")
        }



// génération d'un token jwt pour client : ----------------------------------------------//
            const token = jwt.sign(
                { id: client.id_client, email: client.mail, role: client.role},
                SECRET_KEY, 
                {expiresIn: "7d"}
            ); 



// Génération d'un header comportant le token d'authentification pour l'user dans un cookie onlyHTTP, + le token CSRF
// dans un cookie onlyHTTP et un token CSRF dans un cookie simple : //
    const csrfToken = await tokens.secret(); 

            res.setHeader("Set-Cookie", [
            cookie.serialize("authToken", token, {
                httpOnly: true, 
                secure: ENV === "production" ? true : false, // en dev, on le met à false pour que ca fonctionne sans https
                sameSite: "lax",  // ici en prod il faudra bien verifier si on met "lax" ou "none"
                maxAge: 7 * 24 * 60 * 60 , 
                path: "/"
            }), 
            cookie.serialize("csrfToken", csrfToken, {
                httpOnly: true, 
                secure: ENV === "production" ? true : false, 
                sameSite: "lax", // ici en prod il faudra bien verifier si on met "lax" 
                maxAge: 60 * 60 * 1, // 1h 
                path: "/" // tous les chemins 
            }), 
                cookie.serialize("csrfToken", csrfToken, {
                httpOnly: false, // on ne veut pas un cookie onlyHTTP là, on veut que ce soit accessible coté client, coté JS
                secure: ENV === "production" ? true : false, 
                sameSite: "lax", // en prod on verra si on met "lax" ou "none"
                maxAge: 60 * 60 * 1, // 1h de validité 
                path: "/", 
                })
            ]); 



// on va effacer les sessions précédentes de cet user avant d'en recreer une valide : ------------------------- //

            await prisma.session.deleteMany({
                where: { id_client: client.id_client}
            })
        



// Code pour la création d'une nouvelle session :----------------//
        const session = await prisma.session.create ({
            data: {
                token: token,
                date_connexion: new Date(),  
                is_active: true, 
                id_client: client.id_client,
            }
        })



// Code pour la réponse en cas de succès de l'appel API : -------------------------//
    return res.status(200).json({ message: "Connexion client réussie",isAuthenticated: true, user: client })
        }

 



// Code pour la connexion de l'admin : "si ce n'est pas un client qui essaie de se connecter , alors c'est peut-être l'admin" ----------------------------------------//
        else {const admin = await prisma.admin.findUnique({
                where: { mail: email }
            })

        
        if(admin) {
            // on compare le mdp rentré par l'admin avec celui stocké en bdd :
            const passwordMatch = await bcrypt.compare(mdp, admin.mdp_hash); 
    
            if(!passwordMatch) {
                return res.status(401).json({ message: "identifiants invalides" })
                }
    
            if (!SECRET_KEY) { // on verifie que la secret_key est bien définie pour eviter une erreur typeSecript
            throw new Error ("le clé secrete SECRET_KEY n'est pas définie dans les variables d'environnement")
            }
 
       
            

// génération d'un token jwt pour l'admin : -------------------------------------------//
            const token = jwt.sign(
                { id: admin.id_admin, email: admin.mail, role: admin.role},
                SECRET_KEY, 
                { expiresIn: "7d" }
            ); 


 
            
// Génération d'un header comportant le token d'authentification pour l'admin dans un cookie onlyHTTP, + le token CSRF
// dans un cookie onlyHTTP et un token CSRF dans un cookie simple : //
        const csrfToken = await tokens.secret();      

        res.setHeader("Set-Cookie", [
            cookie.serialize("authToken", token, {
                httpOnly: true,  // dans un cookie only-HTTP
                secure: ENV === "production" ? true : false, // en dev, on le met à false pour que ca fonctionne sans https
                sameSite: "lax",  // ici en prod il faudra bien verifier si on met "lax" ou "none"
                maxAge: 7 * 24 * 60 * 60 , 
                path: "/"
            }), 
            cookie.serialize("csrfToken", csrfToken, {
                httpOnly: true, // dans un cookie onlyHTTP
                secure: ENV === "production" ? true : false, 
                sameSite: "lax", // ici en prod il faudra bien verifier si on met "lax" 
                maxAge: 60 * 60 * 1, // 1h 
                path: "/" // tous les chemins 
            }), 
                cookie.serialize("csrfToken", csrfToken, {
                httpOnly: false, // on ne veut pas un cookie onlyHTTP là, on veut que ce soit accessible coté client, coté JS
                secure: ENV === "production" ? true : false, 
                sameSite: "lax", // en prod on verra si on met "lax" ou "none"
                maxAge: 60 * 60 * 1, // 1h de validité 
                path: "/", 
            }), 
        ]); 

return res.status(200).json({ message: "Connexion admin réussie", isAuthenticated: true,  user: admin })




// Code si ce n'est ni l'Admin ni le client : ----------------------------------------//
        } else {
            return res.status(404).json({ message: "Utilisateur non trouvé ! "})
        }
    }



// Code en cas d'erreur lors dun login : --------------------------------------------//
    } catch(error) {
        console.error("erreur lors de la connexion Admin")
        return res.status(500).json({ message: "Erreur interne du serveur"})
    }   
}
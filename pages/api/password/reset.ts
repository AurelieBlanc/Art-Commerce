// Code pour les imports : ------------------------------------------------- //
import { NextApiRequest, NextApiResponse } from "next"; 
import jwt from "jsonwebtoken"; 
import bcrypt from "bcryptjs"; 
import { z } from "zod";  
import { PrismaClient } from "@prisma/client"; 



const prisma = new PrismaClient(); 
const SECRET_KEY = process.env.JWT_SECRET


// Code pour les typages : --------------------------------------------------- //
interface JwtPayload {
    email: string, 
    iat: number, 
    exp: number
}




// Code pour le shéma de validation du nouveau mot de passe : -------------------- //
export const passwordSchema = z.object({
    password: z.string()
    .min(5, { message: "le mot de passe doit contenir au moins 5 caractères"}) 
    .regex(/[a-z]/, { message: "le mot de passe doit contenir au moins une lettre minuscule"})
    .regex(/[A-Z]/, { message: "le mot de passe doit contenir au moins une lettre majuscule"})
    .regex(/[0-9]/, { message: "le mot de passe doit contenir au moins un chiffre"})
    .regex(/[^a-zA-Z0-9]/, { message: "le mot de passe doit contenir au moins un caractère spécial"}), 
}); 



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
// Code pour verif si la méthode de la requête HTTP reçue est bien la bonne: ------ //
    if(req.method !== "POST") {
        return res.status(405).json({ message: "Erreur HTTP non autorisée" })
    }


// On recupère les données en body : ------------------------------------------- //
    
    const { email, mdp, token } = req.body; 


// On va vérifier le bon format du mot de passe (double verif, car deja fait en front) : //
    try {

    const result = passwordSchema.safeParse({
        password: mdp
    }); 

    if(!result.success) {
        console.log("le format du mot de passe est incorrect"); 
        return res.status(401).json({ message : "format mdp incorrect"})
    }


// On va verifier le token maintenant : ----------------------------------------- //

    if(!SECRET_KEY) {
        throw new Error ("la clé secrète n'est pas correctement définie")
    }; 

    const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload; 




// si decoded ok, on va vérifier l'expiration et arrêter le code si l'expiration est dépassée : //
    const nowTime = Math.floor(Date.now()/1000); 
   
    if (nowTime > decoded.exp) {
        return res.status(401).json({ message: "token expiré"})
    }



// si token pas expiré, on va verifier que l'adresse mail contenu dans le token est bien la meme que celle envoyé en back, pour etre sur que le token n'a pas été falsifié : //
    if(email !== decoded.email) {
         return res.status(401).json({ message: "token falsifié"})
    }



// si toutes les barrières de sécurité ont été validées, alors on va appeler en back l'user (en faisant 2 appels, car on a soit une table client, soit une table admin) : 
    let user = null; 

    user = await prisma.client.findUnique({
        where: {mail: email}
    }); 


    const hashedPassword = await bcrypt.hash(mdp, 10); 

    let newUser = null; 

    if(user) {
        newUser = await prisma.client.update({
        where : { mail: email}, 
        data: {
            mdp_hash: hashedPassword
        }
    }); 
    }
    
   


// Si on a rien trouvé dan la table client, alors on va faire exactement la meme chose, mais dans la table admin : 
    if(!user) { 

        user = await prisma.admin.findUnique({
            where: {mail: email}
        }); 

        
        if(user) {
            newUser = await prisma.admin.update({
            where : { mail: email}, 
            data: {
                mdp_hash: hashedPassword
            }
        });

        }
        
    }

return res.status(200).json({ message: "mot de passe bien modifié", newUser})

   

   
// Bloc catch pour attraper les erreurs si besoin : --------------------------- //
    } catch (error) {
        console.error("erreur lors de la modification du mot de passe")
        return res.status(500).json({ message: "Erreur interne du serveur"})
    }
}
// Code pour les imports : --------------------------------------------//
import { NextApiRequest, NextApiResponse } from "next";
import  jwt from "jsonwebtoken";
import * as cookie from "cookie"; 
import { PrismaClient } from "@prisma/client"; 


const SECRET_KEY = process.env.JWT_SECRET; 
const ENV = process.env.NODE_ENV; 
const prisma = new PrismaClient(); 




// Code pour les typages : ---------------------------------------------- //
interface JwtPayload {
    id: number, 
    email: string, 
    role: string
}






export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if(req.method !== "POST") {
        return res.status(405).json({ message: "requête HTTP non autorisée"})
    }



// Code pour verifier le authToken pour etre sur que la requete provient bien d'un client ou de l'admin du site + la bonne provenance de la requête : //   
    try {

    const cookies = cookie.parse(req.headers.cookie || ""); 

    const authToken = cookies.authToken; // cookie onlyHTTP
    const csrfToken = cookies.csrfToken;  // cookie onlyHttp

    const csrfTokenClient = req.headers["x-csrf-token"] // cookie coté client

    if(!authToken) {
        return res.status(401).json({ message: "Token Auth manquant" })
    }

    if(!csrfToken) {   // verif pour eviter erreur TS
        return res.status(401).json({ message: "Token csrf manquant" })
    }

    if(!csrfTokenClient) {   // verif pour eviter erreur TS
        return res.status(401).json({ message: "Token CsrfClient manquant" })
    }

    if(!SECRET_KEY) {
        throw new Error ("la clé sécrète n'est pas correctement définie")
    }




// si les tokens csrf ne correspondent pas, on return : ------------------------------ //
        if(csrfToken !== csrfTokenClient ) {
            return res.status(403).json({ message: "CSRF invalide"})
        }




// là on va vérfier le authToken, si on a un objet decoded bien valide : ------------- //        
    const decoded = jwt.verify(authToken, SECRET_KEY) as JwtPayload; 
     


// Si on a bien un authToken valide, alors on va écraser tous les cookies authToken et csrfToken onlyHTTP et csrfToken classique en modifiant leur durée à 0 : //
    if(decoded) {

         res.setHeader("Set-Cookie", [
                    cookie.serialize("authToken", "", {
                        httpOnly: true, 
                        secure: ENV === "production" ? true : false, // en dev, on le met à false pour que ca fonctionne sans https
                        sameSite: "lax",  // ici en prod il faudra bien verifier si on met "lax" ou "none"
                        maxAge: 0 , 
                        path: "/"
                        }), 
                    cookie.serialize("csrfToken", "", {
                        httpOnly: true, 
                        secure: ENV === "production" ? true : false, 
                        sameSite: "lax", // ici en prod il faudra bien verifier si on met "lax" 
                        maxAge: 0, // 1h 
                        path: "/" // tous les chemins 
                        }), 
                    cookie.serialize("csrfToken", "", {
                        httpOnly: false, // on ne veut pas un cookie onlyHTTP là, on veut que ce soit accessible coté client, coté JS
                        secure: ENV === "production" ? true : false, 
                        sameSite: "lax", // en prod on verra si on met "lax" ou "none"
                        maxAge: 0, // 1h de validité 
                        path: "/", 
                        })
                    ]); 

        }



// Ici, si c'est un client, on va effacer sa session en cours : -------------- //
    if(decoded.role === "client") {
        const deletedClient = await prisma.session.deleteMany({
            where: { id_client: decoded.id }
        })
    }






// On va retourner une réponse avec un statut isAuthenticated à false pour mettre à jour le state global en front : //
    return res.status(200).json({ message: "user ou admin déconnecté", isAuthenticated : false });



// Code pour attraper une erreur : -------------------------------------//
    } catch(error) {
        console.error("Erreur lors de la vérif de la déconnexion du client ou de l'admin", error); 
        return res.status(500).json({ message: "erreur serveur" })
    }
}
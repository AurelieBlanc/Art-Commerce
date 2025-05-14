// Code pour les imports : ------------------------------------------------ //
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client"; 
import * as cookie from "cookie"; 
import jwt from "jsonwebtoken"; 

const prisma = new PrismaClient(); 
const SECRET_KEY = process.env.JWT_SECRET; 




// Code pour le typage :  ----------------------------------------------- //
interface JwtPayload {
    id: number, 
    email: string, 
    role: string, 
    iat: number, 
    exp: number
}





export default async function handler(req:NextApiRequest, res:NextApiResponse) {

// Code pour verifier que la methode est bien respectée : -------------------- //
    if(req.method !== "PATCH") {
        return res.status(405).json({ message: "requête HTTP non autorisée "})
    }




// Ici on recupère l'id de la commande en question : ----------------------- //
    const { id } =  req.query; 
    const { statutCommande } = req.body; 
   


// Code pour les verifs de securité : authntification de l'admin et provenance de la requête ? //
// Recupération des données dans un premier temps : ----------------------- //
    try {
        const cookies = cookie.parse(req.headers.cookie || "" ); // là on recup les cookies onlyHTTP seulement car on est coté serveur
                        
        const authToken = cookies.authToken // récup cookie onlyHTTP authToken
        const csrfToken = cookies.csrfToken // récup cookie onlyHTTP csrfToken

        if(!authToken) {
        throw new Error ("pas de authToken")
        }

        if(!csrfToken) {
        throw new Error ("pas de csrfToken")
        }  

        const csrfTokenClient = req.headers["x-csrf-token"]; // Recup cookie envoyé en en-tête csrfToken
          
        if(!csrfTokenClient) {
            throw new Error ("pas de csrfTokenClient dans le header")
        }



// Dans un deuxième temps, on procède aux différentes validations : ------------- //     
        if(!SECRET_KEY) {
            throw new Error ("la clé sécrète n'est pas correctement définie")
        }

        const decoded = jwt.verify(authToken, SECRET_KEY) as JwtPayload; 
        
        if(!decoded) {
            return res.status(403).json({ message: "authToken invalide"})
        }

        if(csrfToken !== csrfTokenClient ) {
            return res.status(403).json({ message: "CSRF invalide"})
        }     


// si authToken et csrf validés, alors on modifie le statut de la commande : ------------- //
        let updatedOrder; 

        if (decoded && csrfToken && decoded.role === "admin") {
            updatedOrder = await prisma.commande.update({
                where: { id_commande: Number(id)}, 
                data: {
                    statut: statutCommande.statut
                }
            })
        }

        return res.status(200).json({ message: "modifification de statut de commande réussie", updatedOrder})

    } catch (error) {
         console.error("erreur lors de la modification de commande")
        return res.status(500).json({ message: "Erreur interne du serveur"})
    }

}
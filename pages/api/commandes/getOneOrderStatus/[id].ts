// Code pour les imports : ------------------------------------------------//
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
// Verification de la méthode : --------------------------------------------- //
    if(req.method !== "GET") {
        return res.status(405).json({ message: "requête HTTP non autorisée "})
    }




// Recupération de l'id de la commande concernée : --------------------------- //
    const { id } = req.query; 




// Récup du cookie onlyHTTP pour faire les verifs sécurité : -------------------- /
    try {
        const cookies = cookie.parse(req.headers.cookie || ""); 
        const authToken = cookies.authToken; 

        if(!authToken) {
            throw new Error("pas de authToken")
        }; 


        if(!SECRET_KEY) {
            throw new Error ("la clé sécrète n'est pas correctement définie")
        }; 

        const decoded = jwt.verify(authToken, SECRET_KEY) as JwtPayload; 
        
        
        if(!decoded) {
            return res.status(403).json({ message: "authToken invalide" })
        }

// Si les verifs sécurité sont un succès alors, on va chercher en BDD la commande grâce à son ID: //
        let order; 

        if(decoded && decoded.role === "admin") {
            order = await prisma.commande.findUnique({
            where : { id_commande: Number(id)} 
        }); 
        }
        
        return res.status(200).json({ order })

    } catch(error) {
        console.error("erreur lors de la récupération de commande")
        return res.status(500).json({ message: "Erreur interne du serveur"})
    }
}

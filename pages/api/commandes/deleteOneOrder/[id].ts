// Code pour les imports : ---------------------------------------------------- //
import { NextApiRequest, NextApiResponse } from "next"; 
import { PrismaClient } from "@prisma/client"; 
import * as cookie from "cookie"; 
import jwt from "jsonwebtoken"; 

const prisma = new PrismaClient(); 
const SECRET_KEY = process.env.JWT_SECRET; 

interface JwtPayload {
    id: number, 
    email: string, 
    role: string, 
}



export default async function handle ( req:NextApiRequest, res:NextApiResponse ) {
    if(req.method !== "DELETE") {
        return res.status(405).json({ message: "requête HTTP non autorisée "})
    }

// On récupère l'id de la commande à supprimer : -------------------------- //
    const { id } = req.query; 

 
    

// Code pour la sécurité : On va checker que la requête provient bien de l'admin avec le authToken et la bonne provenance de la requête : //
// On va d'abord recupérer les cookies necessaires : ------------------ //
    try {
        const cookies = cookie.parse(req.headers.cookie || "" ); 

        const authToken = cookies.authToken // cookie onlyHTTP
        const csrfToken = cookies.csrfToken // cookie onlyHTTP

        const csrfTokenClient = req.headers["x-csrf-token"] // cookie recup coté navigateur

        if(!authToken) {
            throw new Error("pas de authToken")
        }

        if(!csrfToken) {
            throw new Error("pas de csrfToken")
        }

        if(!csrfTokenClient) {
            throw new Error("pas de csrfTokenClient")
        }

// On checke d'abord si les csrf token coincident : ------------------------- //
        if(csrfToken !== csrfTokenClient) {
            return res.status(403).json({ message: "CSRF invalide"})
        }



// On va checker le authToken : -------------------------------------------- //
        if(!SECRET_KEY) {
            throw new Error("la clé secrète n'est pas définie")
        }

        const decoded = jwt.verify(authToken, SECRET_KEY) as JwtPayload; 

        if(!decoded) {
            return res.status(403).json({message: "authToken invalide"})
        }

        let deletedOrder; 

    // ici, on va appeler Prisma pour supprimer une commande : 
        if(csrfToken && decoded && decoded.role === "admin") {
            deletedOrder = await prisma.commande.delete({
                where: {id_commande: Number(id)}
            })
        }

    return res.status(200).json({ message: "commande bien supprimée", deletedOrder})


    } catch(error) {
        console.error("erreur lors de la suppression de la commande")
        return res.status(500).json({ message: "Erreur interne du serveur"})
    }

}
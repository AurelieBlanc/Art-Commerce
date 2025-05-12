// Code pour les imports : -------------------------------------------------- //
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


export default async function getAllOrders(req: NextApiRequest, res:NextApiResponse) {
// On verifie la methode avant de continuer : ------------------------------- //
    if(req.method !== "GET") {
        return res.status(405).json({ message: "requête HTTP non autorisée"})
    }



    try {

// Code pour valider la sécurité, pour verifier que notre admin est bien authentifié : //
    const cookies = cookie.parse(req.headers.cookie || "" ); 

    const authToken = cookies.authToken // cookie onlyHTTP

    if(!authToken) {
        throw new Error ("pas de authToken")
    }

    if(!SECRET_KEY) {
          throw new Error ("la clé sécrète n'est pas correctement définie")
    }

    const decoded = jwt.verify(authToken,SECRET_KEY) as JwtPayload; 

    if(!decoded) {
        return res.status(403).json({ message: "authToken invalide"})
    }

    let orders; 

    if(decoded && decoded.role === "admin") {
        orders = await prisma.commande.findMany(); 
    }; 
    
    return res.status(200).json(orders); 


    } catch (error) {
        console.error("erreur lors de la création d'un nouveau produit")
        return res.status(500).json({ message: "Erreur interne du serveur"})
    }


}
// Code pour les imports : ------------------------------------------------//
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
    iat: number, 
    exp: number
}



export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if(req.method !== "GET") {
        return res.status(405).json({ message: "requête HTTP non autorisée "})
    }

    const { id } =  req.query; 

    try {
// Recup du cookie onlyHTTP : -------------------------------------------- //

        const cookies = cookie.parse(req.headers.cookie || ""); 
        const authToken = cookies.authToken; 

        if(!authToken) {
            throw new Error("pas de authToken")
        }; 


        if(!SECRET_KEY) {
            throw new Error ("la clé sécrète n'est pas correctement définie")
        }; 


        const decoded = jwt.verify(authToken, SECRET_KEY) as JwtPayload; 
        
        console.log("comment est foutu l'objet decoded pour qu'on puisse le typer ? ", decoded)

        if(!decoded) {
            return res.status(403).json({ message: "authToken invalide" })
        }

        const order = await prisma.commande.findUnique({
            where : { id_commande: Number(id)} 
        }); 

        console.log("qu'a ton recupéré dans order ? ", order); 

        if(decoded.id !== order?.id_client) {
            return res.status(403).json({ message: "accès interdit"})
        }

        const customer = await prisma.client.findUnique({
            where: { id_client: Number(decoded.id)}
        }); 

        console.log("qu'est ce qu'on recupère dans customer", customer); 

        return res.status(200).json({ message: "Données bien recup en back", order, customer})


    } catch (error) {
        console.error("erreur lors de la récupération de la validation de commande")
        return res.status(500).json({ message: "Erreur interne du serveur"})
    }
}
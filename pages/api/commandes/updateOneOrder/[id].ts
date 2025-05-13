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
    if(req.method !== "GET") {
        return res.status(405).json({ message: "requête HTTP non autorisée "})
    }

// Ici on recupère l'id de la commande en question : --------- //
    const { id } =  req.query; 
    
    try {

    } catch (error) {
         console.error("erreur lors de la modification de commande")
        return res.status(500).json({ message: "Erreur interne du serveur"})
    }

}
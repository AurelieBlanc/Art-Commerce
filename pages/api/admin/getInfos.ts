// Code pour les imports : -----------------------------------------------------//
import { NextApiRequest, NextApiResponse } from "next";
import jwt  from "jsonwebtoken";
import * as cookie from "cookie";
import { PrismaClient } from "@prisma/client"; 
 


const prisma = new PrismaClient(); 
const SECRET_KEY = process.env.JWT_SECRET; 


// Code pour le typage : 
interface JwtPayload {
    id: number, 
    email: string, 
    role: string
}



export default async function handler (req: NextApiRequest, res:NextApiResponse) {
    if(req.method !== "GET") {
        return res.status(405).json({ message: "requete HTTP non autorisée "})
    }

    try {
// Code pour vérif l'authentification de l'admin : 

    const cookies = cookie.parse(req.headers.cookie || ""); // pour recup le cookie onlyHTTP

    const authToken = cookies.authToken // on recup le authToken; 

    if(!authToken) {
        throw new Error ("pas de authToken !")
    }

    if(!SECRET_KEY) {
        throw new Error ("pas de clé secrete definie dans les variables d'environnement")
    }

    const decoded = jwt.verify(authToken, SECRET_KEY) as JwtPayload; 

    if(!decoded) {
        return res.status(403).json({ message: "authToken invalide"})
    }

// si le decoded est bon et si le role est bien admin, alors on va aller chercher les infos sur l'admin avec Prisma : //
    let infosAdmin; 

    if(decoded && decoded.role === "admin") {
        
        infosAdmin = await prisma.admin.findUnique ({
            where: {
                id_admin : 1
            }
        })
    }

    return res.status(200).json({ message: "infos Admin bien récupérées", infosAdmin})



// Code pour gérer les erreurs : --------------------------------------------------- // 
    } catch(error) {
        console.error("erreur lors de la récupération des infos de l'admin")
        return res.status(500).json({ message: "Erreur interne du serveur"})
    }

}




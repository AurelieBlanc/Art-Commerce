// Code pour les imports : ---------------------------------------------//
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client"; 
import * as cookie from "cookie";
import jwt from "jsonwebtoken"; 

const prisma = new PrismaClient(); 
const SECRET_KEY = process.env.JWT_SECRET; 



interface JwtPayload {
    id: number, 
    email: string,
    role: string
}





  export default async function getOneProduct(req:NextApiRequest, res:NextApiResponse) {
    if(req.method !== "GET") {
        return res.status(405).json({ message: "requête HTTP non autorisée "})
    }

    const { id } = req.query; 


//Code pour verif l'auth de l'admin : -------------------------------------//

    try {
        const cookies = cookie.parse(req.headers.cookie || "" ); // recup des cookies onlyHttp

        const authToken = cookies.authToken; 

        if(!authToken) {
            throw new Error ("pas de authToken")
        };

        if(!SECRET_KEY) {
            throw new Error ("la clé sécrète n'est pas correctement définie")
        };

        const decoded = jwt.verify(authToken, SECRET_KEY) as JwtPayload; 

        if(!decoded) {
           return res.status(403).json({ message: "authToken invalide"})
        }

        let oneProduct; 

        if(decoded && decoded.role ==="admin") {

            oneProduct = await prisma.produit.findUnique ({
                where:{
                    id_produit: Number(id) 
            }
        })

        }

        console.log("oneProduct", oneProduct)

    return res.status(200).json(oneProduct); 

// Code en cas d'erreur: -----------------------------------------------//
    } catch(error) {
    console.error("erreur lors de la récupération du produit")
    return res.status(500).json({ message: "Erreur interne du serveur"})
    }

}


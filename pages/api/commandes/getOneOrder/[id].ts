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
    if(req.method !== "GET") {
        return res.status(405).json({ message: "requête HTTP non autorisée "})
    }

// Ici on recupère l'id de la commande en question : --------- //
    const { id } =  req.query; 


    
    try {
// Recup du cookie onlyHTTP et verifs sécurité : ---------------------------------- //

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
        const order = await prisma.commande.findUnique({
            where : { id_commande: Number(id)} 
        }); 



// On verifie si l'id dans le authToken est bien le même que dans la commande cherchée en BDD, et si oui ... //
        if(decoded.id !== order?.id_client) {
            return res.status(403).json({ message: "accès interdit"})
        }



// ....on va chercher aussi le customer corespondant en BDD : --------------------------- //
        const customer = await prisma.client.findUnique({
            where: { id_client: Number(decoded.id)}
        }); 

        return res.status(200).json({ message: "Données bien recup en back", order, customer})


    } catch (error) {
        console.error("erreur lors de la récupération de la validation de commande")
        return res.status(500).json({ message: "Erreur interne du serveur"})
    }
}
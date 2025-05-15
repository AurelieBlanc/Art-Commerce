// Code pour les imports : ------------------------------------------ //
import { NextApiRequest, NextApiResponse } from "next";
import jwt  from "jsonwebtoken";
import { PrismaClient } from "@prisma/client"; 
import * as cookie from "cookie"; 

const prisma = new PrismaClient(); 
const SECRET_KEY = process.env.JWT_SECRET; 



// Code pour les typages : 
interface JwtPayload {
    id: number, 
    email: string, 
    role: string
}


export default async function handler (req: NextApiRequest, res: NextApiResponse) {
// condition pour vérifier la bonne méthode : ------------------------------ //
    if(req.method !== "GET") {
        return res.status(405).json({ message: "requete HTTP non autorisée "})
    }



// On récupère l'id du client dans l'URL de la requete : ------------------------------- //
    const { id } = req.query; 

     try {
// On va faire les différentes validations de sécurité, d'abord on va récupérer les données nécéssaires : //
    const cookies = cookie.parse(req.headers.cookie || ""); 

    const { authToken } = cookies; // récup du cookie onlyHTTP

    if(!authToken) {
        throw new Error ("pas de authToken")
    }


// Maintenant qu'in a récup le authToken, on va checker s'il est ok avec l'objet decoded : //
    if(!SECRET_KEY) {
        throw new Error ("la clé sécrète n'est pas correctement définie")
    }

    const decoded = jwt.verify(authToken, SECRET_KEY) as JwtPayload; 
   
    if(!decoded) {
        return res.status(403).json({ message: "authToken invalide"})
    }



// Si authToken valide, on va aller chercher ce qu il nous faut en BDD : -------------- //

    let ordersClient; 

    if(decoded && decoded.role === "client") {
        ordersClient = await prisma.commande.findMany({
            where: {id_client: Number(id)}
        })
    }




// Code pour retourner la réponse à la requête avec les infos attendues : --------------- //
    return res.status(200).json({ ordersClient })
    

   

    } catch(error) {
        console.error("erreur lors de a récupération des commandes du client")
        return res.status(500).json({ message: "Erreur interne du serveur"})
    }

}

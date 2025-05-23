// Code pour les imports : ---------------------------------------- //
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import * as cookie from "cookie"; 
import jwt from "jsonwebtoken";

const prisma = new PrismaClient(); 
const SECRET_KEY = process.env.JWT_SECRET; 



// Code pour les typages : --------------------------------------- //
interface JwtPayload {
    id: string, 
    email: string, 
    role: string
}




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
// Code pour verif si c'est bien la bonne méthode dans la requete HTTP : ------- //
    if(req.method !== "GET") {
        return res.status(405).json({ message : "requête HTTP non autorisée" })
    }


// Code pour faire les verifs de sécurité (est ce bien l'admin ? car seul l'admin doit avoir accès aux produits inactifs): //
    try {
        const cookies = cookie.parse(req.headers.cookie || ""); 

        const authToken = cookies.authToken; // on recup le cookie onlyHTTP

        if(!authToken) {
            throw new Error ("pas de authToken")
        }

        if(!SECRET_KEY) {
            throw new Error ("clé secrète pas correctement définie")
        }

        const decoded = jwt.verify(authToken, SECRET_KEY) as JwtPayload;  
        
        if(!decoded) {
            return res.status(403).json({ message: "authToken invalide"})
        }



// Si decoded OK, et si le role est bien l'admin, alors on va pouvoir aller en BDD  chercher les produits inactifs et non vendus : //
        let inactivesProducts = null; 

        if(decoded && decoded.role === "admin") {
            inactivesProducts = await prisma.produit.findMany({
                where : { 
                    is_active: false, 
                    id_commande: null
                }, 
            })
        }



        
// on return tout cela dans une reponse json : ------------------------------ //
        return res.status(200).json(inactivesProducts); 




// Bloc catch pour attraper les messages d'erreurs si besoin : -------------------- //
    } catch(error) {
        console.error("La recupération de produits inactifs a échouée : ", error)
        return res.status(500).json({ message: "Erreur interne du serveur "})
    }

}



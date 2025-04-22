// Code pour les imports : -----------------------------------------------------//
import { NextApiRequest, NextApiResponse } from "next";
import jwt  from "jsonwebtoken";
import * as cookie from "cookie";
import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient(); 
const SECRET_KEY = process.env.JWT_SECRET; 





export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== "POST") {
        return res.status(405).json({ message: "requete HTTP non autorisée "})
    }

// Code pour recupérer et lire les cookies : --------------------------------------------- //
    
try {
    const cookies = cookie.parse(req.headers.cookie || ""); 
    console.log("cookies : ", cookies)

    const authToken = cookies.authToken; 
    console.log("token : ", authToken ); 

  
    const csrfToken = cookies.csrfToken; 
    console.log("tokenCSRF ", csrfToken); 

    if(!authToken ) {
    return res.status(401).json({ message: "Token Auth manquant" })
    }

    if(!SECRET_KEY) {
        throw new Error ("la clé sécrète n'est pas correcetement définie")
    }

    const decoded = jwt.verify(authToken, SECRET_KEY); 
    

    if(decoded && typeof decoded !== "string") {
        
        console.log("decoded",decoded,  decoded.role, decoded.id, decoded.email ); 
        return res.status(200).json({ isAuthenticated : true});
        
        // ICI on rajoutera un token CSRF 


    } else {
        return res.status(401).json({ message: "Non Autorisé"})
    }

} catch(error) {
    console.error("Erreur lors de la vérif de la connexion de l'user ou l'admin", error); 
    return res.status(500).json({ isAuthenticated: false })
}

}
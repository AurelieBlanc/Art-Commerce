// Code pour les imports : -----------------------------------------------------//
import { NextApiRequest, NextApiResponse } from "next";
import jwt  from "jsonwebtoken";
import * as cookie from "cookie";
import { PrismaClient } from "@prisma/client"; 
import Tokens from "csrf";

const prisma = new PrismaClient(); 
const tokens = new Tokens(); 
const ENV = process.env.NODE_ENV; 
const SECRET_KEY = process.env.JWT_SECRET; 

interface JwtPayload {
    id: number, 
    email: string, 
    role: string
}





export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== "POST") {
        return res.status(405).json({ message: "requete HTTP non autorisée "})
    }



// Code pour recupérer et lire le cookie authToken : ------------------------------------ //
try {
    const cookies = cookie.parse(req.headers.cookie || ""); 

    const authToken = cookies.authToken; 

    if(!authToken) {
    return res.status(401).json({ message: "Token Auth manquant" })
    }

    if(!SECRET_KEY) {
        throw new Error ("la clé sécrète n'est pas correctement définie")
    }



// Code pour vérifier que l'on a bien un objet decoded (sinon ca veut dire que notre authToken n'est pas bon ou expiré) : //
    const decoded = jwt.verify(authToken, SECRET_KEY) as JwtPayload; 
    
    if(decoded) {
    const csrfToken = await tokens.secret(); // on génere un code csrf
        
        
// Code pour recréer un Set-Cookie avec authToken qui sera rafraichit et le token CSRF coté navigateur et coté serveur : //
         res.setHeader("Set-Cookie", [
            cookie.serialize("authToken", authToken, {
                httpOnly: true, 
                secure: ENV === "production" ? true : false, // en dev, on le met à false pour que ca fonctionne sans https
                sameSite: "lax",  // ici en prod il faudra bien verifier si on met "lax" ou "none"
                maxAge: 7 * 24 * 60 * 60 , 
                path: "/"
                }), 
            cookie.serialize("csrfToken", csrfToken, {
                httpOnly: true, 
                secure: ENV === "production" ? true : false, 
                sameSite: "lax", // ici en prod il faudra bien verifier si on met "lax" 
                maxAge: 60 * 60 * 1, // 1h 
                path: "/" // tous les chemins 
                }), 
            cookie.serialize("csrfToken", csrfToken, {
                httpOnly: false, // on ne veut pas un cookie onlyHTTP là, on veut que ce soit accessible coté client, coté JS
                secure: ENV === "production" ? true : false, 
                sameSite: "lax", // en prod on verra si on met "lax" ou "none"
                maxAge: 60 * 60 * 1, // 1h de validité 
                path: "/", 
                })
            ]); 

        
// on retourne une réponse de succès + les données pour s'authentifier au front : ----------//       
    return res.status(200).json({ message: "user ou admin authentifié", isAuthenticated : true, role: decoded.role, id: decoded.id });
           
    } else {
        return res.status(401).json({ message: "Non Autorisé"})
    }

} catch(error) {
    console.error("Erreur lors de la vérif de la connexion de l'user ou l'admin", error); 
    return res.status(500).json({ isAuthenticated: false })
}
}
// Code pour les imports : --------------------------------------------//
import { NextApiRequest, NextApiResponse } from "next";
import  jwt from "jsonwebtoken";
import * as cookie from "cookie"; 


const SECRET_KEY = process.env.JWT_SECRET; 
const ENV = process.env.NODE_ENV; 



export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if(req.method !== "POST") {
        return res.status(405).json({ message: "requête HTTP non autorisée"})
    }



// Code pour verifier le authToken pour etre sur que la requete provient bien d'un client ou de l'admin du site : //
    
    try {

    const cookies = cookie.parse(req.headers.cookie || ""); 

    const authToken = cookies.authToken;
    const csrfToken = cookies.csrfToken; 


    if(!authToken) {
        return res.status(401).json({ message: "Token Auth manquant" })
    }

    if(!SECRET_KEY) {
        throw new Error ("la clé sécrète n'est pas correctement définie")
    }

    const decoded = jwt.verify(authToken, SECRET_KEY); 

    if(decoded) {

         res.setHeader("Set-Cookie", [
                    cookie.serialize("authToken", "", {
                        httpOnly: true, 
                        secure: ENV === "production" ? true : false, // en dev, on le met à false pour que ca fonctionne sans https
                        sameSite: "lax",  // ici en prod il faudra bien verifier si on met "lax" ou "none"
                        maxAge: 0 , 
                        path: "/"
                        }), 
                    cookie.serialize("csrfToken", "", {
                        httpOnly: true, 
                        secure: ENV === "production" ? true : false, 
                        sameSite: "lax", // ici en prod il faudra bien verifier si on met "lax" 
                        maxAge: 0, // 1h 
                        path: "/" // tous les chemins 
                        }), 
                    cookie.serialize("csrfToken", "", {
                        httpOnly: false, // on ne veut pas un cookie onlyHTTP là, on veut que ce soit accessible coté client, coté JS
                        secure: ENV === "production" ? true : false, 
                        sameSite: "lax", // en prod on verra si on met "lax" ou "none"
                        maxAge: 0, // 1h de validité 
                        path: "/", 
                        })
                    ]); 

        }

    return res.status(200).json({ message: "user ou admin déconnecté", isAuthenticated : false });

    } catch(error) {
        console.error("Erreur lors de la vérif de la déconnexion du client ou de l'admin", error); 
        return res.status(500).json({ message: "erreur serveur" })
    }






}
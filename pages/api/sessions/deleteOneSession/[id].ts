// Code pour les imports : ---------------------------------------------- //
import { NextApiRequest, NextApiResponse } from "next"; 
import { PrismaClient } from "@prisma/client"; 
import * as cookie from "cookie"; 
import jwt from "jsonwebtoken"; 

const prisma = new PrismaClient(); 
const SECRET_KEY = process.env.JWT_SECRET; 


// Code pour les typages : ----------------------------------------------- //
interface JwtPayload {
   id: number, 
    email: string, 
    role: string
} 



export default async function handler (req:NextApiRequest, res:NextApiResponse) {
// Code pour vérifier si la méthode HTTP de la requête est la bonne : ----- //  
    if(req.method !== "DELETE") {
        return res.status(405).json({ message: "requete HTTP non autorisée"})
    }



//On va d'abord récupérer en requete, l'id de la session concernée : --------- //
    const { id } = req.query; 




    try {
// Puis on va faire toutes les verifs de sécurité : --------------------------- //
// On va d'abord récupérer les cookies onlyHTTP : // 
    const cookies = cookie.parse(req.headers.cookie || ""); 

    const authToken = cookies.authToken; 
    const csrfToken = cookies.csrfToken; 




// Puis le cookie csrfToken dans le navigateur : ------------------------------ //
    const csrfTokenClient = req.headers["x-csrf-token"]; 



// Vérifs pour éviter les erreurs : -------------------------------------------- //
    if(!authToken) {
        throw new Error ("pas de authToken")
    }

    if(!csrfToken) {
        throw new Error ("pas de csrfToken")
    }

    if(!csrfTokenClient) {
        throw new Error ("pas de csrfTokenClient")
    }
    
    if(!SECRET_KEY) {
        throw new Error ("pas de clé secrète correctement définie")
    }
   



// Verifs si authToken est ok et si csrfToken est ok : -------------------------- //
    if(csrfToken !== csrfTokenClient) {
        return res.status(403).json({ message: "CSRF invalide"})
    }

    const decoded = jwt.verify(authToken, SECRET_KEY) as JwtPayload; 

    if(!decoded) {
        return res.status(403).json({ message: "authToken invalide"})
    }




// Si toutes les verifs de sécurités ont été un succès, alors, on pourra aller en BDD (en s'assurant encore que c'est bien l'admin) : //
    let deletedSession = null; 

    if(decoded && csrfToken && decoded.role === "admin") {
        deletedSession = await prisma.session.delete({
            where: {
                id_session: Number(id)
            }
        })
    }



// Code pour retourner la réponse si succès : ------------------------------------ //
    return res.status(200).json({ message: "Session client bien supprimée", deletedSession})





// Bloc catch error pour récuperer les erreurs si besoin  : -------------------- //
    } catch(error) {
        console.error("Erreur lors de la suppression de la session: ", error); 
        return res.status(500).json({ message: "Erreur interne du serveur", error})
    }
}
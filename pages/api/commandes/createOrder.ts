// Code pour les imports : ------------------------------------------------//
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client"; 
import * as cookie from "cookie"; 
import jwt from "jsonwebtoken"; 

const prisma = new PrismaClient(); 
const SECRET_KEY = process.env.JWT_SECRET; 



export default async function handle(req:NextApiRequest, res:NextApiResponse) {
    if(req.method !== "POST") {
        return res.status(405).json({ message: "requête HTTP non autorisée "})
    }

    const { idClient, idsProduits } =  req.body; 
    


    try {

// Récup des cookies onlyHTTP seulement : //
        const cookies = cookie.parse(req.headers.cookie || ""); 

        const authToken = cookies.authToken; // cookie onlyHTTP
        const csrfToken = cookies.csrfToken; // cookie onlyHTTP

        if(!authToken) {
            throw new Error ("pas de authToken")
            }
    
            if(!csrfToken) {
            throw new Error ("pas de csrfToken")
            }               
              
// récup du cookie envoyé par le header de la requête : //
            const csrfTokenClient = req.headers["x-csrf-token"]; 

            if(!csrfTokenClient) {
                throw new Error ("pas de csrfTokenClient dans le header")
            }


// Code pour les différentes validations pour la sécurité : //
            if(!authToken && !csrfToken && !csrfTokenClient ) {
                return res.status(401).json({ message: "Token(s) mmanquant(s)" })
            }

            if(!SECRET_KEY) {
                throw new Error ("la clé sécrète n'est pas correctement définie")
            }

            const decoded = jwt.verify(authToken, SECRET_KEY); 

            if(!decoded) {
                return res.status(403).json({ message: "authToken invalide" })
            }

            if(csrfToken !== csrfTokenClient ) {
                return res.status(403).json({ message: "CSRF invalide"})
            }

            

// si authToken valide et CSRF aussi, alors on va pouvoir aller chercher en BDD le client avec les infos suivantes, indispensables à la table commande : id_client, adresse_livraison, cp_livraison, ville_livraison, puis creer une commande avec une date_commande en NOW, un statut de commande par defaut type "EN ATTENTE DE PAIEMENT" , avec l'id_client lié... puis ensuite on va aller chercher en BDD les produits grace a idsProduits, et pour chaque produit , on va les lier avec l'id de la commande, et passer  is_active à false (pour qu ils n'apparaissent plus sur le site) puis une fois que ce sera fait, je rappelerai de nouveau la commande, pour renseigner le total ! 


    } catch (error) {
        console.error("erreur lors de la création d'une nouvelle commande")
        return res.status(500).json({ message: "Erreur interne du serveur"})
    }

}
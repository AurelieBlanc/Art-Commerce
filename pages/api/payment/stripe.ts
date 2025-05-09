// Code pour les imports : ------------------------------------------------- //
import { NextApiRequest, NextApiResponse } from "next"; 
import * as cookie from "cookie"; 
import jwt from "jsonwebtoken"; 
import Stripe from "stripe";
import { PrismaClient } from "@prisma/client"; 


const prisma = new PrismaClient(); 
const SECRET_KEY = process.env.JWT_SECRET; 

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-04-30.basil",
});





export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if(req.method !== "POST") {
        return res.status(405).json({ message: "requête HTTP non autorisée"})
    }

    const { email, amount, idCommande } = req.body; 

     if(!email || !amount) {
            return res.status(400).json({ error: "Champs requis manquants"}); 
        }

    try {

        const cookies = cookie.parse(req.headers.cookie || ""); 

        const authToken = cookies.authToken // recup du cookie onlyHTTP
        const csrfToken = cookies.csrfToken // recup du cookie onlyHTTP

        if(!authToken) {
            throw new Error ("pas de authToken")
        }

        if(!csrfToken) {
            throw new Error ("pas de csrfToken")
        }


        const csrfTokenClient = req.headers["x-csrf-token"]; 

        if(!csrfTokenClient) {
            throw new Error ("pas de csrfToken")
        }

        if (!SECRET_KEY) {
            throw new Error("la cle secrète n'est pas correctement définie")
        }

        const decoded = jwt.verify(authToken, SECRET_KEY); 

        if(!decoded) {
            return res.status(403).json({ message: "authToken invalide"})
        }

        if(csrfToken !== csrfTokenClient) {
             return res.status(403).json({ message: "CSRF invalide"})
        }

        const order = await prisma.commande.findUnique ({
            where: { id_commande: Number(idCommande)}
        }); 

       

        if(!order) {
            throw new Error ("la commande pour verification n'a pas été retrouvée en BDD")
        }

         console.log("resultat de order.total et amount :" , Number(order.total), Number(amount)) // A EFFACER ENSUITE

        if (Number(order.total) !== Number(amount) ) {
            return res.status(400).json({ message: "Le montant envoyé ne correspond pas à la commande"})
        }

        if(!process.env.NEXT_PUBLIC_APP_URL) {
            throw new Error("il manque l'URL publique dans les variables d'environnement")
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"], 
            mode: "payment", 
            customer_email: email, 
            line_items: [
                {
                    price_data: {
                        currency: "eur", 
                        product_data: {
                            name: "Commande client"
                        }, 
                        unit_amount: Number(amount * 100), 
                    }, 
                    quantity: 1,
                }
            ], 
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`
        }); 

        console.log("qu'est ce que donne session en console ?", session)

        return res.status(200).json({id: session.id})


    } catch (error) {
        console.error("erreur lors de la création d'une session de paiement pour Stripe"); 
        return res.status(500).json({ messsage: "Erreur interne du serveur"})
    }

}
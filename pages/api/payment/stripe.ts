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


// Code pour récupérer dans le corps de la requête, email, montant et id : ----- // 
    const { email, amount, idCommande } = req.body; 

     if(!email || !amount) {
            return res.status(400).json({ error: "Champs requis manquants"}); 
        }


    try {
// Code pour faire les vérifs de sécurité: authToken et csrfToken : //
        const cookies = cookie.parse(req.headers.cookie || ""); 

        const authToken = cookies.authToken // recup du cookie onlyHTTP
        const csrfToken = cookies.csrfToken // recup du cookie onlyHTTP

        if(!authToken) {
            throw new Error ("pas de authToken")
        }

        if(!csrfToken) {
            throw new Error ("pas de csrfToken")
        }

        const csrfTokenClient = req.headers["x-csrf-token"]; // Récup du cookie classique dans l'en-tête de la requête

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


// Une fois qu'on a passé et validé toutes les étapes de securité, alors on va chercher la commande avec son id ... //
        const order = await prisma.commande.findUnique ({
            where: { id_commande: Number(idCommande)}
        }); 

        if(!order) {
            throw new Error ("la commande pour verification n'a pas été retrouvée en BDD")
        }

// ...pour procéder à une enième verif de securité : est ce que le montant de la commande en BDD est bien égale au montant récupéré dans la requête : //
        if (Number(order.total) !== Number(amount) ) {
            return res.status(400).json({ message: "Le montant envoyé ne correspond pas à la commande"})
        }

        if(!process.env.NEXT_PUBLIC_APP_URL) {
            throw new Error("il manque l'URL publique dans les variables d'environnement")
        }

        const successUrl = `${process.env.NEXT_PUBLIC_APP_URL}/success?idCommande=${idCommande}`;
const cancelUrl = `${process.env.NEXT_PUBLIC_APP_URL}/cancel`;

console.log("✅ URL success Stripe :", successUrl);
console.log("❌ URL cancel Stripe :", cancelUrl);


// ...et si oui, alors on va créer une session de paiement Stripe : ------- //
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
            metadata : { idCommande: idCommande.toString() }, // on envoie à Stripe l'id de la commande en question
        // On renverra sur ces URL, en cas de succès ou d'échec :  --------- //
            success_url: successUrl, 
            // `${process.env.NEXT_PUBLIC_APP_URL}/success?idCommande=${idCommande}`, 
            cancel_url: cancelUrl
            // `${process.env.NEXT_PUBLIC_APP_URL}/cancel`

            
        }); 

        

        return res.status(200).json({id: session.id})


    } catch (error) {
        console.error("erreur lors de la création d'une session de paiement pour Stripe", error); 
        return res.status(500).json({ messsage: "Erreur interne du serveur"})
    }

}
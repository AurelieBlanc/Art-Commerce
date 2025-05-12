// Code pour les imports : -------------------------------------------------- //
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { buffer } from "micro"; 
import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient(); 

if(!process.env.STRIPE_SECRET_KEY) {
    throw new Error ("clé secrète stripe manquante")
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-04-30.basil",
});


export const config = { 
    api: {
        bodyParser: false, 
    }, 
}; 






export default async function handler (req:NextApiRequest, res: NextApiResponse) {
    if(req.method === "POST" ){
        const sig = req.headers["stripe-signature"]!; //sig, c'est l'en-tête envoyée par Stripe dans chaque requête webhook, il contient une signature cryptée permettant de s'assurer que la requete vient bien de Stripe et pas d'un attaquant
        const buf = await buffer(req); //buf permet à Stripe de reconstituer la requête et de valider la signature  

        let event: Stripe.Event; // typage de event

        

        try {

            if(!process.env.STRIPE_WEBHOOK_SECRET) {
            throw new Error ("clé secrète webhook manquante")
            }


            event = stripe.webhooks.constructEvent(  // on construit un objet stripe event
                buf, 
                sig, 
                process.env.STRIPE_WEBHOOK_SECRET!
            ); 

        } catch(error) {
            console.error("Echec de verification de la signature Stripe: ", error); 
            return res.status(400).send("Webhook error")
        }

        if(event.type === "checkout.session.completed") {
            const session = event.data.object as Stripe.Checkout.Session; 
            const idCommande = session.metadata?.idCommande; // dans cet objet, on va récupérer l'id de la commande

            if(idCommande) { // et grace à cet id, on mettra àjour le nouveau statut de commande
                try {
                    await prisma.commande.update({
                        where: { id_commande: Number(idCommande) }, 
                        data: { statut: "PAYEE, EN COURS DE PREPARATION"}
                    }); 

                    console.log("Statut mis a jour pour la commande id: ", idCommande)

                } catch(error) {
                  console.error("Erreur lors de la mise à jour de la commande: ", error); 
                  return res.status(500).send("Erreur interne lors de la mise à jour")
                }
            }

        }

        res.status(200).json({received: true})

    } else {
        res.setHeader("Allow", "POST"); 
        res.status(405).end("Methode HTTP non autorisée")
    }
}
// Code pour les imports : ------------------------------------------------//
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client"; 
import * as cookie from "cookie"; 
import jwt from "jsonwebtoken"; 

const prisma = new PrismaClient(); 
const SECRET_KEY = process.env.JWT_SECRET; 







export default async function handler(req:NextApiRequest, res:NextApiResponse) {
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

            const customer = await prisma.client.findUnique({
                where: { id_client : idClient }
            })


            if(!customer) {
                throw new Error("Client introuvable"); 
            }

            const newOrder = await prisma.commande.create ({
                data: {
                    date_commande: new Date(),
                    statut: "EN ATTENTE DE PAIEMENT",
                    total: 0, 
                    moyen_paiement: "NON DEFINI",  
                    adresse_livraison: customer?.adresse_livraison,
                    cp_livraison: customer?.cp_livraison, 
                    ville_livraison: customer?.ville_livraison, 
                    id_client: Number(customer?.id_client)
                }
            })

            console.log("retour en console de newOrder: ", newOrder); 


            const products = await prisma.produit.findMany({
                where: {
                    id_produit: {
                        in: idsProduits
                    }
                }
            })

            console.log("retour de products en console ", products); 

            const updatedProducts = await prisma.$transaction( // prisma transaction pour s'assurer que TOUS LES produits sont modifiés sinon l'opération stoppe
                products.map((product) =>
                    prisma.produit.update({
                        where: { id_produit: product.id_produit}, 
                        data: {
                            is_active: false, 
                            id_commande: newOrder.id_commande
                        }, 
                    })
                )
            ); 

            console.log("retour en console des produits transformés", updatedProducts); 

            let prixProduits = 0; 

            updatedProducts.map((produit) =>
             prixProduits += Number(produit.prix)); 

            let fdp = 0; 
            if(prixProduits < 150) {
                fdp = 20
            } else if( prixProduits > 150 && prixProduits <300 ) {
                fdp = 10
            } else {
                fdp = 0
            }

            let total = prixProduits + fdp; 

            console.log("total de la Commande en terminal : ", total); 

            const finalOrder = await prisma.commande.update ({
                where: { id_commande: newOrder.id_commande}, 
                data: {
                    total: Number(total)
                }
            })

            console.log("retour en console de la commande finaliésée", finalOrder)


            return res.status(200).json({ message: "validation de la commande éffectuée", idCommande: finalOrder.id_commande})


    } catch (error) {
        console.error("erreur lors de la création d'une nouvelle commande")
        return res.status(500).json({ message: "Erreur interne du serveur"})
    }

}
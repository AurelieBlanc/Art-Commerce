// Code pour les imports : ---------------------------------------------------//
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient(); 





export default async function getProducts(req:NextApiRequest, res:NextApiResponse) {
    if(req.method !== "GET") {
        return res.status(405).json({ message: "requête HTTP non autorisée "})
    }




// Code pour récupérer les paramètres dans le panier : 
    try{
        const { ids } = req.query; 

    if (typeof ids === "string") {
        const idsTable = ids.split(",");
        const idsTabNumber = idsTable.map((elem) => parseInt(elem))

        const produitsPanier = await prisma.produit.findMany({
            where: {
                id_produit: {
                    in: idsTabNumber
                }
            }
        })

        res.status(200).json(produitsPanier)
    }

    } catch(error) {
        console.error("la récuperation des produits panier a échoué", error)
        return res.status(500).json({ message: "Erreur interne du serveur"})
    }
} 


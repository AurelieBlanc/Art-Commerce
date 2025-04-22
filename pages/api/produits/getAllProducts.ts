// Code pour les imports : ---------------------------------------------------//
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient(); 

export default async function getProducts(req:NextApiRequest, res:NextApiResponse) {
    if(req.method !== "GET") {
        return res.status(405).json({ message: "requête HTTP non autorisée "})
    }

    try {

        const produits = await prisma.produit.findMany(); 

        return res.status(200).json(produits); 


    } catch (error) {
        console.error("la récuperation de tous les produits a échoué", error)
        return res.status(500).json({ message: "Erreur interne du serveur"})
    }
}
// Code pour les imports : ---------------------------------------------//
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client"; 
import * as cookie from "cookie";
import { z } from "zod"; 
import jwt from "jsonwebtoken"; 

const prisma = new PrismaClient(); 
const SECRET_KEY = process.env.JWT_SECRET; 




//Code pour les schémas de validation de données Zod pour le form updateProduct : //
export const productSchema = z.object({
    nom: z
    .string()
    .min(1, { message: "nom requis"})
    .regex(/^[\p{L}\p{N}\p{P}\p{S}\p{Zs}]+$/u, { message: "le nom contient des caractères non autorisés"}),
  
  
    description: z
    .string()
    .min(1, { message: "description requise"})
    .regex(/^[\p{L}\p{N}\p{P}\p{S}\p{Zs}]+$/u, { message: "la description contient des caractères non autorisés"}),
  
    prix: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, { message: "Le prix peut avoir maximum 2 décimales"}), 
  
    url: z
    .string()
    .url({ message: "URL invalide"}), 
  
    is_active: z
    .enum(["true", "false"])  // acceptation uniquement de 2 valeurs possibles, true ou false
    .transform((val) => val === "true") // on transforme bien la valeur en boolean
  })



export default async function updateProduct(req:NextApiRequest, res:NextApiResponse) {
    if(req.method !== "PUT") {
        return res.status(405).json({ message: "requête HTTP non autorisée "})
    }

    const { id } = req.query
    console.log("id récupéré coté back : ", id); 

    const body = req.body.produit
    console.log("body récupéré voté back", body)
}

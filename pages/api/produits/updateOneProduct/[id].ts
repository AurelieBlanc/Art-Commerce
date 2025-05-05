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
  
    is_active: z.boolean()
    // .enum(["true", "false"])  // acceptation uniquement de 2 valeurs possibles, true ou false
    // .transform((val) => val === "true") // on transforme bien la valeur en boolean
  })





export default async function updateProduct(req:NextApiRequest, res:NextApiResponse) {
    if(req.method !== "PUT") {
        return res.status(405).json({ message: "requête HTTP non autorisée "})
    }


// Code pour récup l'id dans la requete + le produit dans le body de la requête : //
    const { id } = req.query
    const produit = req.body.produit
   



// Code pour valider coté back le format des données :---------------------------//
        const result = productSchema.safeParse({
            nom: produit.nom, 
            description: produit.description, 
            prix: produit.prix, 
            url: produit.image,
            is_active: produit.is_active
        })
    
        if(!result.success) {
            const errors = result.error.flatten().fieldErrors
        
            const messages = Object.entries(errors) // convertit en tableau d'erreurs
              .map(([field, errs]) => errs?.join(', '))
              .filter(Boolean)
          
            console.log("Erreurs dans le formulaire:\n- " + messages.join("\n- "))
            return
          } else {
            console.log("Les données entrées sont correctes")
          }; 




// Code pour verifier l'authentification de l'admin et la provenance de la requete : // 
          
                
        try {
// Recup des cookies OnlyHTTP seulement : //
        const cookies = cookie.parse(req.headers.cookie || "" ); // là on recup les cookies onlyHTTP seulement car on est coté serveur
                
        const authToken = cookies.authToken // cookie onlyHTTP 
        const csrfToken = cookies.csrfToken // cookie onlyHTTP

        if(!authToken) {
        throw new Error ("pas de authToken")
        }

        if(!csrfToken) {
        throw new Error ("pas de csrfToken")
        }               
          
                  
          
//Recup du cookie envoyé par le header de la requete: //
        const csrfTokenClient = req.headers["x-csrf-token"]; 
          
        if(!csrfTokenClient) {
            throw new Error ("pas de csrfTokenClient dans le header")
        }
          
                  
          
// Code pour faire les différentes validation pour la secu : //
        if(!authToken && !csrfToken && !csrfTokenClient ) {
            return res.status(401).json({ message: "Token(s) mmanquant(s)" })
        }

        if(!SECRET_KEY) {
            throw new Error ("la clé sécrète n'est pas correctement définie")
        }

        const decoded = jwt.verify(authToken, SECRET_KEY); 

        if(!decoded) {
            return res.status(403).json({ message: "authToken invalide"})
        }

        if(csrfToken !== csrfTokenClient ) {
            return res.status(403).json({ message: "CSRF invalide"})
        }



// Si authToken valide et la requete aussi (CSRF), alors on crée un nouveau produit : //    
    let updatedProduct; 
    
    if(decoded && csrfToken) {

        updatedProduct = await prisma.produit.update({
            where: {
                id_produit: Number(id)
            }, 
            data: {
                nom: produit.nom, 
                description: produit.description, 
                prix: produit.prix, 
                image: produit.image,
                is_active: produit.is_active
            }
            
          })


        }

        return res.status(200).json({ message: "produit bien modifié"})




          
// Code en cas d'erreur: -----------------------------------------------//
} catch(error) {
    console.error("erreur lors de la création d'un nouveau produit")
    return res.status(500).json({ message: "Erreur interne du serveur"})
}
  
}
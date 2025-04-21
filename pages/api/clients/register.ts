// Code pour les imports : ---------------------------------------------//
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client"; 
import bcrypt from "bcryptjs"; 
import { z } from "zod"; 

const prisma = new PrismaClient(); 





// Code pour les schémas de validation de données Zod pour le form REGISTER : -----------------------//
export const registerSchema = z.object({
    email: z.string().email({ message: "Email invalide"}),
  
    password: z
    .string()
    .min(5, {message: "le mot de passe doit contenir au moins 5 caractères"})
    .regex(/[a-z]/, { message: "le mot de passe doit contenir au moins une lettre minuscule"})
    .regex(/[A-Z]/, { message: "le mot de passe doit contenir au moins une lettre majuscule"})
    .regex(/[0-9]/, { message: "le mot de passe doit contenir au moins un chiffre"})
    .regex(/[^a-zA-Z0-9]/, { message: "le mot de passe doit contenir au moins un caractère spécial"}), 
  
    nom: z
    .string()
    .min(2, { message: "le nom doit contenir au moins 2 caractères"})
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/, { message: "le nom contient des caractères invalides"}), 
  
    prenom: z
    .string()
    .min(2, { message: "le nom doit contenir au moins 2 caractères"})
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/, { message: "le prénom contient des caractères invalides"}), 
  
    adresse: z
    .string()
    .min(5, { message: "l'adresse est trop courte" })
    .regex(/^\d{0,5}[a-zA-ZÀ-ÖØ-öø-ÿ\s'’\-,.]*$/, { message: "l'adresse contient des caractères invalides"}), 
  
    codePostal:z 
    .string()
    .regex(/^\d{5}$/, { message: "le code postal doit contenir exactement 5 chiffres "}), 
  
    ville:z 
    .string()
    .min (2, { message: "La ville doit contenir au moins 2 caractères"})
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ'’\- ]{2,}$/, { message: "Le nom de la ville contient des caractères invalides"}),
  
    telephone:z 
    .string()
    .regex(/^(\+33|0)[1-9]\d{8}$/, { message: "Numero de téléphone invalide"})
  })
  
  



export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== "POST") {
        return res.status(405).json({ message: "requête HTTP non autorisée "})
    }

// code pour récupérer les données du body : ----------------------------------------//
    const { email, mdp, nom, prenom, adresse, cp, ville, telephone } = req.body;  
        




// Code pour checker les formats des données : ------------------------------------//
     const result = registerSchema.safeParse({
          email, 
          password: mdp, 
          nom, 
          prenom, 
          adresse, 
          codePostal: cp, 
          ville, 
          telephone
        }); 

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



// Code pour créer un nouveau client, en prenant bien soin de hasher son mdp avant l'enregistrement en BDD : //
    try {

      const hashedPassword = await bcrypt.hash(mdp, 10); 

      const newClient = await prisma.client.create({
        data : {
            mail: email, 
            mdp_hash: hashedPassword, 
            role: "client", 
            prenom, 
            nom, 
            adresse_livraison: adresse, 
            cp_livraison: cp, 
            ville_livraison: ville, 
            telephone,  
        }
      }); 

      return res.status(200).json({ message: "utilisateur bien créé", newClient })





// Code pour gérer une erreur : -------------------------------------------------//
    } catch(error) {
        console.error("erreur lors de l'enregistrement d'un nouveau client")
        return res.status(500).json({ message: "Erreur interne du serveur"})
    }

  }
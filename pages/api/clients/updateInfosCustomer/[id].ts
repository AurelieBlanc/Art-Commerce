// Code pour les imports : -----------------------------------------------------//
import { NextApiRequest, NextApiResponse } from "next";
import jwt  from "jsonwebtoken";
import * as cookie from "cookie";
import { PrismaClient } from "@prisma/client"; 
import { z } from "zod"; 


const prisma = new PrismaClient(); 
const SECRET_KEY = process.env.JWT_SECRET; 





// code pour le schéma de validation ZOD pour le form UPDATE : ---------------------------------//
export const updateSchema = z.object({
    email: z.string().email({ message: "Email invalide"}),
  
    // password: z
    // .string()
    // .min(5, {message: "le mot de passe doit contenir au moins 5 caractères"})
    // .regex(/[a-z]/, { message: "le mot de passe doit contenir au moins une lettre minuscule"})
    // .regex(/[A-Z]/, { message: "le mot de passe doit contenir au moins une lettre majuscule"})
    // .regex(/[0-9]/, { message: "le mot de passe doit contenir au moins un chiffre"})
    // .regex(/[^a-zA-Z0-9]/, { message: "le mot de passe doit contenir au moins un caractère spécial"}), 
  
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
    if(req.method !== "PUT") {
        return res.status(405).json({ message: "requete HTTP non autorisée "})
    }


// Code pour recup l'id dans la requête + les infos dans le body : 
    const { id } = req.query; 
    const { infosClient } = req.body; 

    console.log("recupéés en front : ", id, infosClient)





// Code pour valider coté back le format des données :---------------------------//
        const result = updateSchema.safeParse({
            email: infosClient.mail, 
            nom: infosClient.nom, 
            prenom: infosClient.prenom,
            adresse: infosClient.adresse_livraison, 
            codePostal: infosClient.cp_livraison,
            ville: infosClient.ville_livraison, 
            telephone: infosClient.telephone 
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
// Recup des cookies OnlyHTTP seulement :
        const cookies = cookie.parse(req.headers.cookie || "" ); // là on recup les cookies onlyHTTP seulement car on est coté serveur
                
        const authToken = cookies.authToken // cookie onlyHTTP 
        const csrfToken = cookies.csrfToken // cookie onlyHTTP

        if(!authToken) {
        throw new Error ("pas de authToken")
        }

        if(!csrfToken) {
        throw new Error ("pas de csrfToken")
        }               
          
                  
          
//Recup du cookie envoyé par le header de la requete:
        const csrfTokenClient = req.headers["x-csrf-token"]; 
          
        if(!csrfTokenClient) {
            throw new Error ("pas de csrfTokenClient dans le header")
        }



// Code pour faire les différentes validation pour la secu : 
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
       


// si authToken valide et requete CSRF aussi, alors on va modifier les infos du client : //
let updatedClient; 

if(decoded && csrfToken) {
    updatedClient = await prisma.client.update({
        where: {
            id_client: Number(id)
        }, 
        data: {
            mail: infosClient.mail, 
            prenom: infosClient.prenom, 
            nom: infosClient.nom, 
            adresse_livraison: infosClient.adresse_livraison, 
            cp_livraison: infosClient.cp_livraison, 
            ville_livraison: infosClient.ville_livraison, 
            telephone: infosClient.telephone
        }
    })
}

return res.status(200).json({ message: "infos du client bien modifiées", updatedClient})
        




//Code pour attraper une erreur : ------------------------------------------------//
    } catch(error) {
    console.error("erreur lors de la modification des infos client")
    return res.status(500).json({ message: "Erreur interne du serveur"})
    }
}

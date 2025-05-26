// Code pour les imports : --------------------------------------- //
import { NextApiRequest, NextApiResponse } from "next"; 
import nodemailer from "nodemailer"; 
import { z } from "zod"; 





// Code pour le schéma de validation de données ZOD : ------------ //
export const formContactSchema = z.object({
  nom: z
  .string()
  .min(2, {message: "le nom doit contenir au moins 2 caractères"})
  .regex( /^[a-zA-ZÀ-ÖØ-öø-ÿ'’ -]+$/, {message: "le nom contient des caractères invalides" }), 

  prenom: z
  .string()
  .min(2, {message: "le prénom doit contenir au moins 2 caractères"})
  .regex( /^[a-zA-ZÀ-ÖØ-öø-ÿ'’ -]+$/, {message: "le prénom contient des caractères invalides" }), 

  email: z.string().email("Email invalide"), 

  telephone: z
  .string()
  .optional()
  .refine(
    (val) => !val ||  (val.length >= 8 && /^[+]?[\d\s\-().]{7,20}$/.test(val)),
    { message: "Le numéro de téléphone est invalide ou incomplet"}), 

  message: z
  .string()
  .min(10, {message: "Le message est trop court"})
  .max(300, "Message trop long")
})





export default async function handler(req: NextApiRequest, res: NextApiResponse) {
// Code pour valider si la methode de la requête est la bonne : //
    if(req.method !== "POST") {
        return res.status(405).json({ message: "méthode HTTP non autorisée" })
    }





// On récupère les données dans le corps de la requête : //
    const { prenom, nom, email, telephone, message } = req.body; 





// On va checker les formats des données : //
    const result = formContactSchema.safeParse({
        prenom, 
        nom, 
        email, 
        telephone, 
        message
      })
    
      if(!result.success) {
        const errors = result.error.flatten().fieldErrors 
    
        const messages = Object.entries(errors) 
        .map(([field, errs ]) => errs?.join(', '))
        .filter(Boolean) 
    
        console.log("Erreurs dans le formulaire : \n- " + messages.join("\n- "))
        return
      } else {
        console.log("les données entrées sont correctes")
      }

    try {





// On verifie que les variables d'environnement dont on a besoin existent bel et bien , pour eviter les erreurs : //

        if(!process.env.EMAIL) {
            throw new Error ("l'EMAIL dans le .env n'est pas correctement défini")
        }
        if(!process.env.EMAIL_PASSWORD) {
            throw new Error ("l'EMAIL_PASSWORD pour Nodemailer dans le .env n'est pas correctement défini")
        }





// Code pour la création de l'envoi de l'EMAIL via Nodemailer : //       
        const transporter = nodemailer.createTransport ({
            service: "gmail", 
            auth: {
                user: process.env.EMAIL, 
                pass: process.env.EMAIL_PASSWORD
            }
    })




// Ici on definir ce qu'on veut dans le contenu de l'email : //
    const mailOptions = {
        from: process.env.EMAIL, 
        to: process.env.EMAIL, 
        subject: "Nouveau message de contact via ART-COMMERCE", 
        text:
        `Voici les infos pour la demande de contact via Art-Commerce:
            nom: ${nom},
            prenom ${prenom},
            telephone: ${telephone},
            email: ${email},
            message: ${message}`
    }; 

    await transporter.sendMail(mailOptions); 

    return res.status(200).json({ message : "Email bien envoyé"})




// Code pour attraper une erreur si besoin : // 
    } catch(error) {
        console.error("erreur dans l'envoi du formulaire de contact : ", error)
        return res.status(500).json({ message: "Erreur lors de l'envoi de l'email"})
    }
}
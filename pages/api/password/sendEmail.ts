// Code pour les imports : ----------------------------------------- //
import { NextApiRequest, NextApiResponse } from "next"; 
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer"; 
import  { PrismaClient } from "@prisma/client"; 
import { z } from "zod";

const prisma = new PrismaClient(); 
const SECRET_KEY = process.env.JWT_SECRET; 


// Code pour valider le schema du mail : ---------------------------- //
export const emailSchema = z.object({
    email: z.string().email({ message: "Email invalide"}), 
}); 





export default async function handle(req:NextApiRequest, res:NextApiResponse) {
// Code pour verifier si utilisation de la bonne requête HTTP : --------------- //
    if(req.method !== "POST") {
        return res.status(405).json({})
    }



// On récupère l'email envoyé en body : ------------------------------------- //
    const { email } = req.body; 




// Code pour valider le format de l'email : ---------------------------------- //
    const result = emailSchema.safeParse({
            email
        })

        if(!result.success) {
            console.log("le format du mail est incorrect"); 
            return res.status(400).json({ message: "le format de l'email est incorrect"}); 
        } else {
            console.log("Format de l'email correct")
        }



// Code pour aller chercher l'user en fonction de son email; on va se servir de la constante user que ce soit pour un client ou l'admin, ce sera plus simple ensuite : //
    try {
        let user = null; 

        user = await prisma.client.findUnique({
            where: { mail: email}
        }); 
 
        if(!user) {
           user = await prisma.admin.findUnique({
            where: { mail: email}
        });  
        }; 

        if(!user) {
            return res.status(404).json({ message: "L'utilisateur n'existe pas"})
        }

        if(!SECRET_KEY) {
            throw new Error ("attention la clé secrète n'est pas correctement définie")
        }



// Ici on va créer le token de reset avec l'email récupéré du user (soit client soit admin) : //
        const resetToken = jwt.sign(
            { email: user.mail }, 
            SECRET_KEY, 
            { expiresIn: "20m" } // il expirera au bout de 20 minutes 
        )





// On créé le lien de reset qui amènera à la page de reset : ------------------ //
        const resetURL = `http://localhost:3000/forgotPassword/reset?token=${resetToken}`; 



// On configure nodemailer : -------------------------------------------------- //
        const transporter = nodemailer.createTransport({
            service: "gmail", 
            auth: {
                user: process.env.EMAIL, 
                pass: process.env.EMAIL_PASSWORD
            }
        }); 

        const mailOptions = {
            from: process.env.EMAIL, 
            to: email, 
            subject: "Réinitialisation de votre mot de passe", 
            text: `Cliquez sur le lien pour réinitialiser votre mot de passe: ${resetURL}`
        }

        await transporter.sendMail(mailOptions); 

        return res.status(200).json({ message: "email de réinitialisation bien envoyé", email: user.mail})


    } catch (error) {
        console.error(error); 
        return res.status(500).json({ message : "Erreur lors de l'envoi de l'email de réinitialisation"})
    }
}
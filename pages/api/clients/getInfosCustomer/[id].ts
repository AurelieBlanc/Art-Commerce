// Code pour les imports : -----------------------------------------------------//
import { NextApiRequest, NextApiResponse } from "next";
import jwt  from "jsonwebtoken";
import * as cookie from "cookie";
import { PrismaClient } from "@prisma/client"; 


const prisma = new PrismaClient(); 
const SECRET_KEY = process.env.JWT_SECRET; 





export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== "GET") {
        return res.status(405).json({ message: "requete HTTP non autorisée "})
    }




// Code pour recupérer et lire le cookie authToken : ------------------------------------ //
try {
    const cookies = cookie.parse(req.headers.cookie || ""); 

    const authToken = cookies.authToken; 

    if(!authToken) {
    return res.status(401).json({ message: "Token Auth manquant" })
    }

    if(!SECRET_KEY) {
        throw new Error ("la clé sécrète n'est pas correctement définie")
    }




// Code pour vérifier que l'on a bien un objet decoded (sinon ca veut dire que notre authToken n'est pas bon ou expiré) : //
    const decoded = jwt.verify(authToken, SECRET_KEY);  



// Code pour recuperer les infos du client selon son id : ----------------//

    const { id } = req.query // on recupere l'id du client dans la requete 

    let infosClient; 

    if(decoded) {
        infosClient= await prisma.client.findUnique({
            where: {
                id_client: Number(id)
            }
        })
    }

    return res.status(200).json({ message: "infos clients bien recupérés", infosClient})

    
// Code pour attraper une erreur si besoin : ---------------------------------- // 
    } catch(error) {
        console.error("Erreur lors de la recup des infos du client", error); 
        return res.status(500).json({ message: "Erreur serveur" })

    }
}
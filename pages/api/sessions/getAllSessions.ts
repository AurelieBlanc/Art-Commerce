// Code pour les imports : --------------------------------------------------- //
import { NextApiRequest, NextApiResponse } from "next"; 
import { PrismaClient } from "@prisma/client"; 
import * as cookie from "cookie"; 
import jwt from "jsonwebtoken"; 

const prisma = new PrismaClient(); 
const SECRET_KEY = process.env.JWT_SECRET; 



// Code pour les typages : ------------------------------------------------- //
interface JwtPayload {
    id: number, 
    email: string, 
    role: string, 
}



export default async function handler(req: NextApiRequest, res:NextApiResponse) {
// Vérification de la methode HTTP : -------------------------------------- //
    if(req.method !== "GET") {
        return res.status(405).json({ message: "requête HTTP non autorisée "})
    }

    try {




// On va verifier si authToken est ok : ------------------------------------ //

    const cookies = cookie.parse(req.headers.cookie || "" ); 
     
    const authToken = cookies.authToken; 

    if(!authToken) {
        throw new Error ("pas de authToken")
    }

    if(!SECRET_KEY) {
        throw new Error ("la clé secrète n'est pas correctement définie"); 
    }

    const decoded = jwt.verify(authToken, SECRET_KEY) as JwtPayload; 

    if(!decoded) {
        return res.status(403).json({ message: "authToken invalide"})
    }




// Si les verifs de securité sont ok, on va pouvoir appeler les données qui nous interessent en BDD : //

//     let sessions = null; 
//     let clients = null; 



// // Recupération d'abord de toutes les sessions existantes : ----------------------- //
//     if(decoded && decoded.role === "admin") {
//         sessions = await prisma.session.findMany(); 

//         let idsClients: number[] = []; 
//         sessions.map((session) => {
//             idsClients.push(session.id_client)
//         })

       


// // Récupération ensuite de tous les clients qui ont une session existante actuellement, donc qui sont connectés actuellement : //
//         clients = await prisma.client.findMany({
//             where: {
//                 id_client: { 
//                     in: idsClients
//                 }
//             }}); 
//     }



// Récupération de toutes les sessions existantes + les infos clients qui leur sont associées : //
         let sessionsClients = null; 

        if(decoded && decoded.role === "admin") {
            sessionsClients = await prisma.session.findMany({
                select: {
                    id_session: true, 
                    token: true, 
                    date_connexion: true, 
                    id_client: true, 
                    client: {
                        select: {
                            mail: true, 
                            prenom: true, 
                            nom: true
                        }
                    }
                }
            })
         }

    

    return res.status(200).json({sessionsClients})

   

    
// On crée un bloc pour attraper les erreurs si besoin : ----------------- //
    } catch(error) {
        console.error("erreur lors de la récupération des sessions : ", error)
        return res.status(500).json({ message: "Erreur interne du serveur" })
    }
}

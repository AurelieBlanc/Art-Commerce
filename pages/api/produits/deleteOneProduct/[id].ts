// Code pour les imports : ---------------------------------------------//
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client"; 
import * as cookie from "cookie";
import jwt from "jsonwebtoken"; 

const prisma = new PrismaClient(); 
const SECRET_KEY = process.env.JWT_SECRET; 





export default async function deleteProduct( req:NextApiRequest, res:NextApiResponse ) {
    if(req.method !== "DELETE") {
        return res.status(405).json({ message: "requête HTTP non autorisée "})
    }


// Code pour récupérer l'id du produit à supprimer dans la requête : ------------//
    const { id } = req.query // query c'est pour recupérer dans la REQUETE
    const idToDelete = Number(id); 



// Code pour la securité : on recupére les cookies onlyHTTP authToken et Csrf + cookie csrf pour s'assurer de la provenance de la requete + de l'utilisateur : //
    try {
        const cookies = cookie.parse(req.headers.cookie || "" ); 

        const authToken = cookies.authToken // cookie onlyHttp
        const csrfToken = cookies.csrfToken // cookie onlyHttp

        const csrfTokenClient = req.headers["x-csrf-token"] // cookie coté client

        if(!authToken) {   // verif pour eviter erreur TS
            throw new Error ("pas de authToken")
        }
  
          if(!csrfToken) {   // verif pour eviter erreur TS
            throw new Error ("pas de csrfToken")
        }
        
          if(!csrfTokenClient) {    // verif pour eviter erreur TS
            throw new Error ("pas de csrfTokenClient dans le header")
        }



// si un token manque, on return : -------------------------------------------//
        if(!authToken && !csrfToken && !csrfTokenClient ) {
            return res.status(401).json({ message: "Token(s) mmanquant(s)" })
        }




// si les tokens csrf ne correspondent pas, on return : ---------------------//
        if(csrfToken !== csrfTokenClient ) {
            return res.status(403).json({ message: "CSRF invalide"})
        }



// on checke le authToken : ------------------------------------------------//
        if(!SECRET_KEY) {
            throw new Error ("la clé sécrète n'est pas correctement définie")
        }
    
        const decoded = jwt.verify(authToken, SECRET_KEY); 
        
        if(!decoded) { // si on na pas d'objet decoded, on return
            return res.status(403).json({ message: "authToken invalide"})
        }

       



// si on a bien un objet decoded et un csrfToken ok, alors on peut supprimer le produit avec l'id en question : //

        let deletedProduct;

        if(decoded && csrfToken){
            deletedProduct =  await prisma.produit.delete({
                where: {
                    id_produit: idToDelete
                }
            }); 
        }

    return res.status(200).json({ message: "produit bien supprimé"})



// Code pour attraper une erreur : -------------------------------------//
    } catch(error) {
        console.error("erreur lors de la suppression du produit")
        return res.status(500).json({ message: "Erreur interne du serveur"})
    }
}
// Code pour les Imports : -------------------------------------------------------------//
import { NextResponse, NextRequest } from "next/server"; 
import { jwtVerify } from "jose"; // on importe jose pour vérifier le token car sur ce fichier le jwt ne fonctionne pas



const SECRET_KEY = process.env.JWT_SECRET; 


export default async function middleware(req: NextRequest) {

    console.log("MIDDLEWARE ADMIN BIEN EXECUTE")

    const authToken = req.cookies.get("authToken")?.value;

    if(!authToken) {
      console.log("authToken manquant; redirection vers la page d'accueil"); 
      return NextResponse.redirect(new URL("/", req.url))
    }

      try {

       
        if(!SECRET_KEY) {
            throw new Error("la secret Key n'est pas définie dans les variables d'env")
        }

        const secret = new TextEncoder().encode(SECRET_KEY); // convertir la clé dans le bon format pour jose
        const { payload } = await jwtVerify (authToken, secret); // la constante payload renvoie un objet avec la propriété role (on peut donc verifier si c'est bien l'admin)


        if(payload.role !== "admin") {
            console.log("ce n'est pas l'admin")
            return NextResponse.redirect(new URL("/", req.url))
        }

        return NextResponse.next()

      } catch (error: any) {
        console.log("Erreur dans le middleware: ", error.message)
        return NextResponse.redirect(new URL("/", req.url))
      }

}

export const config = {
    matcher: [ 
        "/products/newProduct/:path*",
        "/products/updateProduct/:path*", 
     ] //path* : toutes les routes et sous routes de : products/newProduct 
}
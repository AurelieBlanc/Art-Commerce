// Code pour les Imports : -------------------------------------------------------------//
import { NextResponse, NextRequest } from "next/server"; 
import { jwtVerify } from "jose"; // on importe jose pour vérifier le token car sur ce fichier le jwt ne fonctionne pas



const SECRET_KEY = process.env.JWT_SECRET; 


export default async function middleware(req: NextRequest) {

    console.log("MIDDLEWARE ADMIN BIEN EXECUTE")

    const authToken = req.cookies.get("authToken")?.value;
    const csrfToken = req.cookies.get("csrfToken")?.value; 


// ici on recupere le csrf coté client, dans le header:
    const csrfTokenClient = req.headers.get("x-csrf-token"); 

    if(!authToken) {
      console.log("authToken manquant; redirection vers la page d'accueil"); 
      return NextResponse.redirect(new URL("/", req.url))
    }

    if(!csrfToken) {
        console.log("csrfToken manquant; redirection vers la page d'accueil"); 
        return NextResponse.redirect(new URL("/", req.url))
    }

    if(!csrfTokenClient) {
        console.log("csrfTokenClient manquant; redirection vers la page d'accueil"); 
      return NextResponse.redirect(new URL("/", req.url))
      }

      try {

        if(csrfToken !== csrfTokenClient) {
            console.log("CSRF invalides")
            return NextResponse.redirect(new URL("/", req.url))
        }

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
    matcher: [ "/products/newProduct/:path*" ] //path* : toutes les routes et sous routes de : products/newProduct 
}
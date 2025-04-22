//Code pour les imports : --------------------------------------------------------------//
"use client"
import { useRef } from "react"; 
import { z } from "zod"; 
import Cookies from "js-cookie"; 






//Code pour les schémas de validation de données Zod pour le form createProduct : //
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
    .url({ message: "URL invalide"})
})






export default function createProduct() {

const nomRef = useRef<HTMLInputElement>(null); 
const descriptionRef = useRef<HTMLTextAreaElement>(null); 
const prixRef = useRef<HTMLInputElement>(null); 
const imageRef = useRef<HTMLInputElement>(null)

const handleSubmitNewProduct =  async(e: React.FormEvent) => {
    e.preventDefault(); 

    const form = e.currentTarget as HTMLFormElement // cette ligne nous permettra de reste le formulaire aores la validation

    const nom = nomRef.current?.value
    const description = descriptionRef.current?.value
    const prix = prixRef.current?.value
    const image = imageRef.current?.value

    console.log(nom, description, prix, image); 

    const result = productSchema.safeParse({
        nom, 
        description, 
        prix, 
        url: image, 
    })

    if(!result.success) {
        const errors = result.error.flatten().fieldErrors
    
        const messages = Object.entries(errors) // convertit en tableau d'erreurs
          .map(([field, errs]) => errs?.join(', '))
          .filter(Boolean)
      
        alert("Erreurs dans le formulaire:\n- " + messages.join("\n- "))
        return
      } else {
        console.log("Les données entrées sont correctes")
      }

    try {
        const response = await fetch ("/api/produits/createNewProduct", {
            method: "POST", 
            credentials: "include", // pour envoyer aussi les cookies onlyHTTP en back
            headers: {
                'Content-Type': "application/json", 
                "x-csrf-token": Cookies.get("csrfToken") || "", 
            }, 
            body: JSON.stringify({
                nom, 
                description, 
                prix, 
                image
            }), 
        })

        if(!response.ok) {
            throw new Error("Création de client non aboutie")
           }
      
        const data = await response.json();
        // A ADAPTER peut etre a mon back, à voir 

        form.reset() // on reset le formulaire
        return; 

    } catch (error) {
        console.error("Erreur lors de la création du produit", error); 
        alert ("Echec lors de la création du nouveau produit")
    }
}


  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center flex justify-center flex-col items-center">
        

        <div
            className="w-[350px] h-[1000px] flex flex-col text-center">

        <h2
            className="font-boogaloo text-3xl mt-5">
            Page pour ajouter un nouveau produit
        </h2>

        <form
            className="flex flex-col mt-10 font-rubik"
            onSubmit={handleSubmitNewProduct}>
            
            {/* Champ nom: */}
            <label 
                htmlFor="nomProduit"
                className="">
                Nom du produit: 
            </label>
            <input 
                type="text"
                className="rounded-sm"
                id="nomProduit"
                ref={nomRef}
                required/>


            {/* Champ description: */}
            <label 
                htmlFor="description"
                className="">
                Description du produit: 
            </label>
            <textarea 
                className="rounded-sm"
                id="description"
                rows={3}
                cols={5}
                ref={descriptionRef}
                required/>

              {/* Champ prix: */}
              <label 
                htmlFor="prix"
                className="">
                Prix du produit en euro: 
            </label>
            <input 
                type="text"
                className="rounded-sm"
                id="prix"
                ref={prixRef}
                required/>

             {/* Champ image: */}
             <label 
                htmlFor="imageProduit"
                className="">
                URL de l'image du produit: 
            </label>
            <input 
                type="text"
                className="rounded-sm mb-10"
                id="imageProduit"
                ref={imageRef}
                required/>

            <button
                className="w-[150px] h-[60px] bg-slate-700 text-white rounded-md font-boogaloo mx-auto text-xl ">
                Valider le produit      
            </button>
           
            

        </form>
        </div>

    </div>
  )
}

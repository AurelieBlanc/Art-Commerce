//Code pour les imports : -------------------------------------------------//
"use client"
import { useState, useEffect } from "react"; 
import { useParams } from "next/navigation"; 
import { z } from "zod"; 
import Cookies from "js-cookie"; 
import toast from "react-hot-toast";





// Code pour les typages : ------------------------------------------------//
interface Produit {
  id_produit: number, 
  nom: string, 
  description: string, 
  prix: number, 
  image: string, 
  is_active: boolean
}





//Code pour les schémas de validation de données Zod pour le form updateProduct : //
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
  .url({ message: "URL invalide"}), 

  is_active: z.boolean()
})




export default function updateProduit() {

// Code pour le state local et la recup du paramètre dynamique dans l'URL : ----------------------//
const params = useParams(); 
let id = params?.idProduct; 

const [ produit, setProduit ]  = useState<Produit>({
  id_produit: 0, 
   nom: "", 
   description: "", 
   prix: 0, 
   image: "", 
   is_active: false, 
})
   





// Code pour gérer la récup des données du produit concerné et pour pré-remplir le formulaire : //
useEffect (() =>  {

  async function getProduct(id: number) {

      try {
        const response = await fetch (`/api/produits/getOneProduct/${id}`, {
          method: "GET",
          credentials: "include", 
          headers: {
            'Content-Type': "application/json", 
          }
        })

        if(!response.ok) {
          throw new Error("recup client non aboutie")
         }
    
        const data = await response.json();

        setProduit(data); 
      
      } catch(error) {
        console.error("Erreur lors de la récupération des infos du produit", error); 
        alert ("Echec lors de la récup des données")
      }
  }; 

  const idNumber =  Number(id);

  getProduct(idNumber); 

}, [])




// Code pour gérer les changements d'etat dans les champs du form : ----------------------//
function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  event.preventDefault(); 

  const name = event.target.name
  const value = event.target.value

  let updatedValue; 

  if (name ==="is_active") {   // ici on gère le cas particulier du select...
    updatedValue = value === "true" ? true: false // ...dans le but de transformer la string en boolean
  } else {
    updatedValue = value
  }

  setProduit((prevState) => ({
      ...prevState,
      [name] : updatedValue,

  })); 

}




//// Code pour la soumission du form avec les modifs , appel API en methode PUT : ////
async function handleSubmitUpdateProduct(event: React.FormEvent<HTMLFormElement>) {

  event.preventDefault(); 

if(!produit) return; 



// On verifie les formats des données : -----------------------------------------//
  const result = productSchema.safeParse({
    nom: produit.nom, 
    description: produit.description, 
    prix: produit.prix, 
    url: produit.image, 
    is_active: produit.is_active
  })

    if(!result.success) {
    const errors = result.error.flatten().fieldErrors

    const messages = Object.entries(errors) // convertit en tableau d'erreurs
      .map(([field, errs]) => errs?.join(', '))
      .filter(Boolean)
  
    toast.error("Erreurs dans le formulaire:\n- " + messages.join("\n- "))
    return
    } else {
    toast.success("Les données entrées sont correctes", { duration:  3000 })
    }; 

 
  
  // Code pour l'appel API en méthode PUT pour modifier les données du produit : //
    try {
      const response = await fetch (`/api/produits/updateOneProduct/${id}`, {
        method: "PUT", 
        credentials: "include", // envoi des cookies onlyHTTP
        headers: {
          'Content-Type': "application/json", 
          "x-csrf-token": Cookies.get("csrfToken") || "",  // envoi du cookie simple csrf
        }, 
        body: JSON.stringify({produit})
      });

      if(!response.ok) {
        throw new Error("Création de client non aboutie")
       }
  
        const data = await response.json();
        toast.success("le produit a bien été modifié", { duration: 3000}); 

      

    } catch(error) {
      console.error("Erreur lors de la modification du produit", error); 
      toast.error("Echec lors de la modification du produit")
    }
}


  return (
    <div
      className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center flex justify-center">

        <div
            className="w-[350px] h-[1000px] flex flex-col text-center">

        <h2
            className="font-boogaloo text-3xl mt-5">
            Page pour modifier le produit id n° {id}
        </h2>


{produit && (
  
            <form
            className="flex flex-col mt-10 font-rubik"
            onSubmit={handleSubmitUpdateProduct}>

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
                onChange={handleChange}
                name="nom" 
                value={produit?.nom}
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
                onChange={handleChange}
                name="description"
                value={produit?.description}
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
                onChange={handleChange}
                name="prix"
                value={produit?.prix}
                required/>

            {/* Champ image: */}
            <label 
                htmlFor="imageProduit"
                className="">
                URL de l'image du produit: 
            </label>
            <input 
                type="text"
                className="rounded-sm "
                id="imageProduit"
                onChange={handleChange}
                name="image"
                value={produit?.image}
                required/>

            {/* Champ is_active: */}
            <label 
                htmlFor="isActiveProduit"
                className="">
                Produit Actif sur le site ?  
            </label>
            <select 
                className="mb-10"
                name="is_active" 
                id="isActiveProduit"
                onChange={handleChange}
                value={produit?.is_active === true ? "true" : "false"}>
                <option value="true">Actif</option>
                <option value="false">Inactif</option>
            </select>

            <button
                className="w-[150px] h-[60px] bg-slate-700 text-white rounded-md font-boogaloo mx-auto text-xl ">
                Valider les modifs  
            </button>

          </form>
)}
        
        </div>
       
    </div>
  )
}

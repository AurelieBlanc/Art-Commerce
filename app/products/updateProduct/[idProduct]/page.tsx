//Code pour les imports : -------------------------------------------------//
"use client"
import { useState, useEffect } from "react"; 
import { useParams } from "next/navigation"; 
import { z } from "zod"; 
import Cookies from "js-cookie"; 





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
  .url({ message: "URL invalide"})
})




export default function updateProduit() {

const params = useParams(); 
const id = params?.idProduct; 

const [ produit, setProduit ]  = useState<Produit>()

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
        console.log("a quoi ressemble les datas retournées ?", data); 

        setProduit(data); 
        console.log(data.is_active); 
      
      } catch(error) {
        console.error("Erreur lors de la récupération des infos du produit", error); 
        alert ("Echec lors de la récup des données")
      }
  }; 

  const idNumber =  Number(id);

  getProduct(idNumber); 

}, [])

function handleChange() {
}

async function handleSubmitUpdateProduct() {

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
                name="isActive" 
                id="isActiveProduit"
                defaultValue={produit?.is_active === true ? "true" : "false"}>
                <option value="true">Actif</option>
                <option value="false">Inactif</option>

            </select>

            <button
                className="w-[150px] h-[60px] bg-slate-700 text-white rounded-md font-boogaloo mx-auto text-xl ">
                Valider les modifs  
            </button>
           
            

        </form>
        </div>
       
    </div>
  )
}

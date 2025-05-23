// Code pour les imports : --------------------------------------------- //
"use client"

import { useEffect, useState } from "react"; 





// Code pour les typages : ----------------------------------------------- //
interface Produit {
    id_produit: number, 
    nom: string, 
    description: string, 
    prix: number, 
    image: string, 
    is_active: boolean
}





export default function page() {
// Code pour déclarer les states locaux : ---------------------------- //

const [ produits , setProduits ] = useState<Produit[]>([])




// Code pour appeler tous les produits inactifs au montage du composant : //

useEffect(() => {

    async function getInactiveProducts() {

        try {

            const response = await fetch ("/api/produits/getInactiveProducts" , {
                method: "GET", 
                credentials: "include"
            }); 

            if(!response.ok) {
                throw new Error ("réponse appel API produits inactifs erreur")
            }

            const data = await response.json(); 
            console.log("qu'a t'on recu en data avant de setter ???", data); 

            setProduits(data)



        } catch(error) {
            console.error("erreur lors de la récupération des produits inactifs: ", error)
        }

    }; 

    getInactiveProducts(); 

}, [])







// Code pour retourner le composant JSX : ---------------------------- //
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-top bg-cover"> 

        <div
            className="containerProducts ">

                {produits.map((elem) => (
                    <div
                        className="w-[300px] h-[500px]">
                            <p>{elem.nom}</p>
                    </div>

                ))}

        </div>

    </div>
  )
}

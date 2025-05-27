// Code pour les imports : --------------------------------------------- //
"use client"

import { useEffect, useState } from "react"; 
import Image from "next/image";
import Link from "next/link";
import { IoLogoOctocat } from "react-icons/io"; // <IoLogoOctocat />






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

const [ produits , setProduits ] = useState<Produit[]>([]); 

const [ loading, setloading ] = useState<boolean>(false); 




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

            setloading(true); 

        } catch(error) {
            console.error("erreur lors de la récupération des produits inactifs: ", error)
        }

    }; 

    getInactiveProducts(); 

    

}, [])







// Code pour retourner le composant JSX : ---------------------------- //

if(loading) {
    return (
    <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-top bg-cover flex items-center justify-center"> 

        <div
            className="containerProducts mt-6 mb-6">

                {produits && produits.length > 0 ? (
                    
                         produits.map((elem) => (
                    <div
                        className="w-[300px] h-[500px] bg-blue-600 bg-opacity-10 border-white border-2 flex flex-col justify-center items-center rounded-md">

                        <div
                            className="">
                                <Image
                                src={elem.image}
                                width={250}
                                height={0}
                                alt={elem.description}
                                layout="intrinsic"
                                />
                        </div>

                        <div
                            className="nomProduct font-boogaloo text-xl mt-1">
                             <p>{elem.nom}</p>
                        </div>

                        <div
                            className="descriptionProduct text-sm ">
                            <p>{elem.description}</p>
                        </div>
      
                        <div
                            className="prixProduct font-boogaloo text-xl ">
                            <p>{elem.prix} €</p>
                        </div>

                        <div
                            className="activeProduct text-red-600 font-boogaloo mt-4 text-xl font-bold">
                            <p>{elem.is_active ? "Produit actif" : "Produit inactif"} </p>
                        </div>

                        <Link
                            href={`/products/updateProduct/${elem.id_produit}`}>
                        <button
                            className="bg-slate-950 text-white border-slate-400 border-2 shadow-xl w-[150px] h-[40px] rounded-lg font-boogaloo mt-4">
                            
                                Le modifier
                        </button>
                        </Link>

                     </div>

                ))

                ) : (
                    <div
                        className="font-boogaloo text-3xl flex flex-col items-center">
                            <h2
                                className="mt-8 w-[70%] mx-auto text-center">
                                PAS DE PRODUIT INACTIF pour le moment...
                            </h2> 
                            <div
                                className="">
                                <IoLogoOctocat 

                                size={300}
                                    className="text-slate-700 mt-6"/>
                            </div>
                    </div>
                )}
                
               

        </div>

    </div>
  )


} else {
    return (
        <div
            className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-top bg-cover font-boogaloo text-2xl text-slate-900 pt-6 pb-10 text-center">
                EN ATTENTE DE CHARGEMENT....
        </div>
    )
}
  
}

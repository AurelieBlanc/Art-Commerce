// Code pour les imports : -------------------------------------------------- //
"use client"

import Image from "next/image"; 
import { useState, useEffect } from "react"; 
import { getLikedListId, removeFromLikedList, deleteLikedList } from "@/utils/likedCookie";
import { addPanier } from "@/utils/panierCookie"; 

import { TiDelete } from "react-icons/ti"; // icone delete ronde, pour supprimer les produits de manière unitaire: <TiDelete />
import { RiDeleteBin5Fill } from "react-icons/ri"; // icone poubelle, pour supprimer tous les produits d'un coup : <RiDeleteBin5Fill />



// Code pour les typages : ------------------------------------------------- //
interface Produit {
    id_produit: number, 
    nom: string, 
    description : string, 
    prix: number, 
    image: string
}









export default function page() {
// Code pour déclarer les states locaux : ----------------------------------- //

const [ produits , setProduits ] = useState<Produit[]>([]); 

const [ loading, setLoading ] = useState<boolean>(false); 






// Code pour récuperer automatiquement les produits likés au montage du composant : //
useEffect(() => {

    async function getProducts () {
// On va d'abord recupérer la liste d'ids dans le cookie, la transformer en une string pour l'envoyer dans l'URL de la requête : 

        const objIdLiked = getLikedListId(); 

        let tabIdLiked: string[] = []; 

        objIdLiked.map((elem) => (
            tabIdLiked.push(elem.id)
        ))

        let stringIds = tabIdLiked.join(","); 
       

        try {
// On fait l'appel API et on reprendra le chemin en back que l'on avait créé pour afficher les produits dans le panier car exactement même methode, même principe :
        const response = await fetch (`/api/panier/getArticles?ids=${stringIds}`, {
            method: "GET", 
        })

        const data = await response.json(); 
        console.log("qu'a t'on en retour console datas ?", data)

        if(Array.isArray(data)) {
            setProduits(data)
        }

        setLoading(true);


        } catch (error) {
            console.error ("La récupération des produits likés a échoué : ", error)
        }        

    }; 

    getProducts(); 

}, [])





// Fonction pour enlever un produit à la liste des favoris : //
    function removeOneLike(id: number) {

        const confirmMessage = confirm("Veux tu vraiment supprimer ce produit de ta liste de favoris ??"); 

        if(!confirmMessage) {
            alert("Opération annulée !!!")
            return; 
        }

        const stringId = id.toString(); 

        removeFromLikedList(stringId); 

        setProduits(produits.filter((elem) => elem.id_produit !== id)); 

    } 


// Fonction pour effacer toute la liste de produits likés : //

    function removeAllLikes() {

        const confirmMessage = confirm("Veux tu vraiment supprimer toute ta liste de produits likés ??"); 

        if(!confirmMessage) {
            alert("Opération annulée !!!"); 
            return; 
        }

        deleteLikedList(); 

        setProduits([]); 
   }


// Fonction pour rajouter un produit liké au panier :  ------------- //
    function addToBasket(id: number) {

        const idString = id.toString(); 

        addPanier(idString); 

        alert("produit liké bien ajouté à votre panier")
    }


// Code pour retourner le composant JSX : -------------------------------------- //
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center flex flex-col items-center">
        <div
            className="mt-8 flex flex-col items-center gap-5">
                <h2
                    className="font-boogaloo text-3xl text-slate-800">
                    Tes produits likés: 
                </h2>

                {loading && 
                    <>
                    {produits.map((item) => (
                    <div
                        className="w-[350px] h-[500px] bg-slate-950 text-white font-boogaloo flex flex-col items-center justify-center rounded-lg "

                        key= {item.id_produit}>
                        
                        <button>
                        <TiDelete 
                            className="text-3xl text-red-600 relative left-[138px] bottom-1"
                            onClick={() => removeOneLike(item.id_produit) }
                            />
                        </button>
                        
                        <Image
                            src={item.image} 
                            width={300}
                            height={200}
                            alt={item.description}
                        />

                        <p
                            className="mt-2">
                            {item.nom}
                        </p>
                        <p
                            className="">
                            {item.prix} €
                        </p>

                        <button
                            className="mt-4 w-[150px] h-[50px] bg-slate-200 shadow-2xl text-slate-950 text-xl rounded-lg"
                            onClick={() => addToBasket(item.id_produit)}>
                            Ajouter au panier
                        </button>
                        

                    </div>
                    ))}                
                    </>
                } 

                <button
                    className="bg-red-800 text-white font-boogaloo text-lg w-[310px] h-[70px] rounded-lg p-3 mt-6 mb-10 shadow-2xl"
                    onClick={removeAllLikes}>
                        <RiDeleteBin5Fill 
                            className="inline-block mr-2 relative bottom-1"/>
                        Effacer toute ta liste de produits likés
                </button>

        </div>


    </div>
  )
}

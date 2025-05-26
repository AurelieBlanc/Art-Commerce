//Code pour les imports : ---------------------------------------------------------- //
"use client"
import { getPanier, removeFromPanier, deletePanier } from "@/utils/panierCookie"
import { useState, useEffect } from "react"; 
import { RiDeleteBin2Fill } from "react-icons/ri"; // icone pour delete le produit : <RiDeleteBin2Fill />
import { IoIosWarning } from "react-icons/io"; // icone warning <IoIosWarning />
import { useStore } from "@/stores/useStore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";





// Code pour les typages : -------------------------------------------------------- //
interface ProduitsPanier {
    id_produit: number, 
    nom: string, 
    prix: number
}




export default function page() {
// Code pour les states locaus et globaux + outils : ----------------------------- //
const [ produitsPanier, setProduitsPanier ] = useState<ProduitsPanier[]>([]); 

const [ totalPrix, setTotalPrix ] = useState(0); 

const { isAuthenticated, role, id } = useStore(); 

const router = useRouter(); 



// Code pour recuperer les produits dans le cookie pour implementer le panier : ------- //
useEffect (() => {

    const panier = getPanier(); 
    let idsPanier: string[] = []; 

    panier.map((elem) =>{ 
        idsPanier.push(elem.id); 
    })


    
// Appel API en methode GET dans lequel on envoie en paramètre les id des produits à recupérer : //
    async function getProducts () {
        try {
            const response = await fetch(`/api/panier/getArticles?ids=${idsPanier.join(",")}`, {
                method: "GET", 
            })

        const data = await response.json(); 
       
        if(Array.isArray(data)) {
            setProduitsPanier(data); 
        }
        

        } catch(error) {
            console.error("La construction du panier a échoué ", error)
        }
    }

   getProducts(); 

}, [])




// Fonction pour gérer la suppression d'un produit dans le panier : --------------- //
function deleteProduct(id: number) {
    const idString = id.toString(); 
    removeFromPanier(idString);

    const panier = getPanier(); 
    let idsPanier: string[] = []; 

    setProduitsPanier ((prevState) => {

        if(!prevState) {
            return []; 
        } else {
            return prevState.filter (elem => elem.id_produit !== id)
        }  
    })   
}



// Fonction pour supprimer TOUT le panier : -----------------------------------------//
function deleteAllPanier() {
    deletePanier()

    setProduitsPanier([])
    toast.success("La totalité de votre panier a été supprimé", { duration: 3000})
}




// UseFfect pour calculer le total des prdouits à chaque fois que le state produitsPanier est modifié : //
useEffect(() => {
    function totalPanier() {
        let tablePrix = 0;
        produitsPanier?.map((produit)=> {
             
            const prixProduit = Number(produit.prix); 
            tablePrix = prixProduit + tablePrix; // tablePrix += prixProduit
            
        })

        setTotalPrix(tablePrix); 
    }

    totalPanier(); 

}, [produitsPanier])



// Code qui s'enclenche une fois que l'user appuie sur le bouton "Valider mon panier" : //
function validBasket() {

    if(totalPrix === 0) {
        toast.error("Vous devez d'abord ajouter des produits à votre panier avant de continuer", { duration: 5000}); 
        return router.push("/"); 
    }

    if(!isAuthenticated) {
        toast.error("Vous devez d'abord vous authentifier afin de pouvoir accéder à votre récap de panier", { duration: 5000}); 
        return router.push ("/loginAndRegister")
    } 

    if(role === "client") {
        return router.push("/commande/recap"); 
    } else {
        return toast.error("Vous devez avoir un role client pour accéder au récap de panier", { duration: 5000})
    }
}


// Code pour retourner le composant JSX : --------------------------------- //
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center flex flex-col justify-center items-center">
            <h2
                className="font-boogaloo text-2xl mt-6 mb-2">
                Récapitulatif du panier : 
            </h2>

            {produitsPanier?.map((elem) =>{
                return (
                    <div
                    key = {elem.id_produit}
                    className="produitPrix flex font-rubik mt-2">

                    {/* Champ nom du produit :  */}
                    <div
                        className="produit">
                        <p>
                            {elem.nom} :
                        </p>
                    </div>

                    {/* Champ prix du produit : */}
                    <div
                        className="prix ml-3">
                        <p>
                            {elem.prix} €
                        </p>
                    </div>

                    {/* Champ delete produit : */}
                    <div
                        className="prix ml-3 text-red-600 text-xl">
                        <p>
                            <RiDeleteBin2Fill 
                                className=""
                                onClick={() => deleteProduct(elem.id_produit)}/>

                        </p>
                    </div>

                    </div> )
            })} 

            <div
                className="border-black border-b mt-2 w-[200px] mx-auto ">
            </div>

            <div
                className="totalProduits font-bold flex font-rubik mt-2">

                <div
                    className="produit">
                    <p>
                        Total Produits
                    </p>
                </div>

                <div
                    className="prix ml-3">
                    <p>
                        {totalPrix} €
                    </p>
                </div>
                
            </div>

            <button
                onClick={validBasket}
                className="mt-8 font-boogaloo text-lg w-[180px] h-[46px] bg-slate-700 text-white rounded-md shadow-lg">
                Valider mon panier
            </button>

            <button
                onClick={deleteAllPanier}
                className="mt-6 font-boogaloo text-lg w-[180px] h-[46px] bg-red-700 text-white rounded-md shadow-lg">
                    <IoIosWarning
                        className="inline-block relative bottom-1 mr-1" />
                    Effacer tout mon panier
            </button>

            <p
                className="text-sm mt-2 mb-2">
                *Frais de ports calculés à la prochaine étape
            </p>


    </div>
  )
}

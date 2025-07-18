// Code pour les imports : ---------------------------------------------------//
"use client"
import Image from "next/image";
import { useEffect, useState } from "react"; 
import { useStore } from "@/stores/useStore";
import Link from "next/link";
import Cookies from "js-cookie";
import { getPanier, savePanier, addPanier } from "@/utils/panierCookie";
import { IoMdAddCircle } from "react-icons/io"; // icone pour ajouter un produit <IoMdAddCircle /> 
import { FaPencilAlt } from "react-icons/fa"; // icone pour modifier un produit <FaPencilAlt />
import { MdDeleteForever } from "react-icons/md"; //icone pour supprimer un produit <MdDeleteForever />
import { FcLike } from "react-icons/fc"; // icone coeur > like : <FcLike />
import { addLikedId } from "@/utils/likedCookie";
import toast from "react-hot-toast";






// Code pour typer les produits : -------------------------------------------//
interface Produits {
  id_produit: number, 
  nom: string, 
  description: string, 
  prix: number, 
  image: string, 
  is_active: boolean,
}






export default function Home() {

// Code pour définir les states : --------------------------------- //

  const { role } = useStore(); // state global
  const [produits, setProduits ] = useState<Produits[]>([]);  // state local






// Code appel API au montage du composant pour recupérer tous les produits : //
  useEffect(() => {

    async function getProducts() {
      try {
        const response = await fetch ("/api/produits/getAllProducts", {
          method: "GET",     
        }); 

        if(!response.ok) {
          throw new Error("réponse appel Produits erreur")
        }
        const data = await response.json();
        setProduits(data); 

      } catch(error) {
        console.error("La récupération des produits a échoué ", error)
      }
    }

    getProducts(); 

  }, []); 



// Fonction pour supprimer un produit selon son ID récupéré : -----------//
  async function deleteProduct(id: number) {

    const isConfirmed = confirm(`Etes vous sur de vouloir supprimer le produit suivant : ${id} ?` ); 

    if(!isConfirmed) {
      toast.error ("annulation de la suppression du produit"); 
      return; 
    }




// Code appel API en méthode DELETE : ------------------------------------//
    try {
      const response = await fetch (`/api/produits/deleteOneProduct/${id}`, {
        method: "DELETE", 
        credentials: "include", // envoi des cookies onlyHTTP au serveur
        headers: {
          'Content-Type': "application/json", 
          "x-csrf-token": Cookies.get("csrfToken") || "", //envoi du cookie classique csrf
        }, 
      })

      if(!response.ok) {
        throw new Error("Création de client non aboutie")
       }

       const data = await response.json();
       console.log(data.message); 

       const idToDelete = Number(id); 
       const result = produits.filter(elem => elem.id_produit !== idToDelete )
       setProduits(result); 

       toast.success("le produit a bien été supprimé"); 

    } catch (error) {
      console.error("Erreur lors de la suppression du produit", error); 
      toast.error ("Echec lors de la suppression du produit")
    }
  }


  function addBasket(id: number) {

    const stringId = id.toString(); 

    addPanier(stringId); 

    toast.success("Element bien ajouté au panier !")
  }





// Code pour ajouter un produit dans la page "produits likés" : ---------- //
    function addLike(id: number) {

        const idString = id.toString(); 

        addLikedId(idString); 
        
        toast.success("Produit bien ajouté à votre liste de favoris"); 
        return; 
    }


// Retour du composant JSX pour le rôle ADMIN : ------------------------ //
  if ( role === "admin") {
    return (
      <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center h-full">

            <div
                className="addProduct block p-2">
                  
                  <Link
                    className=""
                    href="/products/newProduct">

                    <IoMdAddCircle
                      className="text-5xl block text-slate-800 " /> 
                  </Link>
            </div>

             <div
              className="containerProducts w-[80%] lg:w-[60%] mx-auto pt-4 pb-10">

                <div
                  className="flex justify-center flex-wrap gap-1">
            
  
                {produits.map((produit) => (
                  <div
                    key = {produit.id_produit}
                    className="divProduct w-[300px] h-[540px] border-2 border-white  bg-blue-500 bg-opacity-10 flex flex-col justify-center items-center font-rubik rounded-md">

                    <div
                      className="imageProduct ">
                        <Image
                         src={produit.image}
                        width={250}
                        height={250}
                        // style={{ height: "auto", width: "250px"}}
                        alt={produit.description}
                        />
                    </div>
      
                    <div
                      className="nomProduct font-boogaloo text-xl mt-1">
                        <p>{produit.nom}</p>
                    </div>
      
                    <div
                      className="descriptionProduct text-sm ">
                        <p>{produit.description}</p>
                    </div>
      
                    <div
                      className="prixProduct font-boogaloo text-xl">
                        <p>{produit.prix} €</p>
                    </div>
      
                    <button
                      className=" bg-slate-950 text-white w-[150px] h-[40px] rounded-lg font-boogaloo border-2 border-slate-400 shadow-xl mt-2 ">
                        Ajouter au panier
      
                    </button>

                    <div
                      className="flex gap-5 mt-5 text-2xl">
                        
                        <Link
                          href={`/products/updateProduct/${produit.id_produit}`}>
                        <FaPencilAlt
                          className="text-green-600" />
                        </Link>

                        
                        <button>
                        <MdDeleteForever 
                          className="text-red-600 text-3xl"
                          onClick={() => deleteProduct(produit.id_produit)} />
                        </button>

                    </div>
                    

                    </div>
                ))}

              </div>
              </div>
      </div>
    );
   
  
// Retour du composant JSX pour un rôle CLIENT : --------------------------------- //
  } else {
    return (
      <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center h-full ">

            <div
              className="containerProducts w-[80%] lg:w-[60%] mx-auto pt-10 pb-10">

                <div
                  className="flex justify-center flex-wrap gap-1">

                
                {produits.map((produit) => (
                   
                  <div
                    key = {produit.id_produit}
                    className="divProduct w-[300px] h-[520px] border-2 border-white bg-blue-600 bg-opacity-10 text-slate-950 flex flex-col justify-center items-center font-rubik rounded-md">

                      <button
                        onClick = {(() => addLike(produit.id_produit))}>
                      <FcLike 
                        className="text-2xl relative left-[111px] bottom-1"/>
                      </button>
                    
                    <div
                      className="imageProduct ">
                        <Image
                         src={produit.image}
                        width={250}
                        height={0}
                        layout="intrinsic"
                        alt={produit.description}
                        />
                    </div>
      
                    <div
                      className="nomProduct font-boogaloo text-xl mt-1">
                        <p>{produit.nom}</p>
                    </div>
      
                    <div
                      className="descriptionProduct text-sm ">
                        <p>{produit.description}</p>
                    </div>
      
                    <div
                      className="prixProduct font-boogaloo text-xl ">
                        <p>{produit.prix} €</p>
                    </div>
      
                    <button
                      onClick={() => addBasket(produit.id_produit)}
                      className=" bg-slate-950 text-white border-2 border-slate-400 shadow-xl w-[150px] h-[40px] rounded-lg font-boogaloo mt-2">
                      Ajouter au panier
      
                    </button>
                    </div>
                    
                ))}
                    </div>
                </div>
          
      </div>
    );
  }; 
  

  }
 
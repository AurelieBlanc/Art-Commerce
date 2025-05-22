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
      alert ("annulation de la suppression du produit"); 
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

       alert("le produit a bien été supprimé"); 

    } catch (error) {
      console.error("Erreur lors de la suppression du produit", error); 
      alert ("Echec lors de la suppression du produit")
    }
  }


  function addBasket(id: number) {

    const stringId = id.toString(); 

    addPanier(stringId); 

    alert("Element bien ajouté au panier !")
  }





// Code pour ajouter un produit dans la page "produits likés" : ---------- //
    function addLike(id: number) {

        const idString = id.toString(); 

        addLikedId(idString); 
        
        alert("Produit bien ajouté à votre liste de favoris"); 
        return; 
    }



  if ( role === "admin") {
    return (
      <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center h-full flex justify-center gap-6 flex-wrap">

            <div
                className="addProduct block m-5">
                  
                  <Link
                    className=""
                    href="/products/newProduct">

                    <IoMdAddCircle
                    className="text-5xl block text-slate-500 " /> 
                  </Link>
            </div>
            
  
                {produits.map((produit) => (
                  <div
                    key = {produit.id_produit}
                    className="divProduct w-[300px] h-[500px] border border-black m-10 bg-white flex flex-col justify-center items-center font-rubik rounded-md">

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
                      className="nomProduct ">
                        <p>{produit.nom}</p>
                    </div>
      
                    <div
                      className="descriptionProduct text-sm ">
                        <p>{produit.description}</p>
                    </div>
      
                    <div
                      className="prixProduct ">
                        <p>{produit.prix} €</p>
                    </div>
      
                    <button
                      className=" bg-slate-800 text-white w-[150px] h-[40px] rounded-sm font-boogaloo">
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
                          className="text-red-600"
                          onClick={() => deleteProduct(produit.id_produit)} />
                        </button>

                    </div>
                    

                    </div>
                ))}
 
      </div>
    );
   
  

  } else {
    return (
      <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center h-full flex justify-center gap-6 flex-wrap">
  
                {produits.map((produit) => (
                  
                      

                  <div
                    key = {produit.id_produit}
                    className="divProduct w-[300px] h-[500px] border border-black m-10 bg-slate-950 text-white flex flex-col justify-center items-center font-rubik rounded-md">

                      <button
                        onClick = {(() => addLike(produit.id_produit))}>
                      <FcLike 
                        className="text-3xl relative left-[110px] bottom-4"/>
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
                      className="nomProduct ">
                        <p>{produit.nom}</p>
                    </div>
      
                    <div
                      className="descriptionProduct text-sm ">
                        <p>{produit.description}</p>
                    </div>
      
                    <div
                      className="prixProduct ">
                        <p>{produit.prix} €</p>
                    </div>
      
                    <button
                      onClick={() => addBasket(produit.id_produit)}
                      className=" bg-slate-500 text-white border border-black shadow-2xl w-[150px] h-[40px] rounded-lg font-boogaloo">
                      Ajouter au panier
      
                    </button>
                    </div>
                    
                ))}
          
      </div>
    );
  }; 
  

  }
 
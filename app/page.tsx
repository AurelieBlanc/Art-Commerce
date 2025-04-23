// Code pour les imports : ---------------------------------------------------//
"use client"
import Image from "next/image";
import { useEffect, useState } from "react"; 
import useStore from "@/stores/useStore";
import Link from "next/link";
import Cookies from "js-cookie";
import { IoMdAddCircle } from "react-icons/io"; // icone pour ajouter un produit <IoMdAddCircle /> 
import { FaPencilAlt } from "react-icons/fa"; // icone pour modifier un produit <FaPencilAlt />
import { MdDeleteForever } from "react-icons/md"; //icone pour supprimer un produit <MdDeleteForever />
 






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

  const { isAuthenticated, role } = useStore(); 

  const [produits, setProduits ] = useState<Produits[]>([]); 



// Code appel API au montage du composant pour recupérer tous les produits : //
  useEffect(() => {

    console.log("role loggue : ", role, "isAuth", isAuthenticated); 

    async function getProducts() {
      try {
        const response = await fetch ("/api/produits/getAllProducts", {
          method: "GET",     
        }); 

        if(!response.ok) {
          throw new Error("réponse appel Produits erreur")
        }

        const data = await response.json(); 
        console.log("voici le retour des produits, data : ", data)

        setProduits(data); 

      } catch(error) {
        console.error("La récupération des produits a échoué ", error)
      }
    }

    getProducts(); 

  }, [ ]); 

  async function deleteProduct(id: number) {

    const isConfirmed = confirm(`etes vous sur de vouloir supprimer le produit suivant : ${id} ?` ); 

    if(!isConfirmed) {
      alert ("annulation de la suppression du produit"); 
      return; 
    }

    try {

      const response = await fetch (`/api/produits/deleteOneProduct/${id}`, {
        method: "DELETE", 
        credentials: "include", 
        headers: {
          'Content-Type': "application/json", 
          "x-csrf-token": Cookies.get("csrfToken") || "", 
      }, 
      })

      if(!response.ok) {
        throw new Error("Création de client non aboutie")
       }

       const data = await response.json();
       console.log(data.message, data.deletedProduct); 
       alert("le produit a bien été supprimé"); 


    } catch (error) {
      console.error("Erreur lors de la suppression du produit", error); 
      alert ("Echec lors de la suppression du produit")
    }


    
  }



  if ( role === "admin") {
    return (
      <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center h-full flex justify-center gap-10">

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
                        height={100}
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
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center h-full flex justify-center gap-10">
  
                {produits.map((produit) => (
                  <div
                    key = {produit.id_produit}
                    className="divProduct w-[300px] h-[500px] border border-black m-10 bg-white flex flex-col justify-center items-center font-rubik rounded-md">
                    
                    <div
                      className="imageProduct ">
                        <Image
                         src={produit.image}
                        width={250}
                        height={100}
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
                    </div>
                ))}
          
      </div>
    );
  }; 
  

  }
 
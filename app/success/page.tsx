// Code pour les imports : --------------------------------------------------- //
"use client"
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDroprightCircle } from "react-icons/io"; // icone fleche : <IoIosArrowDroprightCircle />
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { deletePanier } from "../../utils/panierCookie"; 


export default function page() {

// Code pour les outils et les states : 
const searchParams = useSearchParams(); 

const idCommande = searchParams?.get("idCommande"); 




// Code pour récupérer la commande en paramètre 
useEffect(()=> {

  async function getOrderAndDeleteBasket() {

    try {
      const response = await fetch (`/api/commandes/getOneOrder/${idCommande}`, {
        method:"GET"
      })

      if (!response.ok) {
        throw new Error("réponse appel commande erreur")
      }

      const data = await response.json();
      console.log("qu y a t'il dans data ? ", data) 

      const statut = data.order.statut 
      console.log("qu y a til dans statut ? ", statut); 

      if(statut === "PAYEE, EN COURS DE PREPARATION") {
        deletePanier(); 
      }

    } catch(error) {
      console.error("La recupération de la commande a échoué", error)
    }
  }

  getOrderAndDeleteBasket(); 

}, [])




  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center flex flex-col items-center justify-center">
            <h2
                className="font-boogaloo text-3xl text-slate-900 mt-10">
                Merci Pour Votre Commande !!! 
            </h2>
            
            <Image
              className=""
              src="/vecto/LogoArtCommerce.svg"
              alt="logo de Art commerce"
              width={300}
              height={300}
            />


            <div
              className="flex items-center mt-6 ">
              <IoIosArrowDroprightCircle
                className="inline-block text-2xl" />
              <Link
                className=""
                href="/">
              <p
                className="font-rubik font-bold underline text-slate-800 ml-1">
                Retourner à la page d'accueil 
              </p>
              </Link>
            </div>
           

            <div
              className="flex items-center mb-14 mt-6">
              <IoIosArrowDroprightCircle
                className="inline-block text-2xl " />
              <Link
                className=""
                href="/gestion">
              <p
                className="font-rubik font-bold underline text-slate-800 ml-1">
                Aller sur la page Récap de commandes 
              </p>
              </Link>
            </div>
           

    </div>
  )
}

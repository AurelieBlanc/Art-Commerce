// Code pour les imports : ------------------------------------------------//
"use client"
import Image from 'next/image'
import { useEffect } from "react"; 
import Cookies from "js-cookie"; 






export default function Banner() {
//Code pour lancer un appel API au montage du composant pour faire un checkAuth : //
  
useEffect(() => {

    async function checkAuth(){
  
      try {
        const response = await fetch ("/api/auth/checkAuth", {
          method: "POST", 
          credentials: "include", 
          headers : {
            "Content-Type" : "application/json", 
            "x-csrf-token": Cookies.get("csrfToken") || "", //si undefined on renverra une chaine vide pour eviter les erreurs
          }
        }); 
   
        if(!response.ok) {
          throw new Error ("reponse Auth erreur")
        }
        const data = await response.json();
        console.log("message : ") // A ADAPTER SELON MON BACK
  
        // ET BIEN METTRE A JOUR un fichier ZUSTAND avec user authenticated or not
        // donc creation d'un fichier avec un STORE GLOBAL à la racine du projet
        
  
      } catch(error) {
        console.error("La verification de l'auth a échoué : ", error)
      }
    }
    checkAuth(); // on appelle la fonction pour l'éxécuter
    
  }, []) // se lance au montage du composant

  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center w-full h-[400px] flex justify-center">
            
            <div>
                <Image
                    src="vecto/ArtCommerce.svg"
                    alt="logo de Art Commerce"
                    width={400}
                    height={400}
                />
            </div>
    </div>
  )
}

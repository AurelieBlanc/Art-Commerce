// Code pour les imports : ------------------------------------------------//
"use client"
import Image from 'next/image'
import { useEffect } from "react"; 
import Cookies from "js-cookie"; 
import { useStore } from '@/stores/useStore';





export default function Banner() {

//Code pour lancer un appel API au montage du composant pour faire un checkAuth : //
const { setAuthenticated } = useStore(); 

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
   
       
        const data = await response.json();

         if(!response.ok) {
          console.log(data.message); 
          return; 
        }
        

        setAuthenticated ({
         isAuthenticated: data.isAuthenticated, 
         role: data.role, 
         id: data.id
      })

  
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
                    src="vecto/LogoArtCommerce.svg"
                    alt="logo de Art Commerce"
                    width={400}
                    height={400}
                />
            </div>
    </div>
  )
}

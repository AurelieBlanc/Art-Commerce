//Code pour les import : ----------------------------------------------------- //
"use client"
import { useStore } from "@/stores/useStore"; 
import AdminGestion from "../components/AdminGestion";







export default function page() {


// Code pour les states locaux et globaux : ------------------------------- //

  const { isAuthenticated, role } = useStore(); 


  if(isAuthenticated && role === "admin") {
      return (

      <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center flex justify-center">
          <AdminGestion /> 
      </div>

      )
  } else if (isAuthenticated && role === "client")
    return (

      <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center">
          PAGE AVEC STATUS de COMMANDES + suivi client
      </div>

      )

}

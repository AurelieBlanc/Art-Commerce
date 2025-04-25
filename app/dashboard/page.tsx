//Code pour les imports : ----------------------------------------------//
"use client"
import { useEffect, useState } from "react"; 
import useStore from "@/stores/useStore";









export default function page() {

// Code pour définir les states : 
const { isAuthenticated, role, id } = useStore();  // state global
const [ infosClient, setInfosClient ] = useState();  // state local 
const [ infosAdmin, setInfosAdmin ] = useState();  // state local 




// Code pour recupérer au montage de la page soit les infos de l'admin, soit celles du client : 
useEffect(() => {
    console.log (isAuthenticated, role, id); 

// Code pour déterminer si c'est le client qui est connecté ou l'admin 



}, [])

 

if ( role === "admin" && isAuthenticated === true) {
    return (
        <div
            className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-center bg-cover">
            PAGE DASHBOARD ADMIN ici
        
        </div>
      )
} else if (role === "client" && isAuthenticated === true ) {
    return (
        <div
            className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-center bg-cover flex justify-center">
            

            <div
                className="font-rubik mt-10 flex flex-col">
                    <h2
                        className="font-boogaloo text-3xl text-center">
                        Infos du client :
                    </h2>
                    <form
                        className="mt-6">
                        
                        <h3
                            className="font-bold text-xl mb-4 text-center">
                            Numero Client : à dynamiser
                        </h3>


                        {/* Champ email: */}
                        <label 
                            htmlFor="emailClient"
                            className="mr-3">
                            Email: 
                        </label>
                        <input 
                            type="text"
                            className="mb-4"
                            id="emailClient"
                            name="email"
                            value=""
                         />

                    </form>

            </div>
        
        </div>
      )
    }
}

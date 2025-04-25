//Code pour les imports : ----------------------------------------------//
"use client"
import { useEffect, useState } from "react"; 
import useStore from "@/stores/useStore";









export default function page() {

// Code pour définir les states : 

const { isAuthenticated, role } = useStore(); 
const [ infos, setInfos ] = useState(); 

 

if ( role === "admin" && isAuthenticated === true) {
    return (
        <div
            className="bg-[('/fond/fondArtCommerceBeige.png')] bg-center bg-cover">
            PAGE DASHBOARD ADMIN ici
        
        </div>
      )
} else if (role === "client" && isAuthenticated === true ) {
    return (
        <div
            className="bg-[('/fond/fondArtCommerceBeige.png')] bg-center bg-cover">
            PAGE DASHBOARD Client ici
        
        </div>
      )
    }
}

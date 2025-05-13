//Code pour les imports : ---------------------------------------------------- //
import { useEffect, useState } from "react"; 

import dayjs from "dayjs"
import "dayjs/locale/fr";


interface Commande {
    id_commande: number, 
    date_commande: string,
    statut: string, 
    total: number, 
    id_client: number
    adresse_livraison: string, 
    cp_livraison: string, 
    ville_livraison: string
}





export default function AdminGestion() {

//Code pour les outils, states locaux : -------------------------------------- //
const [ commandes, setCommandes ] = useState<Commande[]>([]); 






// Code useEffect pour récupérer toutes les commandes : ----------------------- //
useEffect(() => {
  async function getOrders() {
    try {
        const response = await fetch ("/api/commandes/getAllOrders", {
            method: "GET", 
            credentials: "include"
        })

        if(!response.ok) {
            throw new Error("réponse appel Commandes erreur")
        }

        const data = await response.json(); 
        console.log("retour de data en console : ", data); 
        setCommandes(data); 



    } catch(error) {
        console.error("la récuperation des commandes a échoué : ", error)
    }
  }; 

  getOrders(); 

}, [])





// Code pour le retour composant : ------------------------------------------ // 
  return (
    <div
        className="mt-6">
            <table
                className="mb-10">
                    <thead
                        className="">
                            <tr
                                className="">
                                    <th 
                                        className="border border-slate-900 font-boogaloo text-xl m-2 w-[120px]">
                                        ID Commande :
                                    </th>
                                    <th 
                                        className="border border-slate-900 font-boogaloo text-xl m-2 w-[160px]">
                                        Date :
                                    </th>
                                    <th 
                                        className="border border-slate-900 font-boogaloo text-xl m-2 w-[180px]">
                                        Statut :
                                    </th>
                                    <th 
                                        className="border border-slate-900 font-boogaloo text-xl m-2 w-[120px]">
                                        Montant :
                                    </th>
                                    <th 
                                        className="border border-slate-900 font-boogaloo text-xl m-2 w-[120px]">
                                        Id Client :
                                    </th>
                            </tr>
                    </thead>
                    <tbody
                        className="">

                            {commandes.map((commande) => (
                                <tr
                                className="">
                                     <td 
                                        className="border border-slate-900 font-boogaloo text-xl m-2 w-[120px] text-center">
                                        {commande.id_commande}
                                    </td>
                                     <td 
                                        className="border border-slate-900 font-boogaloo text-xl m-2 w-[160px] text-center">
                                        {dayjs(commande.date_commande).locale("fr").format("dddd DD MMMM YYYY")}
                                    </td>
                                     <td 
                                        className="border border-slate-900 font-boogaloo text-xl m-2 w-[180px] text-center">
                                        {commande.statut}
                                    </td>
                                     <td 
                                        className="border border-slate-900 font-boogaloo text-xl m-2 w-[120px] text-center">
                                        {commande.total} €
                                    </td>
                                     <td 
                                        className="border border-slate-900 font-boogaloo text-xl m-2 w-[120px] text-center">
                                        {commande.id_client}
                                    </td>
                            </tr>
                            ))}


                    </tbody>

                        
                    

            </table>
            
    </div>
  )
}

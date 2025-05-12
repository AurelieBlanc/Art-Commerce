//Code pour les imports : ---------------------------------------------------- //
import { useEffect, useState } from "react"; 


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
                className=" border-collapse">
                    <thead
                        className="">
                            <tr
                                className="">
                                    <th 
                                        className="border border-black">
                                        ID Cde
                                    </th>
                                    <th 
                                        className="border border-black">
                                        Date
                                    </th>
                                    <th>Montant</th>
                                    <th>Statut</th>
                                    <th>ID Client</th>
                                    <th>Adresse</th>
                                    <th>Cp</th>
                                    <th>Ville</th>
                            </tr>
                    </thead>
                    <tbody
                        className="">
                            <tr
                                className="">
                                    <td>Bla</td>
                                    <td>Bla</td>
                                    <td>Bla</td>
                                    <td>Bla</td>
                                    <td>Bla</td>
                                    <td>Bma</td>
                                    <td>Bla</td>
                                    <td>Bma</td>

                            </tr>
                    </tbody>

                        
                    

            </table>
            
    </div>
  )
}

// Code pour les imports : ------------------------------------------------ //
import { useEffect, useState } from "react"; 
import { RiDvFill } from "react-icons/ri";
import { useStore } from "../../stores/useStore"; 
import dayjs from "dayjs"
import "dayjs/locale/fr";



// Code pour les typages : ----------------------------------------------- //
interface Commande {
    id_commande: number,
    date_commande: string, 
    statut: string, 
    total: string, 
    adresse_livraison: string, 
    cp_livraison: string, 
    ville_livraison: string
}





export default function ClientGestion() {
    
// Code pour les states locaux et globaux : --------------------------- //
const { id } = useStore(); 

const [ commandes, setCommandes ] = useState<Commande[]>([]); 

const [ loading, setLoading ] = useState<boolean>(false); 





// useEffect pour aller chercher les commandes du client : ----------- //
useEffect(()=> {

    async function getOrdersFromCustomer() {

        try {
            const response = await fetch (`/api/clients/getOrdersFromCustomer/${id}`, {
            method: "GET", 
            credentials: "include"
        })

        if(!response.ok) {
            throw new Error("réponse appel commandes erreur")
        }

        const data = await response.json(); 

        const sortedTab = data.ordersClient.sort((a:Commande, b:Commande) => a.id_commande - b.id_commande)

        setCommandes(sortedTab); 

        setLoading(true); 

        } catch(error) {
            console.error("la récuperation des commandes a échoué : ", error)
        }
    }

    getOrdersFromCustomer(); 

}, [])




// Code pour le retour du composant : ---------------------------------- //
 return loading ? (
    <div
        className="flex flex-col items-center ">
            <h2
                className="font-boogaloo text-3xl mt-6"> 
                Bienvenue sur votre page Récap de Commandes : 
            </h2>

            <table
                className="font-boogaloo mt-6 mb-10 text-center">
                    <thead
                        className="text-2xl">
                            <tr>
                                <th
                                    className="border border-black p-2">
                                    Numéro:
                                </th>
                                <th
                                    className="border border-black p-2">
                                    Date: 
                                </th>
                                <th
                                    className="border border-black p-2">
                                    Statut: 
                                </th>
                                <th
                                    className="border border-black p-2">
                                    Montant: 
                                </th>
                                <th
                                    className="border border-black p-2">
                                    Adresse: 
                                </th>
                                <th
                                    className="border border-black p-2">
                                    Code Postal: 
                                </th>
                                <th
                                    className="border border-black p-2">
                                    Ville: 
                                </th>
                            </tr>
                    </thead>
                    <tbody>
                        
           
        {commandes.map((info) => (
                        <tr>    
                            <td
                                    className="border border-black p-2">
                                    {info.id_commande}
                                </td>
                                <td
                                    className="border border-black p-2">
                                    {dayjs(info.date_commande).locale("fr").format("dddd DD MMMM YYYY")} 
                                </td>
                                <td
                                    className="border border-black p-2">
                                    {info.statut}
                                </td>
                                <td
                                    className="border border-black p-2">
                                    {info.total} €
                                </td>
                                <td
                                    className="border border-black p-2">
                                    {info.adresse_livraison} 
                                </td>
                                <td
                                    className="border border-black p-2">
                                    {info.cp_livraison} 
                                </td>
                                <td
                                    className="border border-black p-2">
                                    {info.ville_livraison}
                                </td>
                        </tr>
        ))}
                    </tbody>

        </table>

    </div>
  ) : (
    <div
        className="font-boogaloo text-2xl h-[500px] text-slate-800 text-center p-10">
            EN COURS DE CHARGEMENT ... 
    </div>
  )
}

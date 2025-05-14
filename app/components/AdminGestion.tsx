//Code pour les imports : ---------------------------------------------------- //
import { useEffect, useState } from "react"; 
import dayjs from "dayjs"
import "dayjs/locale/fr";
import { RiDeleteBin5Fill } from "react-icons/ri"; // icone poubelle pour supprimer la commande : <RiDeleteBin5Fill />
import { FaPencilAlt } from "react-icons/fa"; // icone crayon pour modifier les statuts de commande : <FaPencilAlt />
import AdminStatut from "./AdminStatut";
import { useModalStore } from "@/stores/useStore";

import Cookies  from "js-cookie"; 




// Code pour les typages : ---------------------------------------------------- //
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

//Code pour les outils, states locaux, et states globaux : ---------------------- //
const [ commandes, setCommandes ] = useState<Commande[]>([]); 
 
const [ updateId, setUpdateId ] = useState<number>(0); 

const { isModalOpen, toggleModal} = useModalStore(); 


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
    
        setCommandes(
            // ici on procède à un tri du tableau pour que les id soient classés en odre croissant : (on reprend les regles de la fonction sort : si a - b donne: un nombre negatif : a est trié AVANT b, zéro : l'ordre reste inchangé ; un nombre positif :a est trié APRES b)
            data.sort((a:Commande, b:Commande) => a.id_commande - b.id_commande) 
        ); 

    } catch(error) {
        console.error("la récuperation des commandes a échoué : ", error)
    }
  }; 

  getOrders(); 

}, [isModalOpen]) // ce useEffect se déclenche quand le composant se monte(comportement normal) + quand isModalOpen change



// Fonction deleteOrder pour supprimer une commande en BDD : ------------------ //
    async function deleteOrder(id: number) {

    // on s'assure que notre admin est bien ok pour supprimer la commande sur laquelle il a cliqué : //
    const confirmation = confirm (`êtes vous sur de vouloir supprimer la commande n° ${id} ?`); 

    if(!confirmation) {
        alert ("suppresion annulée !"); 
        return; 
    }

    try {
        const response = await fetch (`/api/commandes/deleteOneOrder/${id}`, {
            method:"DELETE", 
            credentials:"include", 
            headers: {
                'Content-Type': "application/json", 
                "x-csrf-token": Cookies.get("csrfToken") || "", 
            },         
        })

         if(!response.ok) {
            throw new Error("réponse appel Commandes erreur")
        }

        const data = await response.json();
        
        // on filtre le nouveau tableau en enlevant la commande supprimée et on remet à jour notre state setCommandes : //
        const newOrdersTab = commandes.filter((elem: Commande) => elem.id_commande !== id ); 

        setCommandes(newOrdersTab); 


    } catch (error) {
      console.error("la suupression de la commande a échouée : ", error)
    }
}



// Fonction updateOrder pour ouvrir la modale qui mettra à jour les statuts de commande : ------------ //
async function updateOrder (id: number) {
    setUpdateId(Number(id)); 
    toggleModal(); 
}





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
                                    <th 
                                        className="border border-slate-900 font-boogaloo text-xl m-2 w-[120px]">
                                        à nettoyer ? 
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
                                            <button>
                                            <FaPencilAlt 
                                                className="text-teal-700 inline-block ml-2 mb-2"
                                                onClick={() => updateOrder(commande.id_commande)}/>
                                            </button>

                                    </td>
                                     <td 
                                        className="border border-slate-900 font-boogaloo text-xl m-2 w-[120px] text-center">
                                        {commande.total} €
                                    </td>
                                     <td 
                                        className="border border-slate-900 font-boogaloo text-xl m-2 w-[120px] text-center">
                                        {commande.id_client}
                                    </td>
                                     <td 
                                        className="border border-slate-900 font-boogaloo text-xl m-2 w-[120px] text-center">
                                       
                                        <button
                                            className="text-red-700 text-2xl"
                                            onClick={()=> deleteOrder(commande.id_commande)}>
                                            <RiDeleteBin5Fill />
                                        </button>
                                    </td>
                            </tr>
                            ))}


                    </tbody>

                        
                    

            </table>

            {isModalOpen && <AdminStatut updateId={updateId}/> }
            
    </div>
  )
}

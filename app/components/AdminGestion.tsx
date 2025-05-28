//Code pour les imports : ---------------------------------------------------- //
import { useEffect, useState } from "react"; 
import dayjs from "dayjs"
import "dayjs/locale/fr";
import { RiDeleteBin5Fill } from "react-icons/ri"; // icone poubelle pour supprimer la commande : <RiDeleteBin5Fill />
import { FaPencilAlt } from "react-icons/fa"; // icone crayon pour modifier les statuts de commande : <FaPencilAlt />
import AdminStatut from "./AdminStatut";
import { useModalUpdateStore, useModalClientStore } from "@/stores/useStore";
import Link from "next/link";
import Cookies  from "js-cookie"; 
import AdminClient from "./AdminClient";
import toast from "react-hot-toast";




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

const [ clientId, setClientId ] = useState<number>(0); 

const { isModalUpdateOpen, toggleUpdateModal} = useModalUpdateStore(); 

const { isModalClientOpen, toggleClientModal } = useModalClientStore(); 





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

}, [isModalUpdateOpen]) // ce useEffect se déclenche quand le composant se monte(comportement normal) + quand isModalOpen change





// Fonction deleteOrder pour supprimer une commande en BDD : ------------------ //
    async function deleteOrder(id: number) {

    // on s'assure que notre admin est bien ok pour supprimer la commande sur laquelle il a cliqué : //
    const confirmation = confirm (`êtes vous sur de vouloir supprimer la commande n° ${id} ?`); 

    if(!confirmation) {
        toast.error("suppresion annulée !"); 
        return; 
    }

    try {
        const response = await fetch (`/api/commandes/deleteOneOrder/${id}`, {
            method:"DELETE", 
            credentials:"include", 
            headers: {
                // 'Content-Type': "application/json", 
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
      console.error("la supression de la commande a échouée : ", error)
    }
}





// Fonction updateOrder pour ouvrir la modale qui mettra à jour les statuts de commande : ------------ //
async function updateOrder (id: number) {
    setUpdateId(Number(id)); 
    toggleUpdateModal(); 
}




// Fonction pour ouvrir la modale, avec toutes les infos clients avec son id : // 
async function openInfosClient(id: number) {
    setClientId(id); 
    toggleClientModal(); 
}





// Code pour le retour composant : ------------------------------------------ // 
  return (
    <div
        className="mt-8 flex flex-col w-full">
            <h2
                className="font-boogaloo text-3xl text-slate-800 mb-5 text-center">
                Gestion des Commandes :     
            </h2>

            <div
                className="overflow-x-auto w-[90%] mx-auto">
            <table
                className="text-center mb-8 w-[800px]">
                    <thead
                        className="">
                            <tr
                                className="">
                                    <th 
                                        className="border border-slate-900 font-boogaloo text-xl p-2">
                                        ID Commande :
                                    </th>
                                    <th 
                                        className="border border-slate-900 font-boogaloo text-xl p-2">
                                        Date :
                                    </th>
                                    <th 
                                        className="border border-slate-900 font-boogaloo text-xl p-2">
                                        Statut :
                                    </th>
                                    <th 
                                        className="border border-slate-900 font-boogaloo text-xl p-2">
                                        Montant :
                                    </th>
                                    <th 
                                        className="border border-slate-900 font-boogaloo text-xl p-2">
                                        Id Client :
                                    </th>
                                    <th 
                                        className="border border-slate-900 font-boogaloo text-xl p-2">
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
                                        className="border border-slate-900 font-boogaloo text-xl p-2 text-center">
                                        {commande.id_commande}
                                    </td>
                                     <td 
                                        className="border border-slate-900 font-boogaloo text-xl p-2 text-center">
                                        {dayjs(commande.date_commande).locale("fr").format("dddd DD MMMM YYYY")}
                                    </td>
                                     <td 
                                        className="border border-slate-900 font-boogaloo text-xl p-2 text-center">
                                        {commande.statut}
                                            <button>
                                            <FaPencilAlt 
                                                className="text-teal-700 inline-block ml-2 mb-2"
                                                onClick={() => updateOrder(commande.id_commande)}/>
                                            </button>

                                    </td>
                                     <td 
                                        className="border border-slate-900 font-boogaloo text-xl p-2 text-center">
                                        {commande.total} €
                                    </td>
                                     <td 
                                        className="border border-slate-900 font-boogaloo text-xl p-2 text-center">
                                            <button
                                                className="w-[37px] h-[30px] bg-slate-800 text-white rounded-md shadow-xl border border-white"
                                                onClick={() => openInfosClient(commande.id_client)}>
                                            {commande.id_client}
                                            </button>
                                    </td>
                                     <td 
                                        className="border border-slate-900 font-boogaloo text-xl p-2 text-center">
                                       
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
            </div>

            {isModalUpdateOpen && <AdminStatut updateId={updateId}/> }

            {isModalClientOpen && <AdminClient clientId={clientId}/> }
            

            <div    
                className="">
                    <h2
                        className="font-boogaloo text-3xl text-slate-800 mb-10 text-center">
                        Pour la gestion des Connexions Clients : clique 
                        <Link
                            className="underline ml-2"
                            href="/sessions">
                                <span>
                                    ici
                                </span>
                        </Link>
                         
                    </h2>

            </div>
    </div>
  )
}

// Code pour les imports : ---------------------------------------------- //
"use client" 

import { useEffect, useState } from"react"; 
import { IoRadioButtonOn } from "react-icons/io5";
 // icone button <IoRadioButtonOn />
import dayjs from "dayjs"; 
import "dayjs/locale/fr"; 
import Cookies from "js-cookie";
import toast from "react-hot-toast";






// Code pour les typages : ----------------------------------------------- //
interface SessionClient {
    id_client: number;  
    id_session: number; 
    date_connexion : string; 
    // token: string; 
    client: {
        prenom: string, 
        nom: string, 
        mail: string
    }
    }



export default function page() {
// Code pour les states locaux : --------------------------------------------- //
const [ sessionsClients, setSessionsClients ] = useState<SessionClient[]>([])

const [ loading, setLoading ] = useState<boolean>(false); 



// useEffect pour aller chercher les sessions actives et les clients des sessions actives : //
useEffect(() => {

    async function getClientsSessions() {
        
        try {
            const response = await fetch("/api/sessions/getAllSessions", {
                method: "GET", 
                credentials: "include"
            }); 

            if(!response.ok) {
                throw new Error("réponse appel sessions erreur")
            }

            const data = await response.json();
            
            setSessionsClients(
                data.sessionsClients.map((elem: SessionClient) => ({
                    id_client: elem.id_client, 
                    client: {
                        prenom: elem.client.prenom, 
                        nom: elem.client.nom, 
                        mail: elem.client.mail, 
                    }, 
                    id_session: elem.id_session, 
                    date_connexion : elem.date_connexion, 
                    // token: elem.token,
                }))
            ); 

            setLoading(true)
    
        } catch(error) {
            console.error("la récupération des sessions a échoué : ", error)
        }
    }; 

    getClientsSessions(); 
    
}, [])


// Code pour que l'admin puisse déconnecter le client (appel API pour déconnecter la session) : ------------------ //
    async function logoutCustomer(id: number) {
        const confirmLogout = confirm(`Etes vous sur de déconnecter le client de la session numéro ${id} ?`)

        if(!confirmLogout) {
            toast.error("Ok, operation annulée"); 
            return; 
        }

        try {
            const response = await fetch (`/api/sessions/deleteOneSession/${id}`, {
                method: "DELETE", 
                credentials: "include", 
                headers: {
                    // "Content-Type": "application/json", 
                    "x-csrf-token": Cookies.get("csrfToken") || "", 
                }, 
            })

            if(!response.ok) {
                throw new Error ("reponse retour suppression session erreur")
            }

            const data = await response.json(); 

            const refreshSessionsClients = sessionsClients.filter(elem => 
                elem.id_session !== id); 

            setSessionsClients(refreshSessionsClients);
    
            toast.success(data.message); 

        } catch(error) {
            console.error("la suppression de la session a échouée :", error)
        }
    }



// Code pour retourner le composant JSX : ------------------------------------- //
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center flex flex-col ">
        <h2
            className="font-boogaloo text-3xl text-slate-800 mt-6 text-center">
            Clients Connectés : 
        </h2>


        <div
            className="overflow-x-auto w-[90%] mx-auto">


       
        {loading && (
            <table
                className="mt-4 mb-10 w-[900px]">
                    <thead
                        className="">
                            <tr
                                className="">
                                <th
                                    className="font-boogaloo border border-slate-800 text-slate-800 p-2">
                                    Id_Session:
                                </th>
                                <th
                                    className="font-boogaloo border border-slate-800 text-slate-800 p-2">
                                    Id_Client:
                                </th>
                                <th
                                    className="font-boogaloo border border-slate-800 text-slate-800 p-2">
                                    Prénom:
                                </th>
                                <th
                                    className="font-boogaloo border border-slate-800 text-slate-800 p-2">
                                    Nom:
                                </th>
                                <th
                                    className="font-boogaloo border border-slate-800 text-slate-800 p-2">
                                    Mail:
                                </th>
                                <th
                                    className="font-boogaloo border border-slate-800 text-slate-800 p-2">
                                    Date de connexion:
                                </th>
                                <th
                                    className="font-boogaloo border border-slate-800 text-slate-800 p-2">
                                    Déconnexion ?
                                </th>

                            </tr>
                    </thead>
                    <tbody>
            
            {sessionsClients.map((elem) => (
                <tr key={elem.id_session}
                    className="">
                    <td
                        className="border border-slate-800 font-rubik text-center p-2">
                        {elem.id_session}
                    </td>
                    <td
                        className="border border-slate-800 font-rubik text-center p-2">
                        {elem.id_client}
                    </td>
                    <td
                        className="border border-slate-800 font-rubik text-center p-2">
                        {elem.client.prenom}
                    </td>
                    <td
                        className="border border-slate-800 font-rubik text-center p-2">
                        {elem.client.nom}
                    </td>
                    <td
                        className="border border-slate-800 font-rubik text-center p-2">
                        {elem.client.mail}
                    </td>
                    <td
                        className="border border-slate-800 font-rubik text-center p-2">
                        {dayjs(elem.date_connexion).locale("fr").format("dddd DD MMMM YYYY à HH:mm")}
                    </td>
                    <td
                        className="border border-slate-800 font-rubik text-center p-2">
                        <button
                            className="">
                            <IoRadioButtonOn 
                            className="text-3xl text-red-800 font-bold text-center"
                            onClick={() => logoutCustomer(elem.id_session)}/>
                        </button>
                    </td>
                </tr>
            ))}  

                    </tbody>
            </table>
        )}

         </div>
         

        
        
    </div>
  )
}

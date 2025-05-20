// Code pour les imports : ---------------------------------------------- //
"use client" 
import { useEffect, useState } from"react"; 





// Code pour les typages : ----------------------------------------------- //
interface SessionClient {
    id_client: number,  
    prenom: string, 
    nom: string, 
    mail: string
    id_session: number, 
    date_connexion : string, 
    token: string,
    }



export default function page() {
// Code pour les states locaux : --------------------------------------------- //
const [ sessionsClients, setSessionsClients ] = useState<SessionClient[]>([])





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
            // console.log("comment est gaulé les retours de données en front pour savoir comment setter mes states : ", data); 

            setSessionsClients (
                data.map((elem: any) => ({
                    id_client: elem.clients.id_client,  
                    prenom: elem.clients.prenom, 
                    nom: elem.clients.prenom, 
                    mail: elem.clients.mail, 
                    id_session: elem.sessions.id_sessions, 
                    date_connexion : elem.sessions.date_connexion, 
                    token: elem.sessions.token,
                }))

            ); 

            console.log(sessionsClients); 
    

        } catch(error) {

        }
    }; 

    getClientsSessions(); 
    
}, [])



// Code pour retourner le composant JSX : ------------------------------------- //
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center flex flex-col items-center">
        <h2
            className="font-boogaloo text-3xl text-slate-800 mt-6">
            Clients Connectés : 
        </h2>

        
        
    </div>
  )
}

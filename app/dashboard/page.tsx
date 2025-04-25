//Code pour les imports : ----------------------------------------------//
"use client"
import { useEffect, useState } from "react"; 
import useStore from "@/stores/useStore";





// definition des types pour les states : -----------------------------//
interface InfosClient {
    id_client: number, 
    mail: string, 
    role: string, 
    prenom: string, 
    nom: string, 
    adresse_livraison: string, 
    cp_livraison: string, 
    ville_livraison: string, 
    telephone: string
}

interface InfosAdmin {
    id_admin: number, 
    mail: string, 
    role: string, 
    prenom: string, 
    nom: string, 
}








export default function page() {

// Code pour définir les states : 
const { isAuthenticated, role, id } = useStore();  // state global

const [ infosClient, setInfosClient ] = useState<InfosClient>({ 
    id_client: 0, 
    mail: "", 
    role: "", 
    prenom: "", 
    nom: "", 
    adresse_livraison: "", 
    cp_livraison: "", 
    ville_livraison: "", 
    telephone: ""
});  // state local 

const [ infosAdmin, setInfosAdmin ] = useState();  // state local 




// Code pour recupérer au montage de la page soit les infos de l'admin, soit celles du client : 
useEffect(() => {
    console.log (isAuthenticated, role, id); 

    async function getInfos () {

// Code pour déterminer si c'est le client qui est connecté ou l'admin :
    if (role === "client") {
        try {
            const response =  await fetch(`/api/clients/getInfosCustomer/${id}`, {
                method: "GET", 
                credentials: "include"
            })

            if(!response.ok) {
                throw new Error("erreur appel API pour recup infos client")
            }

            const data = await response.json()
            setInfosClient(data.infosClient); 

        } catch(error) {
            console.error("la récupération des données du client a échoué", error)
        }

    } else if(role === "admin") {
        try {
            const response =  await fetch("/api/admin/getInfos", {
                method: "GET", 
                credentials: "include"
            })

            if(!response.ok) {
                throw new Error("erreur appel API pour recup infos client")
            }

            const data = await response.json()
            setInfosAdmin(data); 

        } catch(error) {
            console.error("la récupération des données de l'admin a échoué", error)
            }
        }

    }
    getInfos(); 

}, [])

function handleChangeClient(event: React.ChangeEvent<HTMLInputElement>) {

    const { name } = event.target; 
    const { value } = event.target; 

    setInfosClient((prevState) => ({
        ...prevState, 
        [name]: value 
    })); 
}


function handleSubmitClient(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault()

    console.log("le nouvel objet clien est :", infosClient)
}

 

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
                        className="mt-6 flex flex-col text-center"
                        onSubmit={handleSubmitClient}>
                        
                        <h3
                            className="font-bold text-xl mb-4 text-center">
                            Client numéro {infosClient?.id_client}
                        </h3>


                        {/* Champ email: */}
                        <label 
                            htmlFor="emailClient"
                            className="mr-3">
                            Email: 
                        </label>
                        <input 
                            type="text"
                            className="mb-4 rounded-md"
                            id="emailClient"
                            name="mail"
                            value={infosClient?.mail}
                            onChange={handleChangeClient}
                         />


                          {/* Champ Nom: */}
                        <label 
                            htmlFor="nomClient"
                            className="mr-3">
                            Nom : 
                        </label>
                        <input 
                            type="text"
                            className="mb-4 rounded-md"
                            id="nomClient"
                            name="nom"
                            value={infosClient?.nom}
                            onChange={handleChangeClient}
                         />


                         {/* Champ Prénom: */}
                        <label 
                            htmlFor="prenomClient"
                            className="mr-3">
                            Prénom : 
                        </label>
                        <input 
                            type="text"
                            className="mb-4 rounded-md"
                            id="prenomClient"
                            name="prenom"
                            value={infosClient?.prenom}
                            onChange={handleChangeClient}
                         />


                          {/* Champ Adresse de livraison : */}
                        <label 
                            htmlFor="adresseClient"
                            className="mr-3">
                            Adresse de livraison : 
                        </label>
                        <input 
                            type="text"
                            className="mb-4 rounded-md"
                            id="adresseClient"
                            name="adresse_livraison"
                            value={infosClient?.adresse_livraison}
                            onChange={handleChangeClient}
                         />


                          {/* Champ code postal : */}
                        <label 
                            htmlFor="cpClient"
                            className="mr-3">
                            Code Postal de livraison : 
                        </label>
                        <input 
                            type="text"
                            className="mb-4 rounded-md"
                            id="cpClient"
                            name="cp_livraison"
                            value={infosClient?.cp_livraison}
                            onChange={handleChangeClient}
                         />


                           {/* Champ Ville : */}
                        <label 
                            htmlFor= "villeClient"
                            className="mr-3">
                            Ville de livraison : 
                        </label>
                        <input 
                            type="text"
                            className="mb-4 rounded-md"
                            id= "villeClient"
                            name= "ville_livraison"
                            value={infosClient?.ville_livraison}
                            onChange={handleChangeClient}
                         />


                          {/* Champ Téléphone : */}
                        <label 
                            htmlFor= "telClient"
                            className="mr-3">
                            Téléphone : 
                        </label>
                        <input 
                            type="text"
                            className="mb-4 rounded-md"
                            id= "telClient"
                            name= "telephone"
                            value={infosClient?.telephone}
                            onChange={handleChangeClient}
                         />
                    
                    <button
                        className="font-boogaloo w-[160px] h-[75px] mx-auto text-center bg-slate-800 text-white text-xl rounded-md mb-10">
                        Valider les modifications

                    </button>

                    </form>

                    <button>

                    </button>

            </div>
        
        </div>
      )
    }
}

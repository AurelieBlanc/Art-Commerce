//Code pour les imports : ----------------------------------------------//
"use client"
import { useEffect, useState } from "react"; 
import useStore from "@/stores/useStore";
import { z } from "zod"; 
import Cookies from "js-cookie";
import { useRouter } from "next/navigation"; 




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





// code pour le schéma de validation ZOD pour le form UPDATE : ---------------------------------//
export const updateSchema = z.object({
    email: z.string().email({ message: "Email invalide"}),
  
    // password: z
    // .string()
    // .min(5, {message: "le mot de passe doit contenir au moins 5 caractères"})
    // .regex(/[a-z]/, { message: "le mot de passe doit contenir au moins une lettre minuscule"})
    // .regex(/[A-Z]/, { message: "le mot de passe doit contenir au moins une lettre majuscule"})
    // .regex(/[0-9]/, { message: "le mot de passe doit contenir au moins un chiffre"})
    // .regex(/[^a-zA-Z0-9]/, { message: "le mot de passe doit contenir au moins un caractère spécial"}), 
  
    nom: z
    .string()
    .min(2, { message: "le nom doit contenir au moins 2 caractères"})
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/, { message: "le nom contient des caractères invalides"}), 
  
    prenom: z
    .string()
    .min(2, { message: "le nom doit contenir au moins 2 caractères"})
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/, { message: "le prénom contient des caractères invalides"}), 
  
    adresse: z
    .string()
    .min(5, { message: "l'adresse est trop courte" })
    .regex(/^\d{0,5}[a-zA-ZÀ-ÖØ-öø-ÿ\s'’\-,.]*$/, { message: "l'adresse contient des caractères invalides"}), 
  
    codePostal:z 
    .string()
    .regex(/^\d{5}$/, { message: "le code postal doit contenir exactement 5 chiffres "}), 
  
    ville:z 
    .string()
    .min (2, { message: "La ville doit contenir au moins 2 caractères"})
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ'’\- ]{2,}$/, { message: "Le nom de la ville contient des caractères invalides"}),
  
    telephone:z 
    .string()
    .regex(/^(\+33|0)[1-9]\d{8}$/, { message: "Numero de téléphone invalide"})
  })
  
  






export default function page() {

// Code pour définir les states et outils: 
const router = useRouter(); 

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


const [ infosAdmin, setInfosAdmin ] = useState<InfosAdmin>({
    id_admin: 0, 
    mail: "", 
    role: "", 
    prenom: "", 
    nom: "", 
});  // state local 




// Code pour recupérer au montage de la page soit les infos de l'admin, soit celles du client : 
useEffect(() => {

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
            setInfosAdmin(data.infosAdmin);
            

        } catch(error) {
            console.error("la récupération des données de l'admin a échoué", error)
            }
        }

    }
    getInfos(); 

}, [])



// fonction pour gérer les changements de states dans les inputs du formulaire : //
function handleChangeClient(event: React.ChangeEvent<HTMLInputElement>) {

    const { name } = event.target; 
    const { value } = event.target; 

    setInfosClient((prevState) => ({
        ...prevState, 
        [name]: value 
    })); 
}





// fonction pour soumettre le formulaire update Client : --------------//
async function handleSubmitClient(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault()

    console.log("le nouvel objet clien est :", infosClient, infosClient.id_client); 

// validation des formats de données : --------------------------------------------//
        const result = updateSchema.safeParse({
          email: infosClient.mail,  
          nom: infosClient.nom, 
          prenom: infosClient.prenom, 
          adresse: infosClient.adresse_livraison, 
          codePostal: infosClient.cp_livraison, 
          ville: infosClient.ville_livraison, 
          telephone: infosClient.telephone, 
        })
    
        if (!result.success) {
          const errors = result.error.flatten().fieldErrors
        
          const messages = Object.entries(errors) // convertit en tableau d'erreurs
            .map(([field, errs]) => errs?.join(', '))
            .filter(Boolean)
        
          alert("Erreurs dans le formulaire:\n- " + messages.join("\n- "))
          return
        } else {
          console.log("Les données entrées sont correctes")
        }



// Appel APi pour modifier les données du client : ----------------------------//
try {
    const id = infosClient.id_client; 

    const response = await fetch (`/api/clients/updateInfosCustomer/${id}`, {
        method: "PUT", 
        credentials: "include", 
        headers: {
            'Content-Type': "application/json", 
            "x-csrf-token": Cookies.get("csrfToken") || "", 
        }, 
        body: JSON.stringify({infosClient})
    })

    if(!response.ok) {
        throw new Error("Création de client non aboutie")
    }

    const data = await response.json()
    alert("vos informations ont bien été modifiées"); 
    return; 

} catch(error) {
    console.error("Erreur lors de la modif des données: ", error); 
    alert ("Echec lors de la modif des données ")
}

}


// Code qui s'enclenche une fois que l'user appuie sur le bouton "Retour vers la commande en cours" : //
function backBasket() {

    if(!isAuthenticated) {
        alert("Vous devez d'abord vous authentifier afin de pouvoir accéder à votre récap de panier"); 
        return router.push ("/loginAndRegister")
    } 

    if(role === "client") {
        return router.push("/commande/recap"); 
    } else {
        return alert("Vous devez avoir un role client pour accéder au récap de panier")
    }
}

 
// Ici on gerera l'affichage en fonction de quel rôle est authentifié : //
if ( role === "admin" && isAuthenticated === true) {
    return (
        <div
            className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-center bg-cover flex flex-col items-center">
            <h2
                className="font-boogaloo text-2xl mt-5">
                    Infos de l'admin id n° {infosAdmin.id_admin} :
            </h2>

            <p
                className="mt-6 font-boogaloo text-xl">
                Prénom, nom: 
            </p>
            <p
                className="mt-1 font-rubik bg-white w-[240px] text-center rounded-lg">
                {infosAdmin.prenom} {infosAdmin.nom} 
            </p>

            <p
                className="mt-4 font-boogaloo text-xl">
                Email : 
            </p>
            <p
                className="mt-1 font-rubik bg-white w-[240px] text-center rounded-lg mb-6">
                {infosAdmin.mail}
            </p>

            <button
                className="bg-slate-700 text-white w-[240px] font-boogaloo p-3 rounded-md mb-8 border border-black shadow-2xl">
                Gestion des statuts de commandes et des sessions clients

            </button>
        
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
                        className="font-boogaloo w-[160px] h-[75px] mx-auto text-center bg-slate-800 text-white text-xl rounded-md mb-6">
                        Valider les modifications
                    </button>

                    
                    <button
                        onClick={backBasket}
                        className="font-boogaloo w-[160px] h-[75px] mx-auto text-center bg-red-800 text-white text-xl rounded-md mb-10">
                        Revenir vers la commande en cours
                    </button>
                   

                    </form>

            </div>
        
        </div>
      )
    }
}

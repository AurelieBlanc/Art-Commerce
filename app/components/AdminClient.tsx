// Code pour les imports : -------------------------------------------------- //
import { useEffect, useState } from "react"; 
import { useModalClientStore } from "@/stores/useStore";


// Code pour les typages : -------------------------------------------------- //
interface Client {
    id_client: number, 
    mail: string, 
    prenom: string, 
    nom: string, 
    adresse_livraison: string, 
    cp_livraison: string, 
    ville_livraison:string, 
    telephone: string
}



export default function AdminClient({ clientId }: { clientId: number }) {

// Code pour les states locaux et globaux :  ---------------------------------- //
const { toggleClientModal } = useModalClientStore(); 

const [ loading, setLoading ] = useState(false); 

const [ client, setClient ] = useState({
    id_client: 0, 
    mail: "", 
    prenom: "", 
    nom: "", 
    adresse_livraison: "", 
    cp_livraison: "", 
    ville_livraison:"", 
    telephone: ""
})




// useEffect pour appeler au montage du composant les infos du client concerné : //
useEffect(() => {

    async function getClient() {
         try {
            const response = await fetch (`/api/clients/getInfosCustomer/${clientId}`, {
                method: "GET", 
                credentials: "include"
            }); 

            
    if(!response.ok) {
      throw new Error ("Modification de statut de commande non aboutie")
    }

    const data = await response.json(); 
    console.log("quelles sont les datas recupérées ?", data.infosClient) 
     
    setClient(data.infosClient)
    setLoading(true); 

        
        } catch(error) {
            console.error("Erreur lors de la récupération du client", error); 
            alert("Erreur lors de la récupération du client")
        }

}
    getClient(); 
   
}, [])




// Code pour retourner le composant : ---------------------------------------- //
  return loading ? (
    <div
        className="bg-opacity-50 bg-black fixed inset-0 flex justify-center items-center">
            <div
                className="w-[300px] h-[500px] font-boogaloo text-slate-800 bg-[url('/fond/fondArtCommerceBlue.png')] bg-bottom flex justify-center">
                        

                        <h2
                            className="text-center mt-6">
                            INFOS DU CLIENT numéro {clientId} 
                        </h2>
            </div>
            
    </div>
  ) : (
      <div
        className="font-bold font-boogaloo text-2xl">
        EN COURS DE CHARGEMENT ....
      </div>
    )
}

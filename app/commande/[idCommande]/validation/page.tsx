// Code pour les imports : ------------------------------------------------------- //
"use client"
import { useParams } from "next/navigation"; 
import { useEffect, useState } from "react"; 



interface Commande {
    id_commande: number, 
    total: number, 
    adresse_livraison: string, 
    cp_livraison: string, 
    ville_livraison: string
    id_client:  number
}

interface Client {
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





export default function page() {

  const [ commande, setCommande ] = useState<Commande>({
    id_commande:0,
    total:0, 
    adresse_livraison:"",
    cp_livraison:"",
    ville_livraison:"",
    id_client:0
}); 


  const [ client, setClient ] = useState<Client>({
  id_client:0,
  mail:"", 
  role:"", 
  prenom:"", 
  nom:"",  
  adresse_livraison:"",
  cp_livraison:"",
  ville_livraison:"",
  telephone:""
}); 


  
  
  const params = useParams(); 
  const idCommande = params?.idCommande; 

  useEffect(()=>{

    async function getOrder() {
      try {
        const response = await fetch (`/api/commandes/getOneOrder/${idCommande}`, {
          method: "GET", 
          credentials: "include"
        })

        if(!response.ok) {
          throw new Error("Récupération du client non aboutie")
         }

         const data = await response.json(); 
         console.log("voila ce qu'on récupère du back en datas : ", data); 

         setCommande(data.order); 
         setClient(data.customer); 


      } catch (error) {
        console.error("récuperation de la validation de commande échouée")
      }

    } 
    getOrder(); 
  }, [])


  return (
    <div
      className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center">


        <p> Ici on a récupéré la commande n° {idCommande} </p>


    </div>
  )
}

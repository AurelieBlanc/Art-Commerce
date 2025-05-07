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
      className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center flex flex-col items-center">

        <h2
          className="font-boogaloo text-2xl text-slate-800 mt-6">
          Validation de la commande avant paiement:
        </h2>


        <h3
          className="font-boogaloo text-xl text-slate-800 mt-4 ">
          Récap Montant Total de la Commande: 
        </h3>
        <p
          className="font-rubik mb-4 text-xl text-red-600 font-semibold">
            {commande.total} € TTC
        </p>

        <h3
          className="font-boogaloo text-xl text-slate-800 mb-2">
          Récap Adresse de la commande : 
        </h3>

        <div
          className="flex mb-1 text-red-600 font-medium">
          <p
            className="font-rubik mr-1">
            {client.prenom} 
          </p>
          <p
            className="font-rubik">
            {client.nom} 
          </p>
        </div>

          <p
            className="font-rubik mb-1 mr-1 text-red-600 font-medium">
            {client.adresse_livraison} 
          </p>

          <div
          className="flex mb-1 text-red-600 font-medium">
          <p
            className="font-rubik mr-1">
            {client.cp_livraison} 
          </p>
          <p
            className="font-rubik">
            {client.ville_livraison} 
          </p>
        </div>

          <p
            className="font-rubik mb-6 mr-1 text-red-600 font-medium">
            {client.telephone} 
          </p>




        <button
          className="bg-slate-700 text-white font-boogaloo text-xl w-[200px] h-[50px] rounded-md shadow-2xl mb-6">
            Passer au paiement
        </button>






    </div>
  )
}

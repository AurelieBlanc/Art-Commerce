// Code pour les imports : ------------------------------------------------------- //
"use client"
import { useParams } from "next/navigation"; 
import { useEffect, useState } from "react"; 
import { loadStripe } from "@stripe/stripe-js"; 
import useStore from "@/stores/useStore";
import Cookies from "js-cookie"; 
import { useRouter } from "next/navigation"; 


if(!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) { // on checke pour eviter des erreurs TS
  throw new Error ("La clé publique Stripe est manquante !"); 
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)







// Code pour le typage : ---------------------------------------------------- //
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

// On importe les outils et les states , globaux et locaux : ---------- //
  const router = useRouter(); 

  const { isAuthenticated, role } = useStore(); 

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
  const idCommande = params?.idCommande; // on recupère l'id de la commande dans l'URL



// Code pour recupérer les infos d'une commande précise selon son ID : ------- //
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

         setCommande(data.order); 
         setClient(data.customer); 


      } catch (error) {
        console.error("récuperation de la validation de commande échouée")
      }

    } 
    getOrder(); 
  }, [])




// Code qui se déclenche quand l'user appuiera sur le bouton "Passer au Paiement" pour un appel API au BACK pour créer une session Stripe : //
  async function orderPayment () {
    const email = client.mail; 
    const amount = commande.total; 
    const idCommande = commande.id_commande; 





// On verifiera que le client est bien connecté sinon on renverra à la page de connexion : //
    if(!isAuthenticated && role !== "client") {
      alert("connectes toi à ton compte pour pouvoir régler ta commande.")
      return router.push ("/loginAndRegister"); 
    }

    const response = await fetch ("/api/payment/stripe", {
      method: "POST", 
      credentials: "include", 
      headers: {
        "Content-Type": "application/json", 
        "x-csrf-token": Cookies.get("csrfToken") || "",
      }, 
      body: JSON.stringify({amount, email, idCommande})
    }); 

    const data = await response.json(); 


    const stripe = await stripePromise; 

    if(stripe && data.id) {  // si on a bien une sessions Stripe et un id, alors on va declencher la redirection vers la page de paiement : 
      stripe.redirectToCheckout({ sessionId: data.id})
    } else {
      alert("Erreur lors de la redirection vers le paiement")
    }

  }


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
          onClick={orderPayment}
          className="bg-slate-700 text-white font-boogaloo text-xl w-[200px] h-[50px] rounded-md shadow-2xl mb-6">
            Passer au paiement
        </button>


    </div>
  )
}

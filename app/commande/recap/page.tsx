// Code pour les imports : ---------------------------------------------------//
"use client"; 
import { useEffect, useState } from "react"; 
import useStore from "@/stores/useStore";
import { getPanier } from "../../../utils/panierCookie"; 
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation"; 




interface ProduitsCommande {
  id_produit: number, 
  nom: string, 
  prix: number
}

interface Client {
  id_client: number, 
  mail: string, 
  role:string, 
  prenom: string, 
  nom: string, 
  adresse_livraison: string, 
  cp_livraison: string, 
  ville_livraison: string, 
  telephone: string, 
}





export default function page() {

// ici on aura le code pour nos différents states, locaux et globaux et nos outils :  //

  const router = useRouter(); 

  const [ loadingPage, setLoadingPage ] = useState<boolean>(false); 

  const [ produitsCommande, setProduitsCommande ] = useState<ProduitsCommande[]>([]); 

  const [ totalProduits, setTotalProduits ] = useState<number>(0); 

  const [ ports, setPorts ] = useState<number>(0); 

  const [ totalCommande, setTotalCommande ] = useState<number>(0); 

  const [ client, setClient ] = useState<Client>({
    id_client: 0, 
    mail:"",
    role:"", 
    prenom:"", 
    nom:"", 
    adresse_livraison:"", 
    cp_livraison:"", 
    ville_livraison:"", 
    telephone:"", 
    }); 

  const { id, role, isAuthenticated } = useStore(); 

  



// Code qui s'éxécute au montage du composant, pour charger les données, l'adresse du client, le contenu du panier récupéré en BDD : // 
  useEffect(()=> {

  
// Ici on recupere les id des produits dans le cookie : //
    const commande = getPanier(); 
    let idsCommande: string[] = []; 

    commande.map((elem) => {
      idsCommande.push(elem.id); 
    }); 


// ... et grace à ces ID récupérés, on fait un appel API pour aller chercher les produits concernés : //
    async function getProducts() {
      try {
        const response = await fetch(`/api/panier/getArticles?ids=${idsCommande.join(",")}`, {
          method:"GET",
        })

        if(!response.ok) {
          throw new Error("Récupération des produits non aboutie")
         }


        const data = await response.json(); 

        if(Array.isArray(data)) {
          setProduitsCommande(data)
        }
        console.log(data); // A EFFACER UNE FOIS QUE LA PAGE SERA FINIE



      } catch (error) {
        console.error("La récupération du récap de commande a échoué")
      }
    }

    getProducts(); 

    

  }, []); 



  useEffect(() => {

    // Code pour calculer le montant des produits seuls : //
    let totalPrix = 0; 
    produitsCommande.map((produit) => {
      totalPrix = totalPrix + Number(produit.prix)
      setTotalProduits(totalPrix)
    })

    
  }, [produitsCommande])



  useEffect(() => {
    // Code pour calculer les frais de ports : //
    if(totalProduits < 150) {
      setPorts(20)
    } else if (totalProduits >= 150 && totalProduits < 300) {
      setPorts(10)
    } else {
      setPorts(0)
    }

    
  }, [totalProduits]); 



  useEffect(() => {

// Code pour calculer le montant total de la commande : //
    setTotalCommande(totalProduits + ports); 

  }, [ports])



  useEffect (() => {

    async function getClient() {
      try {
        const response = await fetch (`/api/clients/getInfosCustomer/${id}`, {
        method: "GET"
      })

      if(!response.ok) {
        throw new Error("Récupération du client non aboutie")
       }

    const data = await response.json(); 

    setClient(data.infosClient); 

    } catch (error) {
    console.error("faillite dans la recupération des infos du client")
    }
    }

    getClient(); 
 
    
  }, [id])



  useEffect(() =>{
    setLoadingPage(true);
  }, [client, totalCommande])



  async function validOrder() {

    if(!isAuthenticated && role !== "client") {
      alert("Vous devez etre connecté pour continuer vers la finalisation de la commande")
      return router.push("/loginAndRegister"); 
    }

    const idsProduits: number[] = []; 
    produitsCommande.map((produit) =>
    idsProduits.push(produit.id_produit))

    try {
      const response = await fetch("/api/commandes/createOrder", {
        method: "POST", 
        credentials: "include", 
        headers: {
          "Content-Type": "application/json", 
          "x-csrf-token": Cookies.get("csrfToken") || "", 
        }, 
        body: JSON.stringify({
          idClient: id, 
          idsProduits, 
          }), 
        
      })

      if(!response.ok) {
          alert("erreur dans la validation de commande"); 
          return; 
       }
       
      const data = await response.json(); 

      console.log("idCommande : ", data.idCommande)

      router.push(`/commande/${data.idCommande}/validation`) // GROSSE VERIF A FAIRE UNE FOIS QUE JAURAI EU LE RETOUR DU BACK  !!!!!!

    } catch(error) {
      console.error("erreur lors de la validation du récap de commande: ", error)
    }

  }





if(loadingPage) {
  return (
    <div
      className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center flex flex-col items-center">
        <h2
          className="font-boogaloo text-2xl mt-6 mb-2">
          Récapitulatif de commande : 
        </h2>

        {produitsCommande?.map((produit) => {
          return (
            <div
              className="flex mt-2"
              key={produit.id_produit}>

              {/* Champ Nom du produit:  */}
              <div
                className="produit font-rubik">
                  <p>
                    {produit.nom} :
                  </p>
              </div>

              {/* Champ Prix du produit:  */}
              <div
                className="prix ml-3">
                  <p>
                    {produit.prix} €
                  </p>
              </div>

            </div>
          )
        })}

        <div
          className="border-black border-b mt-2 w-[200px] mx-auto ">
        </div>

        {/* Total Produits :  */}
        <div
          className="totalProduits flex font-bold mt-3">
              <p
                className="">
                  TOTAL PRODUITS: 
              </p>
              <p
                className="ml-3">
                  {totalProduits} € 
              </p>

        </div>

        <div
          className="border-black border-b mt-2 w-[200px] mx-auto ">
        </div>

        {/* Total Frais de ports  :  */}
        <div
          className="totalProduits flex font-bold mt-3">
              <p
                className="">
                  TOTAL FRAIS DE PORTS: 
              </p>
              <p
                className="ml-3">
                  {ports} € 
              </p>


        </div>

        <div
          className="border-black border-b mt-2 w-[200px] mx-auto ">
        </div>

        {/* TOTAL COMMANDE :  */}
        <div
          className="totalProduits flex font-extrabold mt-3 text-red-600">
              <p
                className="">
                  TOTAL COMMANDE : 
              </p>
              <p
                className="ml-3">
                  {totalCommande} € 
              </p>
        </div>


        <h2
          className="font-boogaloo text-2xl mt-10 mb-6 text-center">
          Récapitulatif des infos du client pour la livraison : 
        </h2>
        <div
          className="font-rubik flex flex-col items-center">

            <div
              className="flex">

             {/* Champ prénom:  */}
            <p
              className="font-bold">
              Prénom: 
            </p>
            <p
              className="ml-4">
              {client.prenom}
            </p>
            </div>

            {/* Champ nom:  */}
            <div
              className="flex">
            <p
              className="font-bold">
              Nom: 
            </p>
            <p
              className="ml-4">
              {client.nom}
            </p>
            </div>

            {/* Champ email:  */}
            <div
              className="flex">
            <p
              className="font-bold">
              Mail : 
            </p>
            <p
              className="ml-4">
              {client.mail}
            </p>
            </div>

            {/* Champ adresse de livraison:  */}
            <div
              className="flex">
            <p
              className="font-bold">
              Adresse de livraison : 
            </p>
            <p
              className="ml-4">
              {client.adresse_livraison}
            </p>
            </div>

            {/* Champ Code Postal:  */}
            <div
              className="flex">
            <p
              className="font-bold">
              Code Postal : 
            </p>
            <p
              className="ml-4">
              {client.cp_livraison}
            </p>
            </div>

            {/* Champ Ville de livraison:  */}
            <div
              className="flex">
            <p
              className="font-bold">
              Ville de Livraison : 
            </p>
            <p
              className="ml-4">
              {client.ville_livraison}
            </p>
            </div>

            {/* Champ Téléphone :  */}
            <div
              className="flex">
            <p
              className="font-bold">
              Téléphone : 
            </p>
            <p
              className="ml-4">
              {client.telephone}
            </p>
            </div>

            <Link
                href="/dashboard">
                <button
                  className="mt-6 w-[180px] p-2 font-boogaloo bg-slate-700 text-white text-lg rounded-lg shadow-2xl border border-black">
                  Modifier les infos de livraison
                </button>
            </Link>

           
                <button
                  onClick={validOrder}
                  className="mb-10 mt-6 w-[180px] p-2 font-boogaloo bg-red-700 text-white text-lg rounded-lg shadow-2xl border border-black">
                  Valider la commande et les infos de livraison
                </button>
            
            
        </div>
        
    </div>
  )

} else {
  return (
    <div>...Récap de commande en cours de chargement</div>
  )
}
 
}

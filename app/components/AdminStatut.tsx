//Code pour les imports : --------------------------------------------------- //
import { IoMdCloseCircle } from "react-icons/io"; // icone pour close la modale : <IoMdCloseCircle />
import { useModalStore } from "@/stores/useStore";
import { useEffect, useState } from "react"; 
import Cookies from "js-cookie"; 




// Code pour les typages : ------------------------------------------------- //
interface StatutCommande {
  id_commande: number, 
  statut: string
}







export default function AdminStatut({ updateId } : { updateId: number}) {

// Code pour les states locaux ou globaux, et outils : --------------------- //
const { toggleModal } = useModalStore(); 

const [ loading, setLoading ] = useState(false); 

const [ statutCommande, setStatutCommande ] = useState<StatutCommande>({
  id_commande: 0, 
  statut:""
});



// Code pour appeler la commande avec son id, et recupérer le statut de commande lors du montage de la modale : //
useEffect(() => {
  async function getOrder() {
    try {
      const response = await fetch (`/api/commandes/getOneOrderStatus/${updateId}`, {
        method: "GET", 
        credentials: "include"
      })

      if(!response.ok) {
            throw new Error("réponse appel Commandes erreur")
        }

        const data = await response.json();

        setStatutCommande({
          id_commande: data.order.id_commande, 
          statut:data.order.statut
    }); 

    setLoading(true); 

    } catch(error) {
      console.error("la récupération de la commande ne s'est pas déroulée correctement")
    }
  }; 

  getOrder(); 

}, [])



// Code , fonction pour fermer la modale : ---------------------------------- //
function closeModal () {
  toggleModal(); 
}




// Code pour modifier la valeur dans le select avec la nouvelle valeur choisie : //
function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
  const value = event.target.value; 
  setStatutCommande( prev => ({
    ...prev, 
    statut: value
  })); 
 
}



// Code pour soumettre le nouveau state statutCommande en back : ---------------- //
async function handleSubmitUpdate(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault(); 

  try {
    const response = await fetch (`/api/commandes/updateOneOrder/${updateId}`, {
      method: "PATCH", 
      credentials: "include", 
      headers : {
        "Content-Type": "Application/json", 
        "x-csrf-token": Cookies.get("csrfToken") || ""
      }, 
      body: JSON.stringify({ statutCommande })
    }); 

    if(!response.ok) {
      throw new Error ("Modification de statut de commande non aboutie")
    }

    const data = await response.json(); 
    alert("le statut a bien été mis à jour"); 
    toggleModal(); 

  } catch(error) {
    console.error("Erreur lors de la modification du produit", error); 
    alert("Erreur lors de la modification du produit")
  }

}


// Code pour retourner le composant : ----------------------------------- //
return loading ? 
   (
    <div
        className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-40 z-50">
        <div
            className="w-[300px] h-[400px] font-boogaloo text-slate-800 text-center bg-white rounded-lg shadow-lg bg-[url('/fond/fondArtCommerceBlue.png')] bg-bottom">
           
            <button
              className=""
              onClick={closeModal}>
              <IoMdCloseCircle
                className="text-red-700 relative left-[128px] top-1 text-4xl" />
            </button>

            <h2
              className="m-6 text-3xl">
                Modification du statut de commande n° {updateId} :
            </h2>

            <form action=""
              className=""
               onSubmit={handleSubmitUpdate}
              >

            <label htmlFor="statutCommande"
              className="text-2xl">
              Statut de commande:
            </label>
            <select
              className="w-[90%] mt-4 text-xl"
              name="statut"
              id="statutCommande"
              onChange={handleChange}
              value={statutCommande.statut}
              >
              <option value="EN ATTENTE DE PAIEMENT">EN ATTENTE DE PAIEMENT</option>
              <option value="PAYEE, EN COURS DE PREPARATION">PAYEE, EN COURS DE PREPARATION</option>
              <option value="EN COURS DE LIVRAISON">EN COURS DE LIVRAISON</option>
              <option value="LIVREE">LIVREE</option>
            </select>

            <button
                className="mt-10 text-xl w-[70%] bg-slate-800 text-white rounded-lg shadow-2xl h-[70px] pl-6 pr-6"
                type="submit"
               >
                 Valider le nouveau Statut de Commande
            </button>
            </form>

        </div>
    </div>

    ) : (
      <div
        className="font-bold font-boogaloo text-2xl">
        EN COURS DE CHARGEMENT ....
      </div>
    )
 
  
}

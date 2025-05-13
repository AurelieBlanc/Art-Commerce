//Code pour les imports : --------------------------------------------------- //
import { IoMdCloseCircle } from "react-icons/io"; // icone pour close la modale : <IoMdCloseCircle />
import { useModalStore } from "@/stores/useStore";
import { useEffect, useState } from "react"; 


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




return loading ? 
   (
    <div
        className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-40 z-50">
        <div
            className="w-[300px] h-[400px] text-3xl font-boogaloo text-slate-800 text-center bg-white rounded-lg shadow-lg">
           
            <button
              className=""
              onClick={closeModal}>
              <IoMdCloseCircle
                className="text-red-700 relative left-[128px] top-1 text-4xl" />
            </button>

            <h2
              className="m-4">
                Modification du statut de commande n° {updateId} :
            </h2>

            <label htmlFor="">
              Statut de commande:
            </label>
            <p>
              {statutCommande.statut}
            </p>
             

            
        </div>
    </div>

    ) : (
      <div>
        EN COURS DE CHARGEMENT ....
      </div>
    )
 
  
}

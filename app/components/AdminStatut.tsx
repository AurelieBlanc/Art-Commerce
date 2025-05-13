//Code pour les imports : --------------------------------------------------- //
import { IoMdCloseCircle } from "react-icons/io"; // icone pour close la modale : <IoMdCloseCircle />
import { useModalStore } from "@/stores/useStore";





export default function AdminStatut({ updateId } : { updateId: number}) {

// Code pour les states locaux ou globaux, et outils : --------------------- //
const { toggleModal } = useModalStore(); 




// Code , fonction pour fermer la modale : ---------------------------------- //
function closeModal () {
  toggleModal(); 
}
  return (
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
             

            
        </div>
    </div>
  )
}

// Code pour les imports : -----------------------------------------------------------------------------------------------------------------------------//
import { AiFillInstagram } from "react-icons/ai"; // import icone instagram <AiFillInstagram />








// Code pour retourner composant Footer: -------------------------------------------------------------------------------------------------------------//
export default function Footer() {
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceRose.png')] bg-cover bg-center w-full h-[60px] flex justify-center items-center">
            <ul
                className="font-boogaloo flex text-slate-800 gap-10 pt-3">
                    <li>Qui Sommes-nous ?</li>
                    <li>Contact</li>
                    <li>Conditions Générales de Ventes</li>
                    <li
                        className="text-3xl relative bottom-1">
                            <AiFillInstagram />
                    </li>
            </ul>
            
    </div>
  )
}

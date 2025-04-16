// Code pour les imports : -----------------------------------------//
import { AiFillInstagram } from "react-icons/ai"; // import icone instagram <AiFillInstagram />








// Code pour retourner composant Footer: ---------------------------//
export default function Footer() {
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceRose.png')] bg-cover bg-center w-full h-[120px] flex justify-center items-center text-center">
            <ul
                className="font-boogaloo flex flex-col text-slate-800 pt-3 gap-2">
                    <li>Qui Sommes-nous ?</li>
                    <li>Contact</li>
                    <li>Conditions Générales de Ventes</li>
                    <li
                        className="text-2xl relative bottom-1 flex justify-center">
                            <AiFillInstagram />
                    </li>
            </ul>
            
    </div>
  )
}

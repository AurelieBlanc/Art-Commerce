// Code pour les imports : -----------------------------------------//
import { AiFillInstagram } from "react-icons/ai"; // import icone instagram <AiFillInstagram />








// Code pour retourner composant Footer: ---------------------------//
export default function Footer() {
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBlue.png')] bg-cover bg-center w-full h-[158px] flex justify-center items-center text-center">
            <ul
                className="font-boogaloo flex flex-col text-slate-800 pt-3 gap-2 mt-6 mb-4">
                    <li
                      className="">
                        Qui Sommes-nous ?
                    </li>
                    <li>
                      Contact
                    </li>
                    <li>
                      Frais de ports
                    </li>
                    <li>
                      Conditions Générales de Ventes
                    </li>
                    <li
                        className="text-2xl relative bottom-1 flex justify-center mb-4">
                            <AiFillInstagram />
                    </li>
            </ul>
            
    </div>
  )
}

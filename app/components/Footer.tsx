// Code pour les imports : -----------------------------------------//
import { AiFillInstagram } from "react-icons/ai"; // import icone instagram <AiFillInstagram />
import Link from "next/link";







// Code pour retourner composant Footer: ---------------------------//
export default function Footer() {
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBlue.png')] bg-cover bg-center w-full h-[158px] flex justify-center items-center text-center">
            <ul
                className="font-boogaloo flex flex-col text-slate-800 pt-3 gap-2 mt-6 mb-4">
                    
                    <Link
                      href="/qui-sommes-nous">
                      <li
                      className="">
                        Qui Sommes-nous ?
                      </li>
                    </Link>

                    <Link
                      href="/contact">
                      <li>
                        Contact
                      </li>
                    </Link>

                    <Link
                      href="/frais-de-livraison">
                      <li>
                        Frais de livraison
                      </li>
                    </Link>

                    <Link
                      href="/cgv">
                      <li>
                        Conditions générales de Ventes
                      </li>
                    </Link>


                    <Link
                      href="https://www.instagram.com/bewildbeweirdbewhite/">
                      <li
                        className="text-2xl relative bottom-1 flex justify-center mb-4">
                            <AiFillInstagram />
                      </li>
                    </Link>
            </ul>
            
    </div>
  )
}

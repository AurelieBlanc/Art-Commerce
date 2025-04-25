// Code pour les imports : --------------------------------------------------//
import { FaUserCircle } from "react-icons/fa"; // import de l'icone user <FaUserCircle />
import { FaHeart } from "react-icons/fa"; // import de l'icone coeur <FaHeart />
import { FaShoppingBasket } from "react-icons/fa"; // import de l'icone panier <FaShoppingBasket />
import { IoHome } from "react-icons/io5"; // import de l'icone home , accueil <IoHome />
import { BiSolidLogInCircle } from "react-icons/bi"; // import de l'icone login, <BiSolidLogInCircle />


import Link from 'next/link';


// AMELIORATION UX : IL FAUDRA IMPORTER LE USESTORE POUR CONDITIONNER OU PAS L AFFICHAGE DANS LA BARRE DE NAV DU LOGO DASHBOARD ADMIN  OU USER : pas possible d'y acceder si le user n'est pas connecté 


// Code pour retourner le composant Nav: -----------------------------------------//
export default function Nav() {
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceRose.png')] bg-cover bg-center w-full h-[60px] flex items-center justify-center">
            <ul
                className="flex gap-5 font-sedgwick text-slate-800 text-[26px]">


                    {/* Icone Home :  */}
                    <li>
                        <Link href ="/"
                              className="">
                              <IoHome />
                        </Link>
                    </li>


                    {/* Icone Login :  */}
                    <li>
                        <Link href ="/loginAndRegister"
                              className="">
                              <BiSolidLogInCircle />
                        </Link>
                    </li>


                    {/* Icone Dashboard Client ou Admin  :  */}
                    <li>
                        <Link href ="/dashboard"
                              className="">
                              <FaUserCircle />
                        </Link>
                    </li>


                     {/* Icone Panier :  */}
                     <li>
                        <FaShoppingBasket />
                    </li>


                    {/* Icone Like :  */}
                    <li>
                        <FaHeart />
                    </li>

            </ul>
        
    </div>
  )
}

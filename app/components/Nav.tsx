// Code pour les imports : ----------------------------------------------------------------------------------------------------------//
import { FaUserCircle } from "react-icons/fa"; // import de l'icone user <FaUserCircle />
import { FaHeart } from "react-icons/fa"; // import de l'icone coeur <FaHeart />
import { FaShoppingBasket } from "react-icons/fa"; // import de l'icone panier <FaShoppingBasket />
import { IoHome } from "react-icons/io5"; // import de l'icone home , accueil <IoHome />
import Link from 'next/link';






// Code pour retourner composant Nav: ---------------------------------------------------------------------------------------------//
export default function Nav() {
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceRose.png')] bg-cover bg-center w-full h-[60px] flex items-center justify-center">
            <ul
                className="flex gap-5 font-sedgwick text-pink-900 text-[26px]">
                    <li>
                        <Link href ="/"
                              className=""
                        >
                        <IoHome />
                        </Link>
                    </li>
                    <li>
                        <FaShoppingBasket />
                    </li>
                    <li>
                        <Link href ="/loginAndRegister"
                              className=""
                        >
                        <FaUserCircle />
                        </Link>

                    </li>
                    <li>
                        <FaHeart />
                    </li>

            </ul>
        
    </div>
  )
}

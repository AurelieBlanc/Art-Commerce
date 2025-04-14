// Code pour les imports : ----------------------------------------------------------------------------------------------------------//
import React from 'react'
import { FaUserCircle } from "react-icons/fa"; // import de l'icone user <FaUserCircle />
import { FaHeart } from "react-icons/fa"; // import de l'icone coeur <FaHeart />
import { FaShoppingBasket } from "react-icons/fa"; // import de l'icone panier <FaShoppingBasket />
import { IoHome } from "react-icons/io5"; // import de l'icone home , accueil <IoHome />







// Code pour retourner composant Nav: ---------------------------------------------------------------------------------------------//
export default function Nav() {
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceRose.png')] bg-cover bg-center w-full h-[60px] flex items-center justify-center">
            <ul
                className="flex gap-5 font-sedgwick text-pink-900 text-[26px]">
                    <li>
                        <IoHome />
                    </li>
                    <li>
                        <FaShoppingBasket />
                    </li>
                    <li>
                        <FaUserCircle />
                    </li>
                    <li>
                        <FaHeart />
                    </li>

            </ul>
        
    </div>
  )
}

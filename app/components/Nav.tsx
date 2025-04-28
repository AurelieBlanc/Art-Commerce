// Code pour les imports : --------------------------------------------------//
"use client"
import useStore from "@/stores/useStore";
import { FaUserCircle } from "react-icons/fa"; // import de l'icone user <FaUserCircle />
import { FaHeart } from "react-icons/fa"; // import de l'icone coeur <FaHeart />
import { FaShoppingBasket } from "react-icons/fa"; // import de l'icone panier <FaShoppingBasket />
import { IoHome } from "react-icons/io5"; // import de l'icone home , accueil <IoHome />
import { BiSolidLogInCircle } from "react-icons/bi"; // import de l'icone login, <BiSolidLogInCircle />
import { RiLogoutCircleFill } from "react-icons/ri"; // import de l'icone Logout <RiLogoutCircleFill />



import Link from 'next/link';






// Code pour retourner le composant Nav: -----------------------------------------//
export default function Nav() {

const { isAuthenticated, setAuthenticated } = useStore(); 

async function logout() {

    try {
        const response = await fetch ("/api/auth/logout", {
            method: "POST", 
            credentials: "include", 
        })

        if(!response.ok) {
            throw new Error("erreur Appel API pour la deconnexion")
        }

        const data = await response.json(); 
        console.log("message du back ", data.message, data.isAuthenticated); 
        setAuthenticated(data.isAuthenticated); 

    } catch (error) {
        console.error("la déconnexion a échoué", error)
    }

}


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
                    
                    { isAuthenticated &&
                        <li>
                        <Link href ="/dashboard"
                              className="">
                              <FaUserCircle />
                        </Link>
                    </li>
                    }
                    


                     {/* Icone Panier :  */}
                     <li>
                        <FaShoppingBasket />
                    </li>


                    {/* Icone Like :  */}
                    <li>
                        <FaHeart />
                    </li>


                    {/* Icone Logout :  */}
                    { isAuthenticated &&
                    <li>
                        <button>
                        <RiLogoutCircleFill
                            className="text-red-600"
                            onClick={logout} />
                        </button>
                    </li>
                    }
                    

            </ul>
        
    </div>
  )
}

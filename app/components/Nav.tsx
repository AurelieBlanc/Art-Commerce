// Code pour les imports : --------------------------------------------------//
"use client"
import { useStore } from "@/stores/useStore";
import { FaUserCircle } from "react-icons/fa"; // import de l'icone user <FaUserCircle />
import { FaHeart } from "react-icons/fa"; // import de l'icone coeur <FaHeart />
import { FaShoppingBasket } from "react-icons/fa"; // import de l'icone panier <FaShoppingBasket />
import { IoHome } from "react-icons/io5"; // import de l'icone home , accueil <IoHome />
import { BiSolidLogInCircle } from "react-icons/bi"; // import de l'icone login, <BiSolidLogInCircle />
import { RiLogoutCircleFill } from "react-icons/ri"; // import de l'icone Logout <RiLogoutCircleFill />
import { FaClipboardList } from "react-icons/fa"; // import de l'icone clipboard : <FaClipboardList />
import { ImEyeBlocked } from "react-icons/im"; // import de l'icone oeil barré, pour les produits rendus inactifs non vendus : <ImEyeBlocked />
import toast from "react-hot-toast";
import Cookies  from "js-cookie"; 
import Link from 'next/link';






// Code pour retourner le composant Nav: -----------------------------------------//
export default function Nav() {

const { isAuthenticated, role, setAuthenticated } = useStore(); 



// Fonction pour déconnecter le user avec un appel API en back, méthode POST : // 
async function logout() {

    try {
        const response = await fetch ("/api/auth/logout", {
            method: "POST", 
            credentials: "include", 
            headers: {
                "x-csrf-token": Cookies.get("csrfToken") || "", 
            }
        })

        if(!response.ok) {
            throw new Error("erreur Appel API pour la deconnexion")
        }

// on recuperera la réponse avec le statut isAuthenticated, que l'on mettra à jour dans le store générale, pour que non seulement tous les cookies d'authentification et CSRF soient expirés, mais aussi pour que le store global reflète la deconnexion notammement dans la barre de nav (disparition des icones compte et deconnexion) : //
        const data = await response.json(); 
        setAuthenticated(data.isAuthenticated); 

        toast.success("Vous etes bien deconnecté !", { duration: 4000})

    } catch (error) {
        console.error("la déconnexion a échoué", error)
    }

}

// Code pour retourner le JSX ; certains logos sont affichés de manière conditionnelle : //
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBlue.png')]  bg-cover bg-bottom w-full h-[50px] flex items-center justify-center">
            <ul
                className="flex gap-5 font-sedgwick text-slate-800 text-[26px] relative top-2">


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


                    {/* Icone Dashboard Client ou Admin et gestion :  */}
                    
                    { isAuthenticated && (
                        <>
                        <li>
                        <Link href ="/dashboard"
                              className="">
                              <FaUserCircle />
                        </Link>
                    </li>
                    


                    
                     <li>
                        <Link
                            className=""
                            href="/gestion">
                        <FaClipboardList />
                        </Link>
                    </li>

                     
                    </>
                    )}

                    {isAuthenticated && role === "admin" && (
                        <>
                    <li>
                        <Link
                            className=""
                            href="/inactif">
                        <ImEyeBlocked />
                        </Link>
                        
                    </li>
                    </>
                     )}
                    

                     {/* Icone Panier :  */}
                     <li>
                        <Link
                            className=""
                            href="/panier">
                        <FaShoppingBasket />
                        </Link>
                    </li>


                    {/* Icone Like :  */}
                    <li>
                        <Link
                            className=""
                            href="/favoris">
                        <FaHeart />
                        </Link>
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

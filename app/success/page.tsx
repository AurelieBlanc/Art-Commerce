// Code pour les imports : --------------------------------------------------- //
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDroprightCircle } from "react-icons/io"; // icone fleche : <IoIosArrowDroprightCircle />





export default function page() {
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center flex flex-col items-center justify-center">
            <h2
                className="font-boogaloo text-3xl text-slate-900 mt-10">
                Merci Pour Votre Commande !!! 
            </h2>
            
            <Image
              className=""
              src="/vecto/LogoArtCommerce.svg"
              alt="logo de Art commerce"
              width={300}
              height={300}
            />


            <div
              className="flex items-center ">
              <IoIosArrowDroprightCircle
                className="inline-block text-2xl relative top-3" />
              <Link
                className=""
                href="/">
              <p
                className="font-rubik font-bold mt-6 underline text-slate-800 ml-1">
                Retourner à la page d'accueil 
              </p>
              </Link>
            </div>
           

            <div
              className="flex items-center mb-10">
              <IoIosArrowDroprightCircle
                className="inline-block text-2xl relative top-3" />
              <Link
                className=""
                href="/gestion">
              <p
                className="font-rubik font-bold mt-6 underline text-slate-800 ml-1">
                Aller sur la page Récap de commandes 
              </p>
              </Link>
            </div>
           

    </div>
  )
}

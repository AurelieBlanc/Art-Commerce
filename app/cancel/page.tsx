// Code pour les imports : ---------------------------------------------------- //
import Link from "next/link"
import { IoIosArrowDroprightCircle } from "react-icons/io"; // icone fleche : <IoIosArrowDroprightCircle />
import { RiAlarmWarningFill } from "react-icons/ri"; // icone alarme : <RiAlarmWarningFill />






export default function page() {
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center flex flex-col items-center justify-center">
            <div
                className="flex items-center">
                    <RiAlarmWarningFill 
                        className="inline-block text-4xl text-red-700 relative top-4"/>
                    <h2
                        className="font-boogaloo text-4xl text-red-800 mt-10 ml-2">
                        Votre Paiement a échoué !
                    </h2>

            </div>

            <div
              className="flex items-center mb-6 mt-8">
              <IoIosArrowDroprightCircle
                className="inline-block text-2xl" />
              <Link
                className=""
                href="/commande/recap">
              <p
                className="font-rubik font-bold underline text-slate-800 ml-1">
                Procéder à une nouvelle tentative 
              </p>
              </Link>
            </div>
            
          
            <div
              className="flex items-center mb-16">
              <IoIosArrowDroprightCircle
                className="inline-block text-2xl relative" />
              <Link
                className=""
                href="/">
              <p
                className="font-rubik font-bold underline text-slate-800 ml-1">
                Retourner à la page d'accueil 
              </p>
              </Link>
            </div>
           

            
           

    </div>
  )
}

import Image from "next/image"

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


            <p
            className="font-rubik text-lg mt-6">
             Retourner à la page d'accueil 
            </p>

            <p
            className="font-rubik text-lg mt-6 mb-10">
             Consulter votre page de commandes  
            </p>

    </div>
  )
}

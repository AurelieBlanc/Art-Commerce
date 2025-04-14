// Code pour les imports : --------------------------------------------------------------------------------------------------------//
import Image from 'next/image'





//Code pour retourner le composant: -------------------------------------------------------------------------------------------------//
export default function Banner() {
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center w-full h-[400px] flex justify-center">
            
            <div>
                <Image
                    src="vecto/ArtCommerce.svg"
                    alt="logo de Art Commerce"
                    width={400}
                    height={400}
                />
            </div>
    </div>
  )
}

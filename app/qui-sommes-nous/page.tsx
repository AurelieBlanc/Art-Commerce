// Code pour les imports : ------------------------------------------- //
import Link from "next/link"


export default function 
() {

// Code pour retourner le composant JSX : ----------------------------- //
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center text-slate-800 flex flex-col items-center">

        <div
            className="w-[80%] md:w-[40%] mx-auto h-[400px]">
                <h2
                    className="font-boogaloo text-2xl mt-8 text-center"> 
                    Qui est derrière ce projet ?  ... 
                </h2>
                <p
                    className="font-rubik text-sm text-center mt-4 ">
                    ... Miss White, pour vous servir ^^ ; je vous invite à aller voir mon portfolio : 
                    <Link
                        className="underline ml-2 mr-2"
                        href="/https://portfolio-miss-white-dev-web.vercel.app/">
                        ici
                    </Link>
                    Specialisée en developpement web avec NEXT.JS, j'ai monté ce site pour exercer mes competences, de A à Z (la securité a été géree par moi meme, sans passer par une bibliothequet); 
                    le but etant de mettre en avant mon travail et mes compétences pour les employeurs auprès desquels je postule. 

                
                </p>
    
        </div>
        
    </div>
  )
}

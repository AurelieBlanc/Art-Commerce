// Code pour les imports : ------------------------------------------------- //
"use client"

import { useRef } from "react"; 
import { z } from "zod"; 




// Code pour valider le schema du mail : ---------------------------- //
export const emailSchema = z.object({
    email: z.string().email({ message: "Email invalide"}), 
}); 





export default function page() {
// Code pour récup l'email avec useRef (alternative au state) : -------- //
const emailRef = useRef<HTMLInputElement>(null)



// Fonction pour soumettre le form : ---------------------------------- //
async function handleSubmitEmail(event: React.FormEvent) {
    event.preventDefault(); 


// On recupère l'email : ---------------------------------------- //
    const email = emailRef.current?.value; 



// On vérifie le format de l'email : ----------------------------- //
    const result = emailSchema.safeParse({
        email
    })

    if(!result.success) {
        alert("le format du mail est incorrect"); 
        return; 
    } else {
        console.log("Format de l'email correct")
    }



// Code pour l'appel API : --------------------------------------- //
try {
    const response = await fetch ("/api/password/sendEmail", {
        method :"POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({ email })
    }); 

    if(!response.ok) {
        throw new Error("Erreur lors de l'envoi de l'email de réinitialisation")
    }

    const data = await response.json(); 
    
    alert (`Un  email de réinitialisation a été envoyé à votre adresse : ${email}`); 

    
    } catch(error) {
    console.error("Erreur serveur: ", error); 
    alert ("Erreur lors de l'envoi de l'email de réinitialisation du mot de passe")
    }
}




//Code pour retourner le composant JSX : ------------------------------ //
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center flex justify-center">
        <div
            className="w-[30%]">
                <h2
                    className="font-boogaloo text-2xl text-slate-800 mt-8 text-center w-[60%] mx-auto">
                    Renseignez ici votre adresse mail pour pouvoir recevoir un lien afin de réinitialiser votre mot de passe :   
                </h2>
                <form
                    className="flex flex-col justify-center items-center"
                    onSubmit={handleSubmitEmail}>
                    <input type="text" 
                        className="rounded-lg mt-4"
                        ref={emailRef}
                        required/>
                    <button
                        className="w-[200px] h-[50px] font-boogaloo text-xl bg-slate-800 text-white mt-6 rounded-lg mb-10 shadow-2xl">
                        Valider l'adresse mail    
                    </button>
                </form>
        </div>
    </div>
  )
}

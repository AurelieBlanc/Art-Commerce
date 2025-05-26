// Code pour les imports : ------------------------------------------- //
"use client"

import { useRef } from "react"; 
import { z } from "zod"; 






// Code pour les typages : ------------------------------------------- //
interface formData {
  nom: string, 
  prenom: string, 
  email: string, 
  message: string, 
  telephone: string
}





export default function page() {
// Code pour gérer les states avec useRef : ---------------------------- //
const prenomRef = useRef<HTMLInputElement>(null)
const nomRef = useRef<HTMLInputElement>(null); 
const emailRef= useRef<HTMLInputElement>(null); 
const telephoneRef = useRef<HTMLInputElement>(null); 
const messageRef= useRef<HTMLTextAreaElement>(null); 







// Code pour retourner le composant JSX : ------------------------------ //
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-top flex flex-col items-center">
        <h2
          className="font-boogaloo text-3xl text-slate-900 w-[60%] lg:w-[40%] mx-auto text-center mt-8">
            Pour nous contacter, veuillez remplir ce formulaire : 
        </h2>
        <form
          className="flex flex-col font-rubik text-slate-900 text-center lg:w-[40%] w-[80%]">

            {/* Champ Prénom:  */}
            <label htmlFor="prenom"
              className="mt-5 font-bold">
                Prénom : 
              </label>
            <input type="text"
              className="rounded-lg" 
              id="prenom"
              name="prenom"
              required
              ref={prenomRef}/>


            {/* Champ Nom:  */}
            <label htmlFor="nom"
              className="mt-5 font-bold">
                Nom : 
              </label>
            <input type="text"
              className="rounded-lg" 
              id="nom"
              name="nom"
              required
              ref={nomRef}/>


            {/* Champ Email:  */}
            <label htmlFor="email"
              className="mt-5 font-bold">
                Email : 
              </label>
            <input type="text"
              className="rounded-lg" 
              id="email"
              name="email"
              required
              ref={emailRef}/>


            {/* Champ Téléphone:  */}
            <label htmlFor="phone"
              className="mt-5 font-bold">
                Téléphone (facultatif) : 
              </label>
            <input type="text"
              className="rounded-lg" 
              id="phone"
              name="phone"
              ref={telephoneRef}/>


            {/* Champ Message:  */}
            <label htmlFor="message"
              className="mt-5 font-bold">
                Message : 
              </label>
            <textarea
              className="rounded-lg" 
              id="message"
              name="message"
              rows={5}
              maxLength={300}
              required
              ref={messageRef}/>


            {/* Champ bouton :  */}
            <button
              className="mt-8 font-boogaloo bg-slate-800 text-white h-[50px] rounded-lg shadow-2xl mb-10 border-2 border-slate-300">
                ENVOYER LE MESSAGE
            </button>

        </form>
    </div>
  )
}

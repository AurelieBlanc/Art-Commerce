// Code pour les imports : ------------------------------------------- //
"use client"

import { useRef } from "react"; 
import { z } from "zod"; 
import toast from "react-hot-toast";





// Code pour les typages : ------------------------------------------- //
interface formData {
  nom: string, 
  prenom: string, 
  email: string, 
  message: string, 
  telephone: string
}




// Code pour les schémas de validation ZOD : --------------------------- //
export const formContactSchema = z.object({
  nom: z
  .string()
  .min(2, {message: "le nom doit contenir au moins 2 caractères"})
  .regex( /^[a-zA-ZÀ-ÖØ-öø-ÿ'’ -]+$/, {message: "le nom contient des caractères invalides" }), 

  prenom: z
  .string()
  .min(2, {message: "le prénom doit contenir au moins 2 caractères"})
  .regex( /^[a-zA-ZÀ-ÖØ-öø-ÿ'’ -]+$/, {message: "le prénom contient des caractères invalides" }), 

  email: z.string().email("Email invalide"), 

  telephone: z
  .string()
  .optional()
  .refine(
    (val) => !val ||  (val.length >= 8 && /^[+]?[\d\s\-().]{7,20}$/.test(val)),
    { message: "Le numéro de téléphone est invalide ou incomplet"}), 

  message: z
  .string()
  .min(10, {message: "Le message est trop court"})
  .max(300, "Message trop long")
})





export default function page() {
// Code pour gérer les states avec useRef : ---------------------------- //
const prenomRef = useRef<HTMLInputElement>(null)
const nomRef = useRef<HTMLInputElement>(null); 
const emailRef= useRef<HTMLInputElement>(null); 
const telephoneRef = useRef<HTMLInputElement>(null); 
const messageRef= useRef<HTMLTextAreaElement>(null); 





// Code pour soumettre le formulaire : -------------------------------- //
async function submitMessageForm (event: React.FormEvent) {
  event?.preventDefault(); 


// On recupère les données du form : //
  const form = event.currentTarget as HTMLFormElement // cette ligne perettra de reset les champs du form apres la soumission de celui-ci 

  const prenom = prenomRef.current?.value; 
  const nom = nomRef.current?.value; 
  const email = emailRef.current?.value; 
  const telephone = telephoneRef.current?.value; 
  const message = messageRef.current?.value; 



// on va vérifier si les données respectent notre schéma de données avant de continuer dans la soumission du form : //

  const result = formContactSchema.safeParse({
    prenom, 
    nom, 
    email, 
    telephone, 
    message
  })

  if(!result.success) {
    const errors = result.error.flatten().fieldErrors // result.error : erreur retournée par zod quand la validation échoue / .flatten() : méthode de Zod qui transforme l'objet d'erreurs complexe en une forme plus simple / .fieldErrors : c'est un objet où chaque clé est un champ

    const messages = Object.entries(errors) // Object.entries convertit l'objet errors en tableau de paires clé valeur
    .map(([field, errs ]) => errs?.join(', ')) // pour chaque entrée [field, errs], errs est un tableau de messages d'erreur, .join(', ') concatène tous les messages pour ce champ séparés par une virgule + espace
    .filter(Boolean) // filtre le tableau pour garder uniquement les elements truthy (non vides)

    toast.error("Erreurs dans le formulaire : \n- " + messages.join("\n- "), { duration: 4000 })
    return
  } else {
    console.log("les données entrées sont correctes")
  }

  

// appel API en methode POST , avec les données du form envoyées en body : //
  try {

    const response = await fetch("/api/contact/sendMessage", {
      method: "POST", 
      headers: {
        "Content-Type" : "application/json"
      }, 
      body: JSON.stringify({
        prenom, 
        nom, 
        email, 
        telephone, 
        message
      })
    })

    if(!response.ok) {
      throw new Error("La réponse à l'appel API n'a pas aboutie")
    }

    const data = await response.json(); 
    toast.success("Votre message a bien été distribué, on reprendra contact avec vous au plus vite, merci !"); 
    form.reset(); 
    return; 


  } catch(error) {
    console.error("Erreur lors de la soumission du form : ", error); 
    alert("Echec lors de la soumission du message")
  }

}



// Code pour retourner le composant JSX : ------------------------------ //
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-top flex flex-col items-center">
        <h2
          className="font-boogaloo text-3xl text-slate-900 w-[60%] lg:w-[40%] mx-auto text-center mt-8">
            Pour nous contacter, veuillez remplir ce formulaire : 
        </h2>
        <form
          className="flex flex-col font-rubik text-slate-900 text-center lg:w-[40%] w-[80%]"
          onSubmit={submitMessageForm}>

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

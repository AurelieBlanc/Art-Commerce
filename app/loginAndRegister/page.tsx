// Code pour les imports : -------------------------------------------------------//
"use client" // composant éxécuté coté client
import { useRef } from "react"; 
import { z } from "zod"; 




// Code pour les schémas de validation Zod : -------------------------------------//
export const loginSchema = z.object({
  email: z.string().email({ message: "Email invalide"}), 
  password: z
  .string()
  .min(5, {message: "le mot de passe doit contenir au moins 5 caractères"})
  .regex(/[a-z]/, { message: "le mot de passe doit contenir au moins une lettre minuscule"})
  .regex(/[A-Z]/, { message: "le mot de passe doit contenir au moins une lettre majuscule"})
  .regex(/[0-9]/, { message: "le mot de passe doit contenir au moins un chiffre"})
  .regex(/[^a-zA-Z0-9]/, { message: "le mot de passe doit contenir au moins un caractère spécial"})
})




// schema ZOD pour le register à faire ici:
export const registerSchema = z.object({
  email: z.string().email({ message: "Email invalide"}),

  password: z
  .string()
  .min(5, {message: "le mot de passe doit contenir au moins 5 caractères"})
  .regex(/[a-z]/, { message: "le mot de passe doit contenir au moins une lettre minuscule"})
  .regex(/[A-Z]/, { message: "le mot de passe doit contenir au moins une lettre majuscule"})
  .regex(/[0-9]/, { message: "le mot de passe doit contenir au moins un chiffre"})
  .regex(/[^a-zA-Z0-9]/, { message: "le mot de passe doit contenir au moins un caractère spécial"}), 

  nom: z
  .string()
  .min(2, { message: "le nom doit contenir au moins 2 caractères"})
  .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/, { message: "le nom contient des caractères invalides"}), 

  prenom: z
  .string()
  .min(2, { message: "le nom doit contenir au moins 2 caractères"})
  .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/, { message: "le prénom contient des caractères invalides"}), 

  adresse: z
  .string()
  .min(5, { message: "l'adresse est trop courte" })
  .regex(/^\d{0,5}[a-zA-ZÀ-ÖØ-öø-ÿ\s'’\-,.]*$/, { message: "l'adresse contient des caractères invalides"}), 

  codePostal:z 
  .string()
  .regex(/^\d{5}$/, { message: "le code postal doit contenir exactement 5 chiffres "}), 

  ville:z 
  .string()
  .min (2, { message: "La ville doit contenir au moins 2 caractères"})
  .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ'’\- ]{2,}$/, { message: "Le nom de la ville contient des caractères invalides"}),

  telephone:z 
  .string()
  .regex(/^(\+33|0)[1-9]\d{8}$/, { message: "Numero de téléphone invalide"})
})





export default function pageLoginRegister() {

// Code pour gérer la logique du form LOGIN : ------------------------------------//
  
  const emailLoginRef =  useRef<HTMLInputElement>(null)
  const mdpLoginRef = useRef<HTMLInputElement>(null)

  const handleSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault(); 
    
    const form = e.currentTarget as HTMLFormElement  // cette ligne nous permettra de reset les champs du formulaire une fois que l user sera connecté
    const email = emailLoginRef.current?.value
    const mdp = mdpLoginRef.current?.value

    console.log(email, mdp)

   
      const result = loginSchema.safeParse({
        email, 
        password: mdp
      })

      if(!result.success) {
        alert("le format du mail ou du mot de passe est invalide")
        return; 
      } else {
        console.log("schéma de l'email et du mot de passe corrects")
      }

    try {
      const response = await fetch ("api/auth/login", {
        method: "POST", 
        headers: {
          'Content-Type': "application/json"
        }, 
        body: JSON.stringify({email, mdp}), 
        credentials : "include" // on prepare le navigateur a accepter un cookie onlyHTTP dans la réponse 
      })
  
      if(!response.ok) {
        throw new Error("Identifiants invalides")
       }
  
       const data = await response.json();
       console.log( "messsage:", data.message, data.data )
       alert("Vous etes bien connecté !");

       // ici il, faudra qu'on reset le formulaire: 
       
       form.reset(); 

       return; 
       
    } catch (error) {
      console.error("Erreur serveur: ", error); 
      alert ("Echec lors de la connexion , verifiez vos identifiants")
    }
    
  }




// Code pour gérer la logique du form REGISTER : -------------------------------------------//
const emailRegisterRef =  useRef<HTMLInputElement>(null)
const mdpRegisterRef = useRef<HTMLInputElement>(null)
const nomRegisterRef = useRef<HTMLInputElement>(null)
const prenomRegisterRef = useRef<HTMLInputElement>(null)
const adresseRegisterRef = useRef<HTMLInputElement>(null)
const cpRegisterRef = useRef<HTMLInputElement>(null)
const villeRegisterRef = useRef<HTMLInputElement>(null)
const telRegisterRef = useRef<HTMLInputElement>(null)


const handleSubmitRegister = async (e: React.FormEvent) => {
  e.preventDefault(); 
  
  const form = e.currentTarget as HTMLFormElement  // cette ligne nous permettra de reset les champs du formulaire une fois que l user sera connecté

  const email = emailRegisterRef.current?.value
  const mdp = mdpRegisterRef.current?.value
  const nom = nomRegisterRef.current?.value
  const prenom = prenomRegisterRef.current?.value 
  const adresse = adresseRegisterRef.current?.value 
  const cp = cpRegisterRef.current?.value 
  const ville = villeRegisterRef.current?.value 
  const telephone = telRegisterRef.current?.value 


  console.log(email, mdp, nom, prenom, adresse, cp, ville, telephone )

 
    const result = loginSchema.safeParse({
      //    A ADAPTER
    })

    if(!result.success) {
      alert("les formats des données sont incorrects")
      return; 
    } else {
      console.log("les données entrées sont correctes")
    }

  try {
    const response = await fetch ("api/auth/login", {
      method: "POST", 
      headers: {
        'Content-Type': "application/json"
      }, 
      body: JSON.stringify({email, mdp}), 
      credentials : "include" // ????? a checker car le login est pas créé on s'enregistre juste on prepare le navigateur a accepter un cookie onlyHTTP dans la réponse 
    })

    if(!response.ok) {
      throw new Error("Identifiants invalides")
     }

     const data = await response.json();
     console.log( "messsage:", data.message, data.data ) // A ADAPTER AU BACK !!! 
     alert("Vous etes bien connecté !");

     // ici il, on reset le formulaire: 
     form.reset(); 

     return; 
     
  } catch (error) {
    console.error("Erreur serveur: ", error); 
    alert ("Echec lors de la connexion , verifiez vos identifiants")
  }
  
}






  return (
    <div
        className="flex flex-col items-center justify-center bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center h-full "> 

    {/* FORM LOGIN     */}
        <div
            className="formLogin flex flex-col justify-center mt-10 text-center  border-slate-300  border-2 h-[40vh] bg-[url('/fond/fondArtCommerceRose.png')] bg-cover bg-center rounded-sm">
                <h2
                    className="font-boogaloo text-2xl text-slate-700 mt-2 ">
                      Se Connecter: 
                </h2>
                        <form className="flex flex-col font-rubik p-4"
                              onSubmit={handleSubmitLogin}>
                    

                        {/* Champ email:  */}
                        <label htmlFor="emailLogin"
                            className="text-center">
                               Adresse email:
                        </label>
                        <input 
                            className="border-2 border-slate-200 rounded-md mb-2"
                            type="text"
                            id="emailLogin"
                            ref={emailLoginRef}
                            required
                            />


                        {/* Champ mot de passe:  */}
                        <label htmlFor="mdpLogin"
                            className="text-center">
                               Mot de passe:
                        </label>
                        <input 
                            className="border-2 mb-4 border-slate-200 rounded-md"
                            type="password"
                            id="mdpLogin"
                            ref={mdpLoginRef}
                            required
                            />

                      
                        
                        <button
                          className="bg-slate-500 h-[40px] rounded-md text-white font-boogaloo text-xl mb-2"> 
                            Valider 
                        </button>

                        <p
                          className="underline font-rubik">
                            mot de passe oublié
                        </p>
                
                </form>

        </div>


   {/* FORM REGISTER     */}  

        <div
            className="formRegister flex flex-col justify-center mt-10 text-center  border-slate-300  border-2 h-[90vh] bg-[url('/fond/fondArtCommerceRose.png')] bg-cover bg-center rounded-sm mb-10">
                <h2
                    className="font-boogaloo text-2xl text-slate-700 ">
                      S'enregistrer : 
                </h2>
                        <form 
                            className="flex flex-col font-rubik p-4"
                            onSubmit={handleSubmitRegister}>
                    

                        {/* Champ email:  */}
                        <label htmlFor="emailRegister"
                            className="text-center">
                               Adresse email:
                        </label>
                        <input 
                            className="border-2 border-slate-200 rounded-md mb-2"
                            type="text"
                            id="emailRegister"
                            ref={emailRegisterRef}
                            required
                            />


                        {/* Champ mot de passe:  */}
                        <label htmlFor="mdpRegister"
                            className="text-center">
                               Mot de passe:
                        </label>
                        <input 
                            className="border-2 mb-2 border-slate-200 rounded-md"
                            type="password"
                            id="mdpRegister"
                            ref={mdpRegisterRef}
                            required
                            />


                        {/* Champ confirmer le mot de passe:  */}
                        <label htmlFor="mdpRegisterCheck"
                            className="text-center">
                              Confirmer le mot de passe:
                        </label>
                        <input 
                            className="border-2 mb-2 border-slate-200 rounded-md"
                            type="password"
                            id="mdpRegisterCheck"
                            required
                            />


                        {/* Champ nom :  */}
                        <label htmlFor="nomRegister"
                            className="text-center">
                               Nom:
                        </label>
                        <input 
                            className="border-2 mb-2 border-slate-200 rounded-md"
                            type="text"
                            id="nomRegister"
                            ref={nomRegisterRef}
                            required
                            />


                        {/* Champ prénom:  */}
                        <label htmlFor="prenomRegister"
                            className="text-center">
                               Prénom:
                        </label>
                        <input 
                            className="border-2 mb-4 border-slate-200 rounded-md"
                            type="text"
                            id="prenomRegister"
                            ref={prenomRegisterRef}
                            required
                            />


                          {/* Champ adresse de livraison :  */}
                          <label htmlFor="adresseRegister"
                            className="text-center">
                               Adresse de livraison:
                        </label>
                        <input 
                            className="border-2 mb-4 border-slate-200 rounded-md"
                            type="text"
                            id="adresseRegister"
                            ref={mdpRegisterRef}
                            required
                            />


                        {/* Champ code postal:  */}
                        <label htmlFor="cpRegister"
                            className="text-center">
                               Code postal:
                        </label>
                        <input 
                            className="border-2 mb-4 border-slate-200 rounded-md"
                            type="text"
                            id="cpRegister"
                            ref={cpRegisterRef}
                            required
                            />


                        {/* Champ Ville :  */}
                        <label htmlFor="villeRegister"
                            className="text-center">
                               Ville :
                        </label>
                        <input 
                            className="border-2 mb-4 border-slate-200 rounded-md"
                            type="text"
                            id="villeRegister"
                            ref={villeRegisterRef}
                            required
                            />

                  
                        {/* Champ Téléphone:  */}
                        <label htmlFor="telRegister"
                            className="text-center">
                               Téléphone:
                        </label>
                        <input 
                            className="border-2 mb-4 border-slate-200 rounded-md"
                            type="text"
                            id="telRegister"
                            ref={telRegisterRef}
                            required
                            />
                        
                        <button
                          className="bg-slate-500 h-[40px] rounded-md text-white font-boogaloo text-xl mb-2"> 
                            Valider 
                        </button>
  
                </form>

        </div>
        
    </div>
  )
}

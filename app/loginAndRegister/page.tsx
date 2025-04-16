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





export default function pageLoginRegister() {

// Code pour gérer la logique du form LOGIN : ------------------------------------//
  
  const emailLoginRef =  useRef<HTMLInputElement>(null)
  const mdpLoginRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
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


  return (
    <div
        className="flex flex-col items-center justify-center bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center h-[100vh] "> 
        
        <div
            className="formLogin flex flex-col justify-center mt-10 text-center  border-slate-300  border-2 h-[30vh] bg-[url('/fond/fondArtCommerceRose.png')] bg-cover bg-center rounded-sm">
                <h2
                    className="font-boogaloo text-2xl text-slate-700 mt-2 ">
                      Se Connecter: 
                </h2>
                        <form className="flex flex-col font-rubik p-4"
                              onSubmit={handleSubmit}>
                    
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
        
        <div
            className="formRegister flex flex-col justify-center mt-10 text-center  border-slate-300  border-2 h-[55vh] bg-[url('/fond/fondArtCommerceRose.png')] bg-cover bg-center rounded-sm mb-10">
                <h2
                    className="font-boogaloo text-2xl text-slate-700 ">
                      S'enregistrer : 
                </h2>
                        <form className="flex flex-col font-rubik p-4">
                    
                        {/* Champ email:  */}
                        <label htmlFor=""
                            className="text-center">
                               Adresse email:
                        </label>
                        <input 
                            className="border-2 border-slate-200 rounded-md mb-2"
                            type="text"
                            />

                        {/* Champ mot de passe:  */}
                        <label htmlFor=""
                            className="text-center">
                               Mot de passe:
                        </label>
                        <input 
                            className="border-2 mb-2 border-slate-200 rounded-md"
                            type="text"
                            />

                        {/* Champ confirmer le mot de passe:  */}
                        <label htmlFor=""
                            className="text-center">
                              Confirmer le mot de passe:
                        </label>
                        <input 
                            className="border-2 mb-2 border-slate-200 rounded-md"
                            type="text"
                            />
                        {/* Champ nom :  */}
                        <label htmlFor=""
                            className="text-center">
                               Nom:
                        </label>
                        <input 
                            className="border-2 mb-2 border-slate-200 rounded-md"
                            type="text"
                            />

                        {/* Champ prénom:  */}
                        <label htmlFor=""
                            className="text-center">
                               Prénom:
                        </label>
                        <input 
                            className="border-2 mb-4 border-slate-200 rounded-md"
                            type="text"
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
        
    </div>
  )
}

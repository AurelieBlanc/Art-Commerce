// Code pour les imports : ----------------------------------------------------------------------------------------------------------------------//
"use client" // composant éxécuté coté client
import { useRef } from "react"; 






// Code pour retourner le composant Login & Register : ------------------------------------------------------------------------------------------//
export default function pageLoginRegister() {


// Code pour gérer la logique du form LOGIN : ----------------------------------------------------------------------------------------------------//
  const emailLoginRef =  useRef<HTMLInputElement>(null)
  const mdpLoginRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 

    const email = emailLoginRef.current?.value
    const mdp = mdpLoginRef.current?.value

    console.log(email, mdp)

    try {
      const response = await fetch ("api/auth/login", {
        method: "POST", 
        headers: {
          'Content-Type': "application/json"
        }, 
        body: JSON.stringify({email, mdp})
      })
  
      if(!response.ok) {
        throw new Error("Identifiants invalides")
       }
  
       const data = await response.json(); 
       alert("Vous etes bien connecté !");

       // ici il, faudra qu'on reset le formulaire: 
       const form = e.currentTarget as HTMLFormElement 
       form.reset(); 
       
    } catch (error) {
      console.error("Erreur serveur: ", error); 
      alert ("Echec lors de la connexion , verifiez vos identifiants")
    }
    


      


  }





// Code pour gérer la logique du form REGISTER : ----------------------------------------------------------------------------------------------------//


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
                            type="text"
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

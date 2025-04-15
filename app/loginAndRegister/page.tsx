// Code pour les imports : ----------------------------------------------------------------------------------------------------------------------//
"use client" // composant éxécuté coté client







// Code pour retourner le composant Login & Register : ------------------------------------------------------------------------------------------//
export default function page() {
  return (
    <div
        className="flex justify-center bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center h-[50vh] "> 
        
        <div
            className="formLogin flex flex-col justify-center mt-10 text-center  border-slate-300  border-2 h-[30vh] bg-[url('/fond/fondArtCommerceRose.png')] bg-cover bg-center rounded-sm">
                <h2
                    className="font-boogaloo text-2xl text-slate-700 mt-2 ">
                      Se Connecter: 
                </h2>
                        <form className="flex flex-col font-rubik p-4">
                    
                        {/* Champ email:  */}
                        <label htmlFor=""
                            className="text-center">
                               Email:
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

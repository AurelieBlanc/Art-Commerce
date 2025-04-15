// Code pour les imports : ----------------------------------------------------------------------------------------------------------------------//
"use client" // composant éxécuté coté client







// Code pour retourner le composant Login & Register : ------------------------------------------------------------------------------------------//
export default function page() {
  return (
    <div
        className="flex justify-center"> 
        
        <div
            className="formLogin flex flex-col justify-center mt-10 text-center border-pink-900 border">
                <h2
                    className="font-sedgwick text-xl text-pink-900">Se Connecter: </h2>
                        <form className="flex justify-center items-center flex-col">
                    
                        {/* Champ email:  */}
                        <label htmlFor=""
                            className="text-center">
                               Email:
                        </label>
                        <input 
                            className="border border-pink-900"/>


                
                </form>

        </div>
        
    </div>
  )
}

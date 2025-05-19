// Code pour les imports : ----------------------------------------------- //
"use client"

import { useSearchParams, useRouter } from "next/navigation"; 
import { z } from "zod"; 
import { useState, useEffect } from "react"; 
import { FaTiktok } from "react-icons/fa";


// Code pour les typages : ------------------------------------------------ //
interface formPassword {
    password: string, 
    confirmPassword: string
}




// Code pour le schéma du password: -------------------------------------------- //
export const passwordSchema = z.object({
    password: z.string()
    .min(5, { message: "le mot de passe doit contenir au moins 5 caractères"}) 
    .regex(/[a-z]/, { message: "le mot de passe doit contenir au moins une lettre minuscule"})
    .regex(/[A-Z]/, { message: "le mot de passe doit contenir au moins une lettre majuscule"})
    .regex(/[0-9]/, { message: "le mot de passe doit contenir au moins un chiffre"})
    .regex(/[^a-zA-Z0-9]/, { message: "le mot de passe doit contenir au moins un caractère spécial"}), 
}); 



export default function page() {
// Code pour déclarer les outils ou states locaux : ---------------------------------- //
    const searchParams = useSearchParams(); 

    const router = useRouter(); 

    const [ email, setEmail ] = useState<string>(""); 

    const [ formPassword, setFormPassword ] = useState<formPassword>({
        password: "", 
        confirmPassword: "", 
    }); 



// Code pour aller chercher le token en URL (et l'email dedans qu'on implémentera dans mon state email pour le back); si pas de token, alors on renverra sur la page loginAndRegister : //
    const token = searchParams?.get("token"); 

    useEffect(()=> {

        if(token && typeof token === "string") {
        try {
            const decodedToken = JSON.parse(atob(token.split(".")[1])); 
            setEmail(decodedToken.email); 
        } catch(error) {
            console.error("Token invalide: ", error); 
            router.push("/loginAndRegister")
        }
    } else {
        return router.push("loginAndRegister"); 
    }
        
    }, [token]); 


// Code pour changer les valeurs du stat formPassword : ------------------------------- //
function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target; 

    setFormPassword ((prevState) => ({
            ...prevState, 
            [name] : value, 
    })); 
}; 
    



// Code pour soumettre le nouveau form : -------------------------------------------- //
async function submitNewPassword (event: React.FormEvent<HTMLFormElement> ) {
    event.preventDefault(); 



// dans un premier temps, on va verifier que les passwords coïncident bien : ----------- //
    if(formPassword.password !== formPassword.confirmPassword) {
        alert ("les mots de passe ne correspondent pas"); 
        return; 
    }


// Ensuite on va vérifier le format du password : ------------------------------------- //
    const result = passwordSchema.safeParse({
        password: formPassword.password
    })

    if(!result.success) { 
        const errorMessages = result.error.errors.map( err => err.message ).join("\n")
        alert("Erreurs dans le mot de passe : \n" + errorMessages) // le \n ici sert à sauter une première ligne apres le titre :)
        return; 
    } else {
        alert("le nouveau mot de passe est correct")
    }


// Maintenant qu'on a procédé aux différentes vérifs, on va pouvoir faire l'appel API : //
    try {
            if(!token || !email) {
                return alert("email ou lien invalide")
            }; 

        const response = await fetch("/api/password/reset", {
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            }, 
            body: JSON.stringify({
                email: email, 
                mdp: formPassword.password, 
                token: token
            })           
        }); 

        const data = await response.json(); 

        if(!response.ok) {
            throw new Error(data.message || "Erreur lors de la réinitialisation")
        }

        alert ("Le mot de passe a été modifié avec succès"); 

        setFormPassword ({
            password: "", 
            confirmPassword: ""
        })

    


    } catch(error) {
        console.error("Erreur pendant l'appel API : ", error); 
        alert("Erreur lors de la réinitialisation du mot de passe")
    }

}






// Code pour retourner le composant JSX : ----------------------------------- //
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center flex justify-center">
        <div
            className="">
            <h2
                className="font-boogaloo text-2xl text-slate-800 mt-8 mb-4 w-[50%] mx-auto text-center">
                Veuillez entrer votre nouveau mot de passe pour le réinitialiser:
            </h2>
            <form
                className="flex flex-col items-center"
                onSubmit={submitNewPassword}>
                <label htmlFor="password"
                    className="mt-4 font-rubik font-bold mb-1">
                    Nouveau mot de passe :
                </label>
                <input type="password"
                    className="rounded-lg"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={formPassword.password} 
                    />

                <label htmlFor="confirmPassword"
                    className="mt-4 font-rubik font-bold mb-1">
                    Confirmation du mot de passe :
                </label>
                <input type="password"
                    className="rounded-lg"
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={formPassword.confirmPassword} />
                <button
                    className="mt-6 w-[250px] h-[60px] bg-slate-800 text-white font-boogaloo text-xl mb-10 rounded-lg shadow-xl">
                    Valider le nouveau mot de passe     
                </button>
            </form>
        </div>
    </div>
  )
}

// Code pour les imports : -----------------------------------------------------//
import { create } from "zustand"; 



interface Store {
    isAuthenticated: boolean; 
    role: string | null; 
    id: number | null; 

    setAuthenticated: (authData: { isAuthenticated: boolean; role: string; id: number}) => void; 
}


const useStore = create <Store>((set) => ({
    isAuthenticated: false, 
    role: null, 
    id: null,  // valeur par défaut

    setAuthenticated: (authData) => {
        set(()=> ({
            isAuthenticated: authData.isAuthenticated, 
            role: authData.role, 
            id: authData.id, 
        }))
    }
})); 

export default useStore; 

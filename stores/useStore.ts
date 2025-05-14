// Code pour les imports : ---------------------------------------------------- //
import { create } from "zustand"; 


// Code pour les typages : ---------------------------------------------------- //
interface Store {
    isAuthenticated: boolean; 
    role: string | null; 
    id: number | null; 

    setAuthenticated: (authData: { isAuthenticated: boolean; role: string; id: number}) => void; 
}

interface ModalUpdateStore {
    isModalUpdateOpen: boolean
    toggleUpdateModal: () => void
}

interface ModalClientStore {
    isModalClientOpen : boolean
    toggleClientModal : () => void
}



// Code pour la gestion des states : ------------------------------------------ //
export const useStore = create <Store>((set) => ({
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


export const useModalUpdateStore = create<ModalUpdateStore>((set) => ({
    isModalUpdateOpen: false, 
    toggleUpdateModal: () => set((state) => ({ isModalUpdateOpen: !state.isModalUpdateOpen}))
}));


export const useModalClientStore = create<ModalClientStore>((set) => ({
    isModalClientOpen: false, 
    toggleClientModal: () => set((state) => ({ isModalClientOpen: !state.isModalClientOpen}))
}))




 
// Code pour les imports : -------------------------------------------- //
import Cookies from "js-cookie";


const PANIER_COOKIE_NAME = "panier"; 


export interface Panier {
    id: string
}



// Code pour les différentes fonctions permettant de manipuler le cookie du panier : 
export function getPanier(): Panier[] {
    const panier = Cookies.get(PANIER_COOKIE_NAME); 
    return panier ? JSON.parse(panier): []
}



// Fonction pour sauver le panier : -------------------------------------//
export function savePanier(panier: Panier[]) {
    Cookies.set(PANIER_COOKIE_NAME, JSON.stringify(panier), {expires: 7})
}



// Fonction pour ajouter un produit au panier : ------------------------ //
export function addPanier(id: string) {
    const panier = getPanier();  // là on aura le panier retourné grâce à la fonction getPanier(); 

    const existingItem = panier.find(elem => elem.id === id)

    if(existingItem) {
        return; 
    } else {
        panier.push({id})
    }
    savePanier(panier); 
}



// Fonction pour enlever un produit du panier : -------------------------- //
export function removeFromPanier (id: string) {
    const updatedPanier = getPanier().filter(elem => elem.id !== id); 
    savePanier(updatedPanier); 
}



// Fonction pour supprimer le panier dans son integralité : --------------- //
export function deletePanier () {
    Cookies.remove(PANIER_COOKIE_NAME)
}



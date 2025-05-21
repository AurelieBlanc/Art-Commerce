// Code pour les imports : ------------------------------------------------- //
import Cookies from "js-cookie"; 


const PRODUITS_LIKES_NAME = "liked"




// Code pour les typages : ------------------------------------------------- //
export interface Liked {
    id: string
}





// Differentes fonctions qui vont nous permettre de manipuler les produits likés : //

// Fonction pour créer le cookie avec son nom, son contenu et sa date d'expiration : //
export function saveLikedListId(likedList: Liked[]) {
    Cookies.set(PRODUITS_LIKES_NAME, JSON.stringify(likedList), {expires: 7})
} // la likedList sera un tableau d'id des produits likés




// Fonction pour récupérer le cookie (et son contenu) de la liste produits likés : //
export function getLikedListId(): Liked[] {
    const likedList = Cookies.get(PRODUITS_LIKES_NAME); 
    return likedList ? JSON.parse(likedList): []  // on retournera soit un tableau des ids des produits likés, soit un tableau vide 
}




// Fonction pour ajouter un produit à la liste : ---------------------------- //
export function addLikedId(id: string) {
    const likedList = getLikedListId(); 

    const existingItem = likedList.find(elem => elem.id === id)

    if(existingItem) {
        return; 
    } else {
        likedList.push({id})
    }

    saveLikedListId(likedList); 
}



// Fonction pour enlever un produit de la liste : ------------------------------- //
export function removeFromLikedList(id: string) {
    const updateList = getLikedListId().filter(elem => elem.id !== id); 

    saveLikedListId(updateList); 
}




//Fonction pour supprimer la liste des produits likés dans son intégralité : //
export function deleteLikedListId() {
    Cookies.remove(PRODUITS_LIKES_NAME); 
}
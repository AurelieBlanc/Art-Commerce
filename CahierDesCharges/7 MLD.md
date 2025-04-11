# MLD :

## Client:
id_client  
mail  
mdp_hash  
role
prenom  
nom  
adresse_livraison  
cp_livraison  
ville_livraison  
telephone  
date_creation  


## Session
id_session  
token  
date_connexion  
date_deconnexion  
is_active  
#id_client  
#id_admin


## Admin 
id_admin  
mail  
nom  
prenom  
mdp_hash  
role  
dernier_login


## Produit
id_produit  
nom   
description  
prix  
image  
date_creation  
is_active  


## Produit_Panier
id_produit_panier  
#id_panier  
#id_produit



## Categorie
id_categorie  
nom  
date_creation


## Produit_Categorie
id_produit_categorie  
#id_categorie  
#id_produit


## Panier
id_panier  
date_creation  
#id_client


## Commande
id_commande  
date_commande  
statut  
total  
moyen_paiement  
adresse_livraison  
cp_livraison   
ville_livraison   
#id_client   
#id_admin  


## Produit_Commande
id_produit_commande  
#id_commande  
#id_produit
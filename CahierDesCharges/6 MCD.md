# Tables :

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

## Catégorie
id_categorie
nom
date_creation

## Panier
id_panier  
date_creation

## Commande
id_commande
date_commande
statut
total
moyen_paiement
adresse_livraison
cp_livraison 
ville_livraison

<br>
<br>

# Lien vers Mocodo : 
https://www.mocodo.net/


## Texte pour générer le Mocodo: 
CREER, 1N CLIENT, 11 SESSION
CLIENT: id_client, mail, mdp_hash, role, prenom, nom, adresse_livraison, cp_livraison, ville_livraison, telephone, date_creation
CONSTITUER, 0N CLIENT, 11 PANIER
PANIER: id_panier, date_creation
CONTENIR, 1N PANIER, 0N PRODUIT

SESSION: id_session, token, date_connexion, date_deconnexion, is_active
GENERER, 0N CLIENT, 11 COMMANDE
COMMANDE: id_commande, date_commande, statut, total, moyen_paiement, adresse_livraison, cp_livraison, ville_livraison
COMPORTER, 1N COMMANDE, 0N PRODUIT
PRODUIT: id_produit, nom, description, prix, image, date_creation, is_active

DECONNECTER, 11 SESSION, 0N ADMIN
ADMIN: id_admin, mail, nom, prenom, mdp_hash, role, dernier_login
ACTUALISER, 0N ADMIN, 11 COMMANDE
CATEGORIE: id_categorie, nom, date_creation
POSSEDER, 0N CATEGORIE,  0N PRODUIT

## lien MOCODO: 

https://www.mocodo.net/?mcd=eNqVUsGOgyAQvfMVfICH7XVvRklD0qJRezZEJu1kFQzQpvv3i6iNdveyl4EZ5c17byarGKsSehA0O3EmmnA90JrVNS8EmUufFFXb9QjaJ3SQ2IeoxvYm3S2h1vSQ0NGCNkNCY5DKgnPQ9viwEp3RCe3GbfbAvt999tDDeDM6ICnpoe0sSI9Gk6wQdcOby0TxY0exTAVnFZmPyHCUGsH-gdAwwWeJ898RqqyK_MIbQhatEcIF3hgJmS_QK5TRGp6xHHMFmwq6VnYeH0COTLDqN8-sOJ9TkTOyXmY3zTBIrV56X6nz0t_9RMDLyWfzDTooQxii-_-1dupaFlWzjnjhsHNgOWcPrVF39MsgFbjO4uij0tHiM-gd5PV9SlsXSM6C44Jlc8vXKsWOaX7mgsQYu0k1oF5XKnZc9-h9vxTYabhtb66oSZo1l_TE68XtCPhmdtqwY1Hxxe3A9moswqprtyFlUdcsXye3Pkzo1qMf--8DQw==



## schéma généré par MOCODO: 

![alt text](image-1.png)
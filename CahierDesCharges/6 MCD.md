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
COMPORTER, 1N COMMANDE, 01 PRODUIT
PRODUIT: id_produit, nom, description, prix, image, date_creation, is_active

DECONNECTER, 11 SESSION, 0N ADMIN
ADMIN: id_admin, mail, nom, prenom, mdp_hash, role, dernier_login
ACTUALISER, 0N ADMIN, 11 COMMANDE
CATEGORIE: id_categorie, nom, date_creation
POSSEDER, 0N CATEGORIE,  0N PRODUIT


## lien MOCODO: 

https://www.mocodo.net/?mcd=eNqVUk2PgyAQvfMr-AEette9GSUNSYtG7dkQmbSTVTBAm-6_X8SP2O5e9jIwo7x5781kFWNVQg-CZifORBOuB1qzuuaFIHPpk6Jqux5B-4QOEvsQ1djepLsl1JoeEjpa0GZIaAxSWXAO2h4fVqIzOqHduM8e2Pcvnz30MN6MDkhKemg7C9Kj0SQrRN3w5jJR_HihWKaCs4rMR2Q4So1g_0BomOCzxPnvCFVWRX7hDSGL1gjhAm-MhMwX6BXKaA3PWI65gl0FXSs7jw8gRyZY9ZtnVpzPqcgZWS-zm2YYpFab3i11Xvq7nwh4OflsvkEHZQhDdP-_1k5dy6Jq1hEvHALJw-bAcs4eWqPu6JdBKnCdxdFHpaPFZ9A7yOv7lPYukJwFxwXL5pbbKkVb0vzMBYkxdpNqQL2uVOy47tH7fimw03Db3lxRkzRrLumJ14vbEfDN7LRhx6Lii9uB7dVYhFXXy4aURV2zfJ3c-jCh-y35Adm5AyY=


## schéma généré par MOCODO: 

![alt text](imageMocodo.png)
# Spécifications fonctionnelles (fonctionnalités du projet)

## MVP :

| En tant que ...| Je veux ...| Afin de ... | Via quel moyen ?|
|:---------------|:-----------|:------------|:----------------|
| <mark> UTILISATEUR ||||
| utilisateur | consulter le site | voir si des produits répondent à mes besoins | la consultation simple du site |
| utilisateur | créer un compte | pouvoir acheter des produits et consulter mes commandes | la page création de compte |
| utilisateur | me connecter sur mon compte | pouvoir accéder à mes informations et acheter des produits | un bouton ou une icone de connexion puis un form à remplir et valider |
| utilisateur | réinitialiser mon mot de passe | pouvoir réinitialiser mon mot de passe en cas d'oubli | un lien cliquable "mot de passe perdu" |
| utilisateur | déconnecter de mon compte | sécuriser ma session ou changer de compte | un bouton ou une icone de deconnexion |
| utilisateur | ajouter des produits au panier | calculer le total et préparer mon achat | bouton sur la page produit et/ou accès à la page panier |
| utilisateur | consulter mon panier | voir mon total et mes frais de ports | la page panier |
| utilisateur | valider mon panier | finaliser ma sélection de produits | bouton "Valider" sur la page panier |
| utilisateur | payer mes produits | completer mon achat | la page paiement |
| utilisateur | valider mon paiement | confirmer l'achat | un bouton de validation de paiement |
| utilisateur | être rédirigé sur la page principale après avoir finalisé la commande | pour une expérience utilisateur fluide | une redirection automatique une fois que la commande a été finalisée |
| utilisateur | contacter le service client | poser une question, faire remonter un probleme | une page contact avec un formulaire de contact |





| En tant que ...| Je veux ...| Afin de ... | Via quel moyen ?|
|:---------------|:-----------|:------------|:----------------|
|<mark> ADMIN||||
| admin | réinitialiser le mot de passe de mon compte | acceder à mon compte en cas d'oubli | un lien cliquable "mot de passe perdu" |
| admin | arreter les sessions de certains utilisateurs | controler les accès pour + de sécurité | la page dashboard  |
| admin | consulter les statistiques de ventes | suivre l'évolution des ventes | la page dashboard |
| admin | suivre les commandes | préparer les commandes | la page dashboard |
| admin | actualiser les commandes | renseigner les statuts de commandes | la page dashboard |
| admin | ajouter un produit | ajouter un produit en vente | la page produits, avec une petite icone + |
| admin | modifier un produit | modifier un produit en vente | la fiche produit, grace a une petite icone crayon |
| admin | supprimer un produit | supprimer un produit en vente | la fiche produit, grace a une petite icone poubelle |






## Post-MVP :

| En tant que ...| Je veux ...| Afin de ... | Via quel moyen ?|
|:---------------|:-----------|:------------|:----------------|
| <mark> UTILISATEUR||||
| utlisateur | liker un produit | sauvegarder les produits likés pour plus tard peut-etre ? | une icone coeur cliquable sur la page produit |
| utlisateur | envoyer une demande de commande personnalisée | d'obtenir un produit 100% personnalisé selon mes attentes | une page ou une fenêtre spéciale pour les commandes personnalisées  |
| utlisateur | déposer un commentaire | de faire un retour d'expérience | une page speciale pour déposer un commentaire  |
| utlisateur | filtrer les produits par catégories | faciliter la navigation | un systeme de filtres en haut de la page produit  |



| En tant que ...| Je veux ...| Afin de ... | Via quel moyen ?|
|:---------------|:-----------|:------------|:----------------|
|<mark> ADMIN||||
| admin | créer des catgories | pouvoir filtrer les produits | la page dashboard |
| admin | rajouter des catégories aux produits | filtrer les produits par cétegorie pour les retrouver + vite | lorsqu'on ajoute ou modifie un produit |
| admin | voir quels sont les utilisateurs connectés sur leurs comptes grace aux sessions server | surveiller l'activité du site | la page dashboard |






## Spécifications Techniques (liste des technologies utilisées) :
- Front-end et Back-end : Next.js, 
- Front-end: Tailwind.Css, React.js, 
- Back-end: Base de données avec PostgreSQL, ORM avec Prisma, Next Auth pour la sécurité

* Outils: Trello, GitHub, Mocodo, Canva, VSC. 
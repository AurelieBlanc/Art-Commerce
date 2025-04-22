# Routes Front-End:

|Routes |Description |
|:-------:|------------|
|  /   | Page d'Accueil avec tous les produits |
| /produits/[idProduit] | Page détail d'un produit selon son id |
| /compte | Page de connexion ou de création de compte (même page) ou si utilisateur connecté, l'interface change avec une page de compte avec ses infos persos |
| /compte/commandes | Page avec l'historique de commandes d'un compte client (on recupèrera l'id client via le cookie onlyHTTP) |
| /compte/commandes/[idCommande] | Page avec le détail d'une commande|
| /panier/[idPanier] | Page panier spécifique selon l'id du panier |
| /panier/[idPanier]/livraison | Page livraison spécifique selon le panier (adresse de livraison préremplie si utilisateur connecté) |
| /panier/[idPanier]/livraison/paiement | Page paiement spécifique selon le panier |
| /qui-sommes-nous | Page de présentation |
| /contact | Page de formulaire de contact |
| /conditions-generales-de-vente | Page des conditions générales de ventes |
| /dashboard-admin| Page dashboard adin (accessible et visible sur la barre de navigation que si l'admin est connecté) |

# Routes Back :

|Routes | Description | Méthode |
|-------|-------------|---------|
| <mark> Routes Admin | | |
| /admin/getInfos.ts | recuperer les infos de l'admin | GET |
| /admin/getAllOrderStatus.ts | recuperer tous les statuts de commande pour le dashboard de l'admin | GET |
| /admin/updateOneOrderStatus/[id].ts | recuperer un statut de commande pour l'admin puisse le mettre à jour | UPDATE |
| <mark> Routes Auth | | |
| /auth/login.ts | pour que le client ou l'admin puisse se connecter | POST |
| /auth/logout.ts | pour que le client ou l'admin puisse se déconnecter | POST |
| /auth/checkAuth.ts | pour vérifier au montage de l'appli si le client ou l'admin est connecté | GET |
| <mark> Routes Clients | | |
| /clients/register.ts | pour q'un nouveau client s'enregistre | POST |
| /clients/getInfosCustomer/[id].ts | pour récupérer les infos d'un client selon son id | GET |
| /clients/updateInfosCustomer/[id].ts | pour modifier les infos d'un client selon son id | UPDATE ou PUT |
| /clients/deleteInfosCustomer/[id].ts | pour supprimer un compte client selon son id | DELETE |
| <mark> Routes Commandes | | |
| /commandes/getAllOrders.ts | pour récupérer toutes les commandes | GET |
| /commandes/getOneOrder/[id].ts | pour récupérer les infos d'une commande en particulier | GET |
| /commandes/createOrder.ts | pour créer une nouvelle commande | POST |
| <mark> Routes Contact | | |
| /contact/sendMessage.ts | pour qu'un visiteur ou un client puisse soumettre une demande de contact | POST |
| <mark> Routes paniers  | | |
| /paniers/getArticles.ts | pour récupérer tous les articles d'un panier (dans le but de créer une commande) | GET |
| <mark> Routes password  | | |
| /password/changePassword.ts | pour changer un mot de passe connu | POST |
| /password/resetPassword.ts | pour réinitialiser un mot de passe perdu | POST |
| <mark> Routes produits  | | |
| /produits/getAllProducts.ts | pour récupérer tous les produits de la BDD | GET |
| /produits/getOneProduct/[id].ts| pour récupérer un produit selon son id | GET |
| /produits/createOneProduct | pour créer un produit | POST |
| /produits/deleteOneProduct/[id].ts| pour supprimer un produit selon son id | DELETE |
| /produits/updateOneProduct/[id].ts| pour modifier un produit selon son id | UPDATE ou PUT |
| <mark> Routes sessions  | | |
| /sessions/getAllActiveSessions.ts | pour récupérer toutes les sessions actives | GET |
| /sessions/deleteAllSessions.ts| pour supprimer toutes les sessions actives | DELETE |
| /sessions/deleteOneSession/[id].ts| pour supprimer une session selon son id | DELETE |





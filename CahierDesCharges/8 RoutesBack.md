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
| /auth/chekAuth.ts | pour vérifier au montage de l'appli si le client ou l'admin est connecté | GET |

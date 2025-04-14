-- CreateTable
CREATE TABLE "Client" (
    "id_client" SERIAL NOT NULL,
    "mail" TEXT NOT NULL,
    "mdp_hash" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "adresse_livraison" TEXT NOT NULL,
    "cp_livraison" TEXT NOT NULL,
    "ville_livraison" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id_client")
);

-- CreateTable
CREATE TABLE "Session" (
    "id_session" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "date_connexion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_deconnexion" TIMESTAMP(3),
    "is_active" BOOLEAN NOT NULL,
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_client" INTEGER NOT NULL,
    "id_admin" INTEGER,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id_session")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id_admin" SERIAL NOT NULL,
    "mail" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "mdp_hash" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "dernier_login" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id_admin")
);

-- CreateTable
CREATE TABLE "Produit" (
    "id_produit" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "prix" DECIMAL(10,2) NOT NULL,
    "image" TEXT NOT NULL,
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_active" BOOLEAN NOT NULL,
    "id_commande" INTEGER,

    CONSTRAINT "Produit_pkey" PRIMARY KEY ("id_produit")
);

-- CreateTable
CREATE TABLE "Produit_Panier" (
    "id_produit_panier" SERIAL NOT NULL,
    "id_panier" INTEGER NOT NULL,
    "id_produit" INTEGER NOT NULL,

    CONSTRAINT "Produit_Panier_pkey" PRIMARY KEY ("id_produit_panier")
);

-- CreateTable
CREATE TABLE "Categorie" (
    "id_categorie" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Categorie_pkey" PRIMARY KEY ("id_categorie")
);

-- CreateTable
CREATE TABLE "Produit_Categorie" (
    "id_produit_categorie" SERIAL NOT NULL,
    "id_categorie" INTEGER NOT NULL,
    "id_produit" INTEGER NOT NULL,

    CONSTRAINT "Produit_Categorie_pkey" PRIMARY KEY ("id_produit_categorie")
);

-- CreateTable
CREATE TABLE "Panier" (
    "id_panier" SERIAL NOT NULL,
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_client" INTEGER NOT NULL,

    CONSTRAINT "Panier_pkey" PRIMARY KEY ("id_panier")
);

-- CreateTable
CREATE TABLE "Commande" (
    "id_commande" SERIAL NOT NULL,
    "date_commande" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "statut" TEXT NOT NULL,
    "total" DECIMAL(10,2) NOT NULL,
    "moyen_paiement" TEXT NOT NULL,
    "adresse_livraison" TEXT NOT NULL,
    "cp_livraison" TEXT NOT NULL,
    "ville_livraison" TEXT NOT NULL,
    "id_client" INTEGER NOT NULL,
    "id_admin" INTEGER,

    CONSTRAINT "Commande_pkey" PRIMARY KEY ("id_commande")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_mail_key" ON "Client"("mail");

-- CreateIndex
CREATE UNIQUE INDEX "Session_token_key" ON "Session"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_mail_key" ON "Admin"("mail");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id_client") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_id_admin_fkey" FOREIGN KEY ("id_admin") REFERENCES "Admin"("id_admin") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produit" ADD CONSTRAINT "Produit_id_commande_fkey" FOREIGN KEY ("id_commande") REFERENCES "Commande"("id_commande") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produit_Panier" ADD CONSTRAINT "Produit_Panier_id_panier_fkey" FOREIGN KEY ("id_panier") REFERENCES "Panier"("id_panier") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produit_Panier" ADD CONSTRAINT "Produit_Panier_id_produit_fkey" FOREIGN KEY ("id_produit") REFERENCES "Produit"("id_produit") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produit_Categorie" ADD CONSTRAINT "Produit_Categorie_id_categorie_fkey" FOREIGN KEY ("id_categorie") REFERENCES "Categorie"("id_categorie") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produit_Categorie" ADD CONSTRAINT "Produit_Categorie_id_produit_fkey" FOREIGN KEY ("id_produit") REFERENCES "Produit"("id_produit") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Panier" ADD CONSTRAINT "Panier_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id_client") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id_client") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_id_admin_fkey" FOREIGN KEY ("id_admin") REFERENCES "Admin"("id_admin") ON DELETE SET NULL ON UPDATE CASCADE;

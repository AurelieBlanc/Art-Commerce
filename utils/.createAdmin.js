// Code pour les imports : -------------------------------------------------------------------------------------------------------------------//
const { PrismaClient } = require("@prisma/client");  
const bcrypt = require ("bcryptjs");

const prisma = new PrismaClient(); // on appelle une instance de Prisma




// Code pour créer l'admin avec les différents champs à remplir : ----------------------------------------------------------------------------------------//
async function createAdmin () {
    const mdp = "Admin868!!"; 
    const saltRounds = 10; 
    const mdpHashed = await bcrypt.hash(mdp, saltRounds); 
    const mail = "aurelieblanc86@gmail.com"

    const existingAdmin = await prisma.admin.findUnique({
        where: { mail }
    })

    if(existingAdmin) {
        console.log("Admin déja créé !!!!")
        return; 
    }


    const newAdmin = await prisma.admin.create({
        data: {
            mail, 
            nom: "Blanc", 
            prenom: "Aurélie", 
            mdp_hash: mdpHashed, 
            role: "admin", 
            dernier_login: new Date(0)
        }
    })


}

createAdmin(); 

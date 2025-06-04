// Code pour les imports : ------------------------------------------- //
import Link from "next/link"


export default function Page (){

// Code pour retourner le composant JSX : ----------------------------- //
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center text-slate-800 flex flex-col items-center">

        <div
            className="w-[80%] md:w-[30%] mx-auto mb-10">
                <h2
                    className="font-boogaloo text-3xl mt-8 text-center"> 
                    Mais qui est derrière ce projet ?  ... 
                </h2>
                     <p
                    className="font-rubik  text-center mt-4 mb-8">
                    Aurélie, pour vous servir ; je vous invite à découvrir mon portfolio et mes projets : 
                    <Link
                        className="underline ml-2 mr-2"
                        href="/https://portfolio-miss-white-dev-web.vercel.app/">
                        ici
                    </Link>
                    </p>

                <h2
                    className="font-boogaloo text-3xl mt-8 text-center mb-4"> 
                    Pourquoi ?  
                </h2>

                    <p
                        className="font-rubik text-center mb-6">
                        Le but de ce site e-commerce etait d'exercer mes compétences de A à Z : conception d'un projet, développement de celui-ci, et mise en ligne.   
                    </p>

                   

                    <p
                        className="font-rubik text-center mb-4 text-red-600 font-bold">
                        Tout a été réalisé de mon fait, les appels API, l'architecture, l'authentification / la sécurité, la BDD, le déploiement, etc.. avec le framework Next.JS. J'ai décidé, pour la sécurité (cookies onlyHTTP authToken, csrf, middlewares, schema de validation ZOD, etc etc) de ne pas la sous traiter par une bibliotheque externe type Next Auth: c'est un vrai choix personnel pour apprehender pleinement la logique du dev web et pouvoir switcher de langage facilement , si besoin est. 
                    </p>

                    <p
                        className="font-rubik text-center mb-8">
                        Aussi, j'ai conscience que des choses sont largement améliorables dans mon code notamment la refactorisation, l'idée ici etant de faire un code très "scolaire" pour avoir un mode d'emploi, un manuel explicite pour mes nombreux futurs projets à venir, et pour montrer la logique et la clarté (je l'espère) de mon code. Je ne mets pas de coté toutes les ameliorations que je peux apporter, sachant que je suis toujours en quête d'optimisation. 
                    </p>

                     <h2
                        className="font-boogaloo text-3xl mt-8 text-center mb-4"> 
                        Un site opérationnel 
                    </h2>

                    <p
                        className="font-rubik text-center mb-4">
                            
                            Le projet étant certes, fictif, mais bien opérationnel ; ce site e-commerce , bien que simple, est fonctionnel et permet de vous présenter quelques unes de mes compétences. 
                    </p>

                    <p
                        className="font-rubik text-center mb-10">
                             Contexte : Il simule la vente d'oeuvres d'arts fictives avec tout le process d'un site de vente; mise au panier ou en favoris, validation du panier, demande de connexion, validation  de la commande, paiement, etc...  
                    </p>

                     <p
                        className="font-rubik text-center font-bold text-red-700 text-xl">
                            Voici quelques quelques exemples de fonctionnalités développées : 
                    </p>

                    
                        

                            <ul
                                className="text-left w-[70%] mx-auto mt-4 font-bold  font-rubik">

                                <li
                                    className="list-disc text-center mb-4">
                                        Possibilité de créer un compte, puis de modifier ses informations de manière spontanée ou lors d'un process de commande
                                </li>
                                <li
                                    className="list-disc text-center mb-4">
                                        Possibilité de rajouter des produits au panier, les enlever, supprimer son panier...
                                </li>
                                <li
                                    className="list-disc text-center mb-4">
                                        Possibilité de rajouter des produits à la page favoris, les enlever, supprimer son panier...
                                </li>
                                
                                <li
                                    className="list-disc text-center mb-4">
                                        Possibilité de simuler des paiements en ligne via Stripe
                                </li>
                                <li
                                    className="list-disc text-center mb-4">
                                        Possibilité de consulter et suivre ses commandes 
                                </li>
                                <li
                                    className="list-disc text-center mb-10">
                                        Nombreuses fonctionnalités pour l'admin : créer, modifier ou supprimer un produit ; supprimer les sessions des clients pour un meilleur controle sécurité, rendre des produits inactifs, possibilité de modifier des commandes etc ...
                                </li>
                            </ul>  
                    

                    <p
                        className="font-rubik text-center mb-10 pt-2 font-bold text-red-700 text-xl">
                        Le mieux étant de tester par vous-même : soit en vous créant un compte , soit en me demandant des identifiants tests pour une connexion rapide.    
                    </p>

                    <h2
                        className="font-boogaloo text-3xl mt-8 text-center mb-2"> 
                        Simulation de paiements :
                    </h2>

                     <p
                        className="font-rubik text-center mb-6 pt-2">
                        Une fois que vous arriverez sur la page de reglement, vous pouvez rentrer ces infos :  
                        <br /> numéro de carte bancaire : 4242 4242 4242 4242
                        <br /> date d'expliration : 12/34
                        <br /> cryptrogramme: 567
                       <br /> pour le nom de la carte bancaire... n'importe lequel fera l'affaire !
                    </p>

                     <p
                        className="font-rubik text-center mb-6 pt-2">
                        Une fois que la commande fictive a été réglée, vous la verrez dans votre page récap de commandes, avec un statut (si tout s'est bien passé) "PAYEE, EN COURS DE PREPARATION" , et si le paiement (ou l'opération) a échoué, le statut de commande sera encore à "EN ATTENTE DE PAIEMENT".
                    </p>

                    <p
                        className="font-rubik text-center mb-6 pt-2">
                        Une démo pour toutes les fonctionnalités Admin est disponible sur demande. 
                    </p>

                    <p
                        className="font-rubik text-center mb-6 pt-2">
                       Pour me contacter : 
                       <Link
                        className="underline ml-4 font-bold"
                        href="/contact">
                            C'est par ici !
                       </Link>
                    </p>

                    <p
                       className="font-rubik text-center mb-6 pt-2">
                       Je suis ouverte à toute collaboration professionnelle, dans le developpement web, et capable de m'adapter et d'apprendre de nouveaux langages, en totale autonomie. J'ai intégré toute la logique grâce a mes nombreux projets réalisés en totale autonomie, en mettant l'accent sur la sécurité. Je continue bien sur de pratiquer avec les outils collaboratifs type GitHub pour etre opérationelle dans le cadre d'un projet en groupe. 
                       Disponible pour en discuter. 
                    </p>

    
        </div>
        
    </div>
  )
}

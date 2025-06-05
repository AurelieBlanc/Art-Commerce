// Code pour les imports : ------------------------------------------- //
import Link from "next/link"
import { PiSmileyWink } from "react-icons/pi"; // icone smiley : <PiSmileyWink />
import { GiSecretBook } from "react-icons/gi"; // icone book : <GiSecretBook />
import { PiArrowCircleRightDuotone } from "react-icons/pi"; // icone fleche : <PiArrowCircleRightDuotone />
import { LiaToolsSolid } from "react-icons/lia"; // import outils : <LiaToolsSolid />
import { GiMoneyStack } from "react-icons/gi"; // icone liasse de billets : <GiMoneyStack />
import { LuTestTubeDiagonal } from "react-icons/lu"; // icone tube à essai incliné : <LuTestTubeDiagonal />
import { RiWechatFill } from "react-icons/ri"; // icone bulles tchat : <RiWechatFill />

import Image from "next/image";






export default function Page (){

// Code pour retourner le composant JSX : ----------------------------- //
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center text-slate-800 flex flex-col items-center">

        <div
            className="w-[80%] md:w-[30%] mx-auto mb-10">
                <h2
                    className="font-boogaloo text-3xl mt-16 text-center"> 
                    Mais qui est derrière ce projet ?  ... 
                </h2>
                     <p
                        className="font-rubik  text-center mt-6 mb-16">
                        Aurélie alias Miss White 
                        <PiSmileyWink 
                            className="inline-block text-2xl ml-1 relative bottom-1"/> , 
                            pour vous servir ; je vous invite à découvrir mon portfolio et mes projets ici: 
                                <Link
                                    className="underline ml-2 mr-2"
                                    href="/https://portfolio-miss-white-dev-web.vercel.app/">
                                    <GiSecretBook 
                                        className="inline-block text-3xl"/>
                                </Link>
                    </p>

                <h2
                    className="font-boogaloo text-3xl mt-8 text-center mb-6"> 
                    Pourquoi ?  
                </h2>

                    <p
                        className="font-rubik text-center mb-6">
                        Le but de ce site e-commerce etait d'exercer mes compétences de A à Z : conception d'un projet, développement de celui-ci, et mise en ligne.   
                    </p>

                   

                    <p
                        className="font-rubik text-center mb-6 text-red-600 font-bold">
                        Tout a été réalisé de mon fait, les appels API, l'architecture, l'authentification / la sécurité, la BDD, le déploiement, etc.. avec le framework Next.JS. J'ai décidé, pour la sécurité (cookies onlyHTTP authToken, csrf, middlewares, schema de validation ZOD, etc etc) de ne pas la sous traiter par une bibliotheque externe type Next Auth: c'est un vrai choix personnel pour appréhender pleinement la logique du dev web et pouvoir switcher de langage facilement , si besoin est. 
                    </p>

                    <p
                        className="font-rubik text-center mb-16">
                        Aussi, j'ai conscience que des éléments sont largement améliorables dans mon code notamment la refactorisation; l'idée ici étant de faire un code très "scolaire" pour avoir un mode d'emploi, un manuel explicite pour mes nombreux futurs projets à venir, et pour montrer la logique et la clarté (je l'espère) de mon code, espacé et commenté. Je ne mets pas de coté toutes les améliorations que je peux apporter, sachant que je suis toujours en quête d'optimisation. 
                    </p>

                     <h2
                        className="font-boogaloo text-3xl mt-8 text-center mb-6">
                        <LiaToolsSolid 
                            className="text-3xl inline-block relative bottom-1 mr-2 text-red-700"/>
 
                        Un site opérationnel 
                    </h2>

                    <p
                        className="font-rubik text-center mb-6">
                            
                            Le projet étant certes, fictif, mais bien opérationnel ; ce site e-commerce , bien que simple, est fonctionnel et permet de vous présenter quelques-unes de mes compétences. 
                    </p>

                    <p
                        className="font-rubik text-center mb-16">
                             Contexte : Il simule la vente d'oeuvres d'arts fictives avec tout le process d'un site de vente; mise au panier ou en favoris, validation du panier, demande de connexion, validation  de la commande, paiement, etc...  
                    </p>


                     <h3
                        className="font-boogaloo text-3xl text-center text-red-700 mb-6">
                            Voici quelques quelques exemples de fonctionnalités développées : 
                    </h3>
                    
                            <ul
                                className="text-left w-[70%] mx-auto mt-4 font-bold  font-rubik">

                                <li
                                    className="text-center mb-6">
                                    <PiArrowCircleRightDuotone
                                        className="inline-block text-2xl mr-2 text-red-400"/>
                                        
                                        Créer un compte, puis modifier ses informations de manière spontanée ou lors d'un process de commande
                                </li>
                                <li
                                    className="text-center mb-4">
                                    <PiArrowCircleRightDuotone 
                                        className="inline-block text-2xl mr-2 text-red-500"/>

                                        Manipuler son panier : ajouter des produits, les enlever, supprimer son panier en intégralité...
                                </li>
                                <li
                                    className="text-center mb-4">
                                    <PiArrowCircleRightDuotone 
                                        className="inline-block text-2xl mr-2 text-red-600"/>

                                        Rajouter des produits à la page favoris, les enlever, les supprimer en intégralité...
                                </li>
                                
                                <li
                                    className="text-center mb-4">
                                    <PiArrowCircleRightDuotone 
                                        className="inline-block text-2xl mr-2 text-red-700"/>

                                        Simuler des paiements en ligne via Stripe
                                </li>
                                <li
                                    className="text-center mb-4">
                                    <PiArrowCircleRightDuotone 
                                        className="inline-block text-2xl mr-2 text-red-800"/>

                                    Consulter et suivre ses commandes 
                                </li>
                                <li
                                    className="text-center mb-16">
                                    <PiArrowCircleRightDuotone 
                                        className="inline-block text-2xl mr-2 text-red-900"/>

                                    Nombreuses fonctionnalités pour l'admin : créer, modifier ou supprimer un produit ; supprimer les sessions des clients pour un meilleur controle sécurité, rendre des produits inactifs, possibilité de suivre et modifier les statuts de commandes etc ...
                                </li>
                            </ul>  
                    

                    <p
                        className="font-rubik text-center mb-20 pt-2 font-bold text-red-700 text-xl">
                            <LuTestTubeDiagonal 
 
                                className="inline-block mr-2 text-2xl relative bottom-1 text-slate-800"/>

                        Le mieux étant de tester par vous-même : soit en vous créant un compte , soit en me demandant des identifiants tests pour une connexion rapide.    
                    </p>

                    <h2
                        className="font-boogaloo text-3xl mt-8 text-center mb-6"> 
                        <GiMoneyStack
                            className="inline-block relative text-4xl bottom-1 mr-2 text-red-700"/>

                        Simulation de paiements :
                    </h2>

                     <p
                        className="font-rubik text-center mb-6">
                        Une fois que vous arriverez sur la page de règlement, vous pouvez entrer ces infos :  
                        <br /> Numéro de carte bancaire : 4242 4242 4242 4242
                        <br /> Date d'expiration : 12/34
                        <br /> Cryptogramme: 567
                       <br /> Pour le nom de la carte bancaire... n'importe lequel fera l'affaire !
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
                        <RiWechatFill 
                            className="inline-block text-4xl mr-2 relative bottom-1 text-red-700"/>
                            Pour me contacter : 
                            <Link
                                className="underline ml-4 font-bold"
                                href="/contact">
                                    C'est par ici !
                            </Link>
                    </p>

                    <p
                       className="font-rubik text-center mb-16 pt-2">
                       Je suis ouverte à toute collaboration professionnelle, dans le developpement web, et capable de m'adapter et d'apprendre de nouveaux langages, en totale autonomie. J'ai intégré toute la logique grâce a mes nombreux projets réalisés en totale autonomie, en mettant l'accent sur la sécurité. Je continue bien sur de pratiquer avec les outils collaboratifs type GitHub pour etre opérationelle dans le cadre d'un projet en groupe. 
                       Disponible pour en discuter. 
                    </p>

                    <div
                        className="flex justify-center mb-16">
                        <Image
                            src="/vecto/LogoArtCommerce.svg"
                            alt="Logo Art-Commerce"
                            width={250}
                            height={100}



                        />

                    </div>

    
        </div>
        
    </div>
  )
}

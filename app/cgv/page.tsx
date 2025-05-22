// Code pour les imports : ----------------------------------------- //
import Link from "next/link"


export default function page() {


// Code pour retourner le composant JSX : ------------------------------------ //
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-center">
         
        <h2
            className="font-boogaloo text-3xl pt-10 text-center mb-10 lg:w-[40%] md:w-[60%] w-[80%] mx-auto">
            CONDITIONS GENERALES DE VENTES : 
        </h2> 

        <div
            className="lg:w-[40%] md:w-[60%] w-[80%] mx-auto pb-10">

                <div
                    className="mb-6">
                    <h3
                        className="font-boogaloo text-xl text-center mb-1">
                        1. OBJET :       
                    </h3>
                    <p
                        className="font-rubik text-sm text-justify">
                        Les présentes Conditions Générales de Vente (CGV) régissent les ventes réalisées sur ce site fictif de démonstration, dédié à la présentation de travaux artistiques (affiches numériques et peintures). Ce site n’a pas de but commercial réel : les produits présentés ne sont pas véritablement vendus.
                    </p>
                </div>

                <div
                    className="mb-6">
                    <h3
                        className="font-boogaloo text-xl text-center mb-1">
                        2. IDENTITE DE L'AUTEUR :       
                    </h3>
                    <p
                        className="font-rubik text-sm text-center">
                        <ul>
                            <li>Nom de l'auteur: Aurélie Blanc</li>
                            
                            <li>Site Web: 
                                <Link
                                    href="http://localhost:3000"
                                    className="underline ml-2">
                                        Art-Commerce
                                </Link>
                            </li>
                            <li>Portfolio: 
                                <Link
                                    href="https://portfolio-miss-white-dev-web.vercel.app/"
                                    className="underline ml-2">
                                            Site Web de Miss White
                                </Link>
                            </li>
                            <li> Page Contact: 
                                <Link
                                    href="http://localhost:3000/contact"
                                    className="underline ml-2">
                                    ici
                                </Link>
                            </li>
                            

                        </ul>
                    </p>
                </div>

                <div
                    className="mb-6">
                    <h3
                        className="font-boogaloo text-xl text-center mb-1">
                        3. PRODUITS :       
                    </h3>
                    <p
                        className="font-rubik text-sm text-justify">
                        Les produits proposés sont :

                        Des affiches numériques : œuvres téléchargeables après achat fictif.

                        Des peintures : œuvres physiques présentées à titre d'exemple.

                        Aucune œuvre ne sera effectivement livrée ou vendue. Les visuels et descriptions sont fournis à des fins de présentation uniquement.
                    </p>
                </div>

                <div
                    className="mb-6">
                    <h3
                        className="font-boogaloo text-xl text-center mb-1">
                        4. COMMANDES :       
                    </h3>
                    <p
                        className="font-rubik text-sm text-justify">
                        Le processus de commande sur ce site est fictif. Aucun paiement réel ne sera effectué, et aucune commande ne sera traitée ou expédiée. Il s’agit d’une simulation dans le cadre d’un projet de portfolio.
                    </p>
                </div>

                <div
                    className="mb-6">
                    <h3
                        className="font-boogaloo text-xl text-center mb-1">
                        5. PRIX :       
                    </h3>
                    <p
                        className="font-rubik text-sm text-justify">
                        Les prix affichés sont indicatifs et n'ont aucune valeur contractuelle. Ils visent uniquement à démontrer la présentation d’une boutique en ligne.
                    </p>
                </div>

                <div
                    className="mb-6">
                    <h3
                        className="font-boogaloo text-xl text-center mb-1">
                        6. PAIEMENT :       
                    </h3>
                    <p
                        className="font-rubik text-sm text-justify">
                        Aucun paiement réel n’est demandé. Si un module de paiement est simulé, il ne collecte aucune donnée bancaire et ne traite aucune transaction.
                    </p>
                </div>

                <div
                    className="mb-6">
                    <h3
                        className="font-boogaloo text-xl text-center mb-1">
                        7. LIVRAISON :       
                    </h3>
                    <p
                        className="font-rubik text-sm text-justify">
                        Étant donné la nature fictive du site, aucune livraison réelle n’aura lieu, qu’il s’agisse de formats numériques ou d’envois postaux.
                    </p>
                </div>

                <div
                    className="mb-6">
                    <h3
                        className="font-boogaloo text-xl text-center mb-1">
                        8. DROIT DE RETRACTATION :       
                    </h3>
                    <p
                        className="font-rubik text-sm text-justify">
                       Aucune transaction réelle n’ayant lieu, le droit de rétractation ne s’applique pas. Cette section est donc informative uniquement.
                    </p>
                </div>

                <div
                    className="mb-6">
                    <h3
                        className="font-boogaloo text-xl text-center mb-1">
                        9. PROPRIETE INTELLECTUELLE :       
                    </h3>
                    <p
                        className="font-rubik text-sm text-justify">
                       Toutes les œuvres présentées sur ce site (images, visuels, textes) sont la propriété exclusive de l’auteur. Toute reproduction, diffusion ou utilisation sans autorisation est interdite.
                    </p>
                </div>

                <div
                    className="mb-6">
                    <h3
                        className="font-boogaloo text-xl text-center mb-1">
                        10. PROTECTION DES DONNEES :       
                    </h3>
                    <p
                        className="font-rubik text-sm text-justify">
                       Ce site n’enregistre pas de données personnelles dans le cadre d’une vente. Si un formulaire de contact est présent, les données saisies ne seront utilisées que pour répondre aux demandes, et ne seront pas stockées à long terme.
                    </p>
                </div>
                <div
                    className="mb-6">
                    <h3
                        className="font-boogaloo text-xl text-center mb-1">
                        11. RESPONSABILITE :       
                    </h3>
                    <p
                        className="font-rubik text-sm text-justify">
                       L’auteur décline toute responsabilité quant à l’utilisation de ce site à des fins autres que celles prévues (présentation de portfolio). Aucun engagement contractuel ou commercial ne peut en découler.
                    </p>
                </div>

    
        </div>

    </div>
  )
}

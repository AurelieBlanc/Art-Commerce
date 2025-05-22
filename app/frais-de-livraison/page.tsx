// Code pour les imports : -------------------------------------------- //





export default function Page() {

// Code pour retourner le composant JSX : ------------------------------ //
  return (
    <div
        className="bg-[url('/fond/fondArtCommerceBeige.png')] bg-cover bg-top flex flex-col items-center">
        <h2 
            className="font-boogaloo text-3xl mt-6">
            Calcul des frais de ports : 
        </h2>

        <p
            className="font-boogaloo text-xl mt-4 text-center w-[80%] mx-auto">
            Les frais de ports sont calculés de manière forfaitaire selon le montant total des produits ; voir tableau ci-dessous :
        </p>

        <table
            className="mt-6 border-collapse">
                <caption
                    className="border-2 border-slate-900 font-boogaloo font-bold p-4 text-2xl">
                        FRAIS DE PORTS :
                </caption>
            <thead>
                <tr>
                    <th
                        className="border-2 border-slate-900 p-3">de 0 à 150 €
                    </th>
                    <th
                        className="border-2 border-slate-900 p-3">de 150 inclus à 300 €
                    </th>
                    <th
                        className="border-2 border-slate-900 p-3">au delà de 300 €
                    </th>
                </tr>


            </thead>
            <tbody>
                <tr>
                    <td
                        className="text-center border-2 border-slate-800 font-bold p-3 text-red-800">
                        20 €  
                    </td>
                    <td
                        className="text-center border-2 border-slate-800 p-3 font-bold text-red-800">
                        10 €  
                    </td>
                    <td
                        className="text-center border-2 border-slate-800 p-3 font-bold text-red-800">
                        offerts  
                    </td>
                </tr>
                
            </tbody>

        </table>

        <p
            className="font-rubik text-xs font-bold mb-6">
            * Frais de ports fictifs.
        </p>
        
    </div>
  )
}

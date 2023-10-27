import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";

export default async function Laticinio({params}) {

    let queijo

    try {
        const response = await fetch(`http://localhost:3000/api/laticinios/${params.id}`);
        queijo = await response.json();
    } catch (error) {
        redirect("/error")
    }

    return (
        <div>
            <h1>Laticínio</h1>

            <section>
                {
                    <div key={queijo.id}> 
                        <h1>PRODUTO: {queijo.nome}</h1>

                        <h2>{queijo.categoria}</h2>

                        <figure>
                            <td><Image src={queijo.imagem} width={100} height={100} alt={queijo.descricao} /></td>
                        
                            <figcaption>{queijo.descricao} - R$ <span>{queijo.preco}</span></figcaption>
                        </figure>
                    </div>
                }
            </section>


        </div>
  )
}

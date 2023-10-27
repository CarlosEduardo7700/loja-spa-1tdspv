import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";

export default async function TodosLaticinios() {

    let queijos

    try {
        const response = await fetch("http://localhost:3000/api/laticinios/0");
        queijos = await response.json();
    } catch (error) {
        redirect("/error")
    }

    return (
        <div className="lat-prod-all">
            <h1>Laticínios</h1>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Imagem</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>

                    {queijos.map((queijo) => (
                        <tr key={queijo.id}>
                            <td>{queijo.id}</td>
                            <td>
                                <Link href={`/produtos/fazenda/loja/laticinios/${queijo.id}`}>
                                <Image src={queijo.imagem} width={100} height={100} alt={queijo.descricao} />
                                </Link>
                            </td>
                            <td>{queijo.nome}</td>
                            <td>{queijo.preco}</td>
                            <td>{queijo.categoria}</td>
                            <td>{queijo.descricao}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="6">Total de Laticínios: {queijos.length}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
  )
}

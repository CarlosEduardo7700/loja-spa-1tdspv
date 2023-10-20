export default async function TodosLaticinios() {

    const response = await fetch("/api/laticinios");
    const queijos = await response.json();

    return (
        <div>
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
                            <td><Image src={queijo.imagem} width={100} height={100} alt={queijo.descricao} /></td>
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

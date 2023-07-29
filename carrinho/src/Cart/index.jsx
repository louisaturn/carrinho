import { Table } from 'reactstrap';
import { useCart } from '../context/Cart';

const YourCart = () => {
    const { cart, addProduct, removeProduct} = useCart();

    return(
    <div className='my-5'>
        <Table striped>
            <thead>
                <tr>
                <th>
                    #
                </th>
                <th>
                    Nome da Peça
                </th>
                <th>
                    Descrição
                </th>
                <th>
                    Valor
                </th>
                <th>
                    Quantidade
                </th>
                <th>
                    Ações
                </th>
                </tr>
            </thead>
            <tbody>
                {cart.map((produto) => (<tr id={produto.id}>
                    <th scope="row">
                        {produto.id}
                    </th>
                    <td>
                        <div className='d-flex justify-content-start align-items-center'>
                            <img className='img-thumbnail cart-book-img' src={produto.imagem}/>
                            <p className='text-bold ms-3'>{produto.nome}</p>
                        </div>
                    </td>
                    <td>
                        {produto.descricao}
                    </td>
                    <td>
                        {produto.valor}
                    </td>
                    <td>
                        {produto.qty}
                    </td>
                    <td>
                        <div className='d-flex'>
                            <button onClick={() => addProduct(produto)} className='btn btn-sm mx-3 btn-primary'>+</button>
                            <button onClick={() => removeProduct(produto)} className='btn btn-sm mx-3 btn-danger'>-</button>
                        </div>
                    </td>
                </tr>))}
                <tr>
                    <td>Total: </td>
                    <td colSpan={5} className='text-end'> $
                        {cart.reduce((acc, produto) => {return acc + (produto.valor * produto.qty)}, 0)}
                    </td>
                </tr>
            </tbody>
        </Table>
    </div>)
};

export default YourCart;
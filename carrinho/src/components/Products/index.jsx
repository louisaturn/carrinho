import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import { useCart } from "../../context/Cart"

const Products = ({produto}) => {

  const { addProduct } = useCart();

  return(
        <Card key={produto.id}>
          <CardImg src={produto.imagem}/>
        <CardBody>
          <CardTitle>
            {produto.nome}
          </CardTitle>
          <CardSubtitle>
            {produto.descricao}
          </CardSubtitle>
          <span className="bg-success text-white px-3 rounded-pill">
            ${produto.valor}
          </span>
          <div className="d-flex mt-3">
            <button onClick={()=> addProduct(produto)} className="btn btn-primary">+ Adicionar ao Carrinho</button>
          </div>
        </CardBody>
      </Card>
      )
    }

export default Products;
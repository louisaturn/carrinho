import Products from "../Products";
import { produtos } from "../Products/data/prods";
import {Row, Col} from 'reactstrap'

const Home = () => {
    return(
        produtos.map(produto =>
        <Row>
            <Col key={produto.id} sm={12} md={3} className="mb-3">
            <Products produto={produto}/>
        </Col>
        </Row>)
    )
}

export default Home;
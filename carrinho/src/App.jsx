import CartProvider from "./context/Cart"
import AppHeader from "./components/AppHeader"
import AppFooter from "./components/AppFooter"
import Home from "./components/Home"
import { Container } from "reactstrap"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import YourCart from "./Cart"

const App = () => {
  return(<CartProvider>
          <div className="app-wrapper d-flex flex-column">
          <BrowserRouter>
             <AppHeader/>
              <Container className="flex-grow-1">
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/your-cart" element={<YourCart/>}/>
                </Routes>
              </Container>
            <AppFooter/>
          </BrowserRouter>
          </div>
         </CartProvider>)
}

export default App;

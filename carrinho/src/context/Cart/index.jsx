import * as CartActionTypes from "./Types"
import CartContext from "./Context"
import { useReducer, useContext } from "react";
import CartReducer from "./Reducer";

export const useCart = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const initialState = {
        cart: JSON.parse(localStorage.getItem("cart")) || []
    };

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addProduct = (produto) => {
        let updatedCart = [];
        const isProductInCart = state.cart.some((prod) => prod.id === produto.id);
        if(!isProductInCart) {
            updatedCart = [ ...state.cart, {...produto, qty: 1}];
        } else {
            updatedCart = state.cart.map((prod) => {if (prod.id === produto.id){
                prod.qty++;
            }
        return prod;
        });
    }
    dispatch({type: CartActionTypes.UPDATE_CART,
            payload:updatedCart,})
    localStorage.setItem("cart", JSON.stringify(updatedCart))

};
    const removeProduct = (produto) => {
        let updatedCart = [];
        const cartprod = state.cart.find((prod) => prod.id === produto.id)
        if(cartprod.qty === 1) {
            updatedCart = state.cart.filter((prod) => prod.id !== produto.id)
        } else {
            updatedCart = state.cart.map((prod) => {if (prod.id === produto.id){
                prod.qty--;
            }
        return prod;
        });
}    dispatch({type: CartActionTypes.UPDATE_CART,
        payload: updatedCart})
    localStorage.setItem("cart", JSON.stringify(updatedCart))
};

    return(
        <CartContext.Provider value={{...state, addProduct, removeProduct}}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;
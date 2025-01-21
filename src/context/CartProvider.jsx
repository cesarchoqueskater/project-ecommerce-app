import { CartContext } from "./cartContext";
import { useState } from "react";

function CartProvider( {children} ) {
    const [ cart, setCart ] = useState([])

    const addToCart = (item) => setCart([...cart, item])

    const getQuantity = () => {
        const quantity = cart.map( item => item.quantityProduct)
        const totalProducts = quantity.reduce((acc, current) => acc + current, 0)

        return totalProducts
    }

    const getTotal = () => {
        const quantity = cart.map(item => item.quantityProduct * item.objectID)
        const totalOrder = quantity.reduce( (acc, current) => acc + current, 0 )

        return totalOrder
    }

    return (
        <CartContext.Provider value={ {cart , addToCart, getQuantity, getTotal} }>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
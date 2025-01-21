import { CartContext } from "./cartContext";
import { useState } from "react";

function CartProvider( {children} ) {
    const [ cart, setCart ] = useState([])

    console.log(cart)
    
    const addToCart = (item) => {
        
        const objectIDFound = cart.map(x => x.objectID).indexOf(item.objectID)

        if (objectIDFound >= 0) {
            cart[objectIDFound].quantityProduct = cart[objectIDFound].quantityProduct + item.quantityProduct
            setCart([...cart])
        }
        else {
            setCart([...cart, item])
        }

    }

    const getQuantityProductsAdd = () => {
        const que = cart.reduce((acc, cur) => {
            const count =  acc[cur.objectID]?.count || 0;
            acc[cur.objectID] = {...cur, count: count + 1};
            return acc;
        }, {})

        const size = Object.keys(que).length;

        return size
    }

    const getQuantity = () => {
        
        const quantity = cart.map( item => item.quantityProduct)
        const totalProducts = quantity.reduce((acc, current) => acc + current, 0)

        return totalProducts
    }

    const getTotal = () => {
        const quantity = cart.map(item => item.quantityProduct * item.price)
        const totalOrder = quantity.reduce( (acc, current) => acc + current, 0 )

        return totalOrder
    }

    const clearItemSelectedCart= (objectID) => {
        const filteredDataCart = cart.filter( item => item.objectID !== objectID)
        setCart(filteredDataCart)
    }

    const clearCart = () => { setCart([]) }

    return (
        <CartContext.Provider value={ {cart , addToCart, getQuantity, getTotal,getQuantityProductsAdd, clearCart,clearItemSelectedCart} }>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
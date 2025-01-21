import { useContext, useState } from 'react'
import { CartContext } from '../context/cartContext'


function ItemCount({ itemObject }) {

    const [count, setCount] = useState(0)

    const { addToCart } = useContext(CartContext)

    const handleAddToCart = () => {
        addToCart({ ...itemObject, quantityProduct: count })
    }

    return (
        <div className='container mb-4'>
            <p>Cantidad {count}</p>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-outline-dark" onClick={() => setCount(count + 1)} >+</button>
                <button type="button" className="btn btn-outline-dark" onClick={() => setCount(count - 1)} disabled={count < 1}>-</button>
                <button type="button" className="btn btn-primary" onClick={handleAddToCart} disabled={count < 1}>Add Product</button>
            </div>
        </div>
    )
}

export default ItemCount
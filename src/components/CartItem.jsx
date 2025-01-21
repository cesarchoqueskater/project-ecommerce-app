import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

function CartItem ({ item }) {
     const { cart, getTotal,clearItemSelectedCart } = useContext(CartContext)
       
    return (
            <div className="mb-2">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto text-start">
                        <div className="fw-bold">{item.title}
                        </div>
                        $ {item.price}
                    </div>
                    <span className="badge text-bg-primary rounded-pill">{ Number(item.quantityProduct) != 1 ? item.quantityProduct + ' unidades ' : item.quantityProduct + ' unidad ' }</span>
                    
                </li>
                <li className="list-group-item text-end">
                    <a style={{cursor:"pointer"}} onClick={() => clearItemSelectedCart(item.objectID)}> <span className="badge text-bg-danger pe-auto">Delete</span></a>
                </li>
            </div>
    )
}

export default CartItem
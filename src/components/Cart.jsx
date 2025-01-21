import CartItems from './CartItems'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

function Cart() {

    const { cart, getTotal } = useContext(CartContext)

    if (cart.length == 0) {
        return (
            <div className="container text-center align-middle">
                <div className='mt-4'>No tienes productos en el carrito de compras</div>
            </div>
        )
    }

    return (
        <div className='container text-center'>
            <div className="row">
                <div className="col-sm-12">
                    <CartItems items={cart} />
                </div>
                <div className="col-sm-12 mt-2">
                    <p className="font-monospace">Total {getTotal()}</p>
                </div>
                <div className="col-sm-12">
                    <button className="btn btn-primary" type="submit">Finaliza compra</button>
                </div>
            </div>
        </div>
    )
}


export default Cart
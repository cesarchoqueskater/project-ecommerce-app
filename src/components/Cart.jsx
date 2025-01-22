import CartItems from './CartItems'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

import { useNavigate } from "react-router";

function Cart() {

    const { cart, getTotal,clearCart } = useContext(CartContext)
    const navigate = useNavigate();

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
                    <div className='title-card-details mt-4'> <h2> Card details </h2></div>
                    <CartItems items={cart} />
                </div>
                <div className="col-sm-12 mt-2">
                    <p className="font-monospace">Total {getTotal()}</p>
                </div>
                <div className="col-sm-12">
                    <div className="btn-toolbar d-flex justify-content-center text-center" role="toolbar" aria-label="">
                        <div className="btn-group me-2" role="group" aria-label="First group">
                            <button className="btn btn-primary" type="submit" onClick={() => navigate(`/checkout/order`)}>Checkout</button>
                        </div>
                        <div className="btn-group me-2" role="group" aria-label="First group">
                            <button className="btn btn-light" type="button" onClick={() => clearCart()}>Clean cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Cart
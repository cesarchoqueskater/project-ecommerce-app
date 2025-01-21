import CartItem from './CartItem'


function CartItems({ items }) {

    const keyValueRamdomNumber = Math.random() * 100

    return (
        <div className='container text-center mt-4' key={keyValueRamdomNumber}>
            <div className="row">
                <div className="col-sm-12">
                    <ol className="list-group list-group-numbered">
                        {
                            items.map(item => (
                                <CartItem item={item} key={item.objectID} />
                            ))
                        }
                    </ol>
                </div>
            </div>        
        </div>
    )
}


export default CartItems
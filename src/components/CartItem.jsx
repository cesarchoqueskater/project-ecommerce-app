function CartItem ({ item }) {
    return (
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto text-start">
                    <div className="fw-bold">{item.title}</div>
                    $ {item.objectID}
                </div>
                <span className="badge text-bg-primary rounded-pill">{item.quantityProduct}</span>
            </li>
    )
}

export default CartItem
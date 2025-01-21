import { useContext, useState } from "react"
import { createOrder } from '../firebase/db';
import { CartContext } from '../context/cartContext';


import { useNavigate } from "react-router";


function OrderCheckout() {

    const navigate = useNavigate();

    const [orderId, setOrderId] = useState();
    const [isVisible, setIsVisible] = useState(false);
    
    const { cart, getTotal, clearCart } = useContext(CartContext)
    const orderDetails = []
    const formObject = {}

    const handleSubmit = (event) => {

        try{

            event.preventDefault();
            
            const formData = new FormData(event.target);
            
            for (let [key, value] of formData.entries()) {
                formObject[key] = value;
            }
            formObject.totalAmount = getTotal();
            formObject.items = cart;
            orderDetails.push(formObject)
            
            createOrder(orderDetails[0]).then(res => setOrderId(res))
            setIsVisible(true)


            //formData = new FormData('')
            clearCart();


        }catch(e){
            console.log(e);
            return(
                <div className="alert alert-danger" role="alert">
                    Error {e}
                </div>)
        }
    };

    return (
        <div className="container">
                    {
                        !isVisible && (
                        <div className="d-flex justify-content-center mt-5">
                            <div className="card w-50">
                                <div className="card-header">
                                    Details Order
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="formControlInputEmail" className="form-label">Email address</label>
                                            <input type="email" className="form-control" name="emailAddress" id="formControlInputEmail" placeholder="Enter email address" required/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="formControlInputFullName" className="form-label">Fullname</label>
                                            <input type="text" className="form-control" name="fullName" id="formControlInputFullName" placeholder="Enter fullname" required/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="formControlPhoneNumber" className="form-label">Phone Number</label>
                                            <input type="number" className="form-control" name="phoneNumber" id="formControlPhoneNumber" placeholder="Enter phone number" required/>
                                        </div>
                                        <button type="submit" className="btn btn-success">Create Order</button>
                                    </form>
                                </div>
                                <div className="card-footer text-body-secondary text-end">
                                    <a className="text-decoration-none" onClick={() => navigate(`/`)}>Regresar</a>
                                </div>
                            </div>
                        </div>
                        )
                    }
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
                            <symbol id="check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </symbol>
                            <symbol id="info-fill" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                            </symbol>
                            <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </symbol>
                        </svg>
                {
                    isVisible && (
                        <div className="alert alert-success d-flex align-items-center mt-5" role="alert">
                            <svg className="bi flex-shrink-0 me-2" style={{width: "10px",height:"10px"}} role="img" aria-label="Success:"><use xlinkHref="#check-circle-fill" /></svg>
                            <div>
                                La orden fue creada con exito. El número de la orden es {orderId}
                            </div>
                        </div>
                        )
                }
            </div>
        </div>

    )
};

export default OrderCheckout



/*
<div className="alert alert-success d-flex align-items-center mt-5" role="alert">
<svg className="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlinkHref="#check-circle-fill" /></svg>
<div>
An example success alert with an icon
</div>
</div>

*/
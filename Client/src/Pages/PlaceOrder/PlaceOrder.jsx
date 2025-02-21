import React, { useContext, useState, useEffect } from "react";
import { EscomContext } from "../../Context/escomContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./PlaceOrder.css";
import { productData } from "../../assets/escomData";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
    const { cartData } = useContext(EscomContext);
    const navigate = useNavigate();
    const { backend_url } = useContext(EscomContext);
    const [scriptLoaded, setScriptLoaded] = useState(false); 


    const getCartItems = () => {
        return cartData.map(cartItem => {
            const product = productData.find(product => product._id === cartItem.productId);
            return product ? { ...product, quantity: cartItem.quantity } : null;
        }).filter(item => item !== null);
    };

    const cartItems = getCartItems();
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

   
    const razorPayScript = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => reject(new Error("Failed to load Razorpay script"));
            document.body.appendChild(script);
        });
    };

    // const razorPayPlaceOrder = async () => {
    //     try {
    //         const response = await fetch(`${backend_url}/api/razorpay/create-order`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(data),
    //         });

    //         const result = await response.json(); // Await the response.json() as well
    //         console.log(result);

    //         const paymentObject = new window.Razorpay({
    //             key: "rzp_test_481XWM263JxEp8", // Replace with your Razorpay Key
    //             amount: result.amount, // Ensure this is in paise (multiply amount by 100 if needed)
    //             currency: "INR",
    //             order_id: result.razorpay_order_id, // Use the order ID from the backend
    //             handler: function (response) {
    //                 console.log("Payment successful", response);
    //                 const paymentDetails = {
    //                     order_id: response.razorpay_order_id,
    //                     payment_id: response.razorpay_payment_id,
    //                     signature: response.razorpay_signature,
    //                 };

    //                 // Call the backend to verify the payment here
    //                 // Example:
    //                 const res_two = fetch('/api/verify-payment', { method: 'POST', body: JSON.stringify(paymentDetails) });
    //                 console.log(res_two)
    //             },
    //             prefill: {
    //                 name: "John Doe", // Replace with actual user data if needed
    //                 email: "johndoe@example.com",
    //                 contact: "1234567890",
    //             },
    //             theme: {
    //                 color: "#F37254", // Set your theme color here
    //             },
    //         });

    //         paymentObject.open(); // Open the Razorpay payment window

    //     } catch (error) {
    //         alert("Error processing the order: " + error.message);
    //     }
    // };

    // useEffect(() => {
    //     razorPayScript("https://checkout.razorpay.com/v1/checkout.js")
    //         .then(() => setScriptLoaded(true)) // Set the script as loaded
    //         .catch((error) => alert(error.message)); // Handle script load error
    // }, [data]);




    return (
        <>
            <div className="place-order">
                <div className="left-container">
                    <div className="user-data">
                        <div className="input">
                            <input type="text" placeholder="Enter your first name" name="fname" id="fname" />
                            <input type="text" placeholder="Enter your last name" name="lname" id="lname" />
                        </div>
                        <input type="email" placeholder="Enter your email to get order status" name="email" id="email" />
                        <div className="input">
                            <input type="password" placeholder="Create password to access your data" name="password" id="password" />
                            <input type="password" placeholder="Confirm password" />
                        </div>
                        <input type="text" name="fulladdress" id="fulladdress" placeholder="Enter your full address" />
                        <div className="input">
                            <input type="text" name="street" id="street" placeholder="Enter your street" />
                            <input type="text" name="city" id="city" placeholder="Enter your city" />
                        </div>
                        <input type="number" name="pincode" id="pincode" placeholder="Enter your pincode" />
                        <div className="item-info">
                            <div className="cart-amount">
                                <p>Total Cart Amount</p><p>&#8377; {totalPrice.toFixed(2)}</p>
                            </div>
                            <hr />
                            <div className="cart-amount">
                                <p>Shipping Charge</p>
                                <p>&#8377; {(totalPrice * 0.15).toFixed(2)}</p>
                            </div>
                            <hr />
                            <div style={{ fontWeight: 'bold' }} className="cart-amount">
                                <p>Total Amount</p>
                                <p>&#8377; {(totalPrice * 0.15 + totalPrice).toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="total-payment">
                            <button style={{ padding: '10px 20px', width: '100%', cursor: 'pointer', color: '#fff', background: '#f76300', border: 'none' }} className="place-order-btn" onClick={() => toast.success("Order placed successfully!")}>Place Order</button>
                        </div>
                    </div>
                </div>
                <div className="right-container">
                    <h2>Order Summary</h2>
                    <hr />
                    <div className="cart-items">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div key={item._id} className="cart-item">
                                    <Link to={`/shops/${item._id}`}><img src={item.featuredImg} alt={item.title} className="cart-item-image" /></Link>
                                    <div className="cart-item-details">
                                        <h3>{item.title}</h3>
                                        <p>Price: &#8377; {Number(item.price).toFixed(2)}</p>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No items in cart</p>
                        )}
                    </div>

                </div>
            </div>
        </>
    );
};

export default PlaceOrder;

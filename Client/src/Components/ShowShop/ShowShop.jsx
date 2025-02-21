import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productData } from "../../assets/escomData";
import "./ShowShop.css";
import { EscomContext } from "../../Context/escomContext";
import { toast } from "react-toastify";

const ShowShop = () => {
    const { shopId } = useParams();
    const { addToCart, removeFromCart, cartData } = useContext(EscomContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(cartData);
    }, [cartData]);

    const singleProduct = productData.find((data) => Number(data._id) === Number(shopId));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!singleProduct) {
        return <h2 className="error-message">Product not found!</h2>;
    }

    const readableDate = new Date(singleProduct.createdAt).toLocaleString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });

    // Get product quantity in cart
    const cartItem = cartData.find((item) => item.productId === singleProduct._id);
    const cartQuantity = cartItem?.quantity || 0;
    const isOutOfStock = cartQuantity >= singleProduct.stock;

    const handlePurchase = (productId) => {
        const findProduct = cartData.find((data) => data.productId === productId);

        if (!findProduct) {
            toast.error("Please add product first");
            return;
        }
        navigate("/place-order");
    };

    return (
        <div className="show-shop-product">
            <div className="left-cont">
                <img src={singleProduct?.featuredImg} alt={singleProduct?.title || "Product Image"} />
                <div className="gallery-image">
                    {singleProduct?.galleryImg?.map((single_img, i) => (
                        <img key={i} src={single_img} alt={`Gallery ${i}`} />
                    ))}
                </div>
            </div>
            <div className="right-cont">
                <h1>{singleProduct?.title}</h1>
                <span>{readableDate}</span>
                <p>{singleProduct?.description}</p>
                <p>Category: {singleProduct?.category}</p>
                <p>Brand: {singleProduct?.brand}</p>
                <br />
                <span>Available Stock: {singleProduct.stock}</span>
                <h2>&#8377; {singleProduct?.price}</h2>

                <div className="quantity">
                    {cartQuantity > 0 && (
                        <div onClick={() => removeFromCart(singleProduct._id)}>-</div>
                    )}

                    <div>{cartQuantity}</div>

                    <div
                        onClick={() => addToCart(singleProduct._id)}
                        style={{
                            pointerEvents: isOutOfStock ? "none" : "auto",
                            opacity: isOutOfStock ? 0.2 : 1,
                        }}
                    >
                        +
                    </div>
                </div>

                <div className="buttons">
                    <button
                        onClick={() => addToCart(singleProduct._id)}
                        style={{
                            pointerEvents: isOutOfStock ? "none" : "auto",
                            opacity: isOutOfStock ? 0.2 : 1,
                        }}
                    >
                        Add to cart
                    </button>
                    <button
                        onClick={() => handlePurchase(singleProduct._id)}
                        style={{ opacity: cartQuantity === 0 ? 0.2 : 1 }}
                        disabled={cartQuantity === 0}
                    >
                        Purchase
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowShop;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../../assets/escomData";
import './ShowShop.css';

const ShowShop = () => {
    const { shopId } = useParams();

    // Find the product safely
    const singleProduct = productData.find((data) => Number(data._id) === Number(shopId));


    const readableDate = new Date(singleProduct.createdAt).toLocaleString("en-IN", {
        weekday: "long",  
        year: "numeric",  
        month: "long",    
        day: "numeric",   
        hour: "2-digit",  
        minute: "2-digit",
        second: "2-digit",
        hour12: true      
    });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // If product not found, show a message
    if (!singleProduct) {
        return <h2 className="error-message">Product not found!</h2>;
    }

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
                <h2> &#8377; {singleProduct?.price}</h2>
                <div className="quantity">
                <div>-</div><div>0</div><div>+</div>
                </div>
                <div className="buttons">
                    <button>Add to cart</button>
                    <button>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default ShowShop;

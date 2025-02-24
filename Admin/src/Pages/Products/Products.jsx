import React, { useContext } from "react";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import { TShakyaContext } from "../../Context/TShakyContext";
import './Products.css';

const Products = () => {
    const { catImage, setCatImage } = useContext(TShakyaContext);
    return (
        <>
            <div className="product-container">
                <div className="add-category">
                    <img style={{ height: "270px" }} src={catImage} alt="" />
                    <div className="action">
                        <input placeholder="Enter shop category name" type="text" />
                        <button>Submit</button>
                    </div>
                </div>

                <br />
                <hr />
                <br />
                <ImageUploader />
            </div>
        </>
    )
}

export default Products;
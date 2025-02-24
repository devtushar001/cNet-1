import React, { useContext } from "react";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import { TShakyaContext } from "../../Context/TShakyContext";
import './Products.css';

const Products = () => {
    const { catImage, setCatImage } = useContext(TShakyaContext);
    const selection = "category";
    return (
        <>
            <div className="product-container">
                <div className="add-category">
                    <h2 style={{ marginLeft: "30px", padding: "10px", borderBottom: "1px solid gray" }}>Add Category</h2>
                    <div className="img-box">
                        <img style={{ height: "270px" }} src={catImage} alt="" />
                        {!catImage ? "" : <button onClick={() => setCatImage("")} style={{ height: "40px", cursor: "pointer", borderRadius: "50%" }}>Remove</button>}
                    </div>
                    <div className="action">
                        <input placeholder="Enter shop category name" type="text" />
                        <button>Submit</button>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div className="add-product">
                    <h2 style={{ marginLeft: "30px", padding: "10px", borderBottom: "1px solid gray" }}>Add Product</h2>
                </div>
                <ImageUploader selection={selection} />
            </div>
        </>
    )
}

export default Products;
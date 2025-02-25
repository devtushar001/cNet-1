import React, { useContext, useState } from "react";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import './Products.css';

const Products = () => {
    const [catImage, setCatImage] = useState(null);
    return (
        <>
            <div className="product-container">
                <div className="add-category">
                    <h2 style={{ marginLeft: "30px", padding: "10px", borderBottom: "1px solid gray" }}>Add Category</h2>
                    <div className="img-box">
                        <img style={{ height: "270px" }} src={catImage} alt="" />
                        {!catImage ? "" : <button onClick={() => setCatImage("")} >Remove</button>}
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
                <ImageUploader selection={setCatImage} />
            </div>
        </>
    )
}

export default Products;
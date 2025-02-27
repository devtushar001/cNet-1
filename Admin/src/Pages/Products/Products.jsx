import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import { toast } from "react-toastify";
import { TShakyaContext } from "../../Context/TShakyContext";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";

const Products = () => {
    const { backend_url, setSingleImageSelector, singleImageSelector } = useContext(TShakyaContext);
    const [fetchData, setFetchData] = useState([]);
    const [categoryImage, setCategoryImage] = useState('');

    useEffect(() => {
        console.log(categoryImage);
    },[])

    const fetchShopCategory = async () => {
        try {
            const response = await fetch(`${backend_url}/api/shop-category/get-all`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const result = await response.json();

            if (!result.success) {
                toast.error(result.message);
                return;
            }

            setFetchData(result.shopCategories);
        } catch (error) {
            toast.error(error.message);
        }
    };


    useEffect(() => {
        fetchShopCategory();
    }, []);

    return (
        <>
            <div className="add-product">
                <div className="category-contianer">
                    <div className="add-category">
                        <h2>Select a category</h2>
                        <select name="category" id="category">
                            <option value="Select a category">Select a category</option>
                            {fetchData.map((ite, i) => {
                                return (
                                   <option>{ite.shopCategoryName}</option>
                                )
                            })}
                            <option value="Select a category">Select a category</option>
                            <option value="Select a category">Select a category</option>
                            <option value="Select a category">Select a category</option>
                            <option value="Select a category">Select a category</option>
                        </select>
                    </div>
                    <div className="create-new-category">
                        <h2>Create new category.</h2>
                        <div className="image" onClick={() => { setSingleImageSelector(true) }}>
                            <img src={categoryImage} alt="Category image" />
                            <input type="submit" value="Select image" />
                        </div>
                        <div className="category-data">
                            <input type="text" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
                <hr />
                {singleImageSelector ? <ImageUploader imageSelector={setCategoryImage} /> : ""}

            </div>
        </>
    );
};

export default Products;
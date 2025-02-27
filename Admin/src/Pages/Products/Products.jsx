import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import { toast } from "react-toastify";
import { TShakyaContext } from "../../Context/TShakyContext";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import TextEditor from "../../Components/TextEditor/TextEditor";

const Products = () => {
    const { backend_url, setSingleImageSelector, singleImageSelector } = useContext(TShakyaContext);
    const [fetchData, setFetchData] = useState([]);
    const [categoryImage, setCategoryImage] = useState(null);
    const [featuredImage, setFeaturedImage] = useState(null);
    const [shopCategory, setShopCategory] = useState({
        shopCategoryName: "",
        shopCategoryImage: null,
    });

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

    const createShopCategory = async () => {
        if (!shopCategory.shopCategoryName.trim()) {
            toast.error("Category name is required");
            return;
        }

        if (!categoryImage) {
            toast.error("Please upload an image");
            return;
        }

        try {
            const response = await fetch(`${backend_url}/api/shop-category/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    shopCategoryName: shopCategory.shopCategoryName,
                    shopCategoryImage: categoryImage,
                }),
            });

            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const data = await response.json();

            if (!data.success) {
                toast.error(data.message);
                return;
            }

            toast.success(data.message);
            setShopCategory({ shopCategoryName: "", shopCategoryImage: null });
            setCategoryImage("");
            fetchShopCategory();
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="add-product">
            <div className="category-contianer">
                <div className="add-category">
                    <h2>Select a category</h2>
                    <select name="category" id="category">
                        <option value="">Select a category</option>
                        {fetchData.map((item, i) => (
                            <option key={i} value={item.shopCategoryName}>{item.shopCategoryName}</option>
                        ))}
                    </select>
                </div>
                <div className="create-new-category">
                    <h2>Create new category</h2>
                    <div className="image">
                        {categoryImage ? (
                            <>
                                <img src={categoryImage} alt="Category" />
                                <button onClick={() => setCategoryImage('')}>Remove</button>
                            </>
                        ) : (
                            <input type="submit" value="Select image" onClick={() => setSingleImageSelector(true)} />
                        )}
                    </div>
                    <div className="category-data">
                        <input
                            type="text"
                            placeholder="Enter category name"
                            value={shopCategory.shopCategoryName}
                            onChange={(e) => setShopCategory({ ...shopCategory, shopCategoryName: e.target.value })}
                        />
                        <button onClick={createShopCategory}>Submit</button>
                    </div>
                </div>
            </div>
            <hr />
            {singleImageSelector && <ImageUploader imageSelector={setCategoryImage} />}
            <div className="product-content">
                <div className="fetuered-image">
                    <img src={featuredImage} alt="" />
                    <button onClick={() => setSingleImageSelector(true)}>Select featured image</button>
                </div>
                <input type="text" placeholder="Enter product title" />
                {singleImageSelector && <ImageUploader imageSelector={setFeaturedImage} />}
                <TextEditor />
            </div>
            <hr />
        </div>
    );
};

export default Products;
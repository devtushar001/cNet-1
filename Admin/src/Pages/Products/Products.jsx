import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import { toast } from "react-toastify";
import { TShakyaContext } from "../../Context/TShakyContext";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import TextEditor from "../../Components/TextEditor/TextEditor";

const Products = () => {
    const { backend_url, setSingleImageSelector, singleImageSelector } = useContext(TShakyaContext);
    const [fetchData, setFetchData] = useState([]);

    const [categoryImage, setCategoryImage] = useState({
        selection: false,
        image: null
    });

    const [featuredImage, setFeaturedImage] = useState({
        selection: false,
        image: null
    });

    const [shopCategory, setShopCategory] = useState({
        shopCategoryName: "",
        shopCategoryImage: null,
    });

    const fetchShopCategory = async () => {
        try {
            const response = await fetch(`${backend_url}/api/shop-category/get-all`);
            const result = await response.json();

            if (!result.success) {
                toast.error(result.message);
                return;
            }

            setFetchData(result.shopCategories);
        } catch (error) {
            toast.error("Error fetching categories");
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

        if (!categoryImage.image) {
            toast.error("Please upload an image");
            return;
        }

        try {
            const response = await fetch(`${backend_url}/api/shop-category/create`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    shopCategoryName: shopCategory.shopCategoryName,
                    shopCategoryImage: categoryImage.image,
                }),
            });

            const data = await response.json();

            if (!data.success) {
                toast.error(data.message);
                return;
            }

            toast.success(data.message);
            setShopCategory({ shopCategoryName: "", shopCategoryImage: null });
            setCategoryImage({ selection: false, image: null });
            fetchShopCategory();
        } catch (error) {
            toast.error("Failed to create category");
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
                        {categoryImage.image ? (
                            <>
                                <img src={categoryImage.image} alt="Category" />
                                <button onClick={() => setCategoryImage({ selection: false, image: null })}>Remove</button>
                            </>
                        ) : (
                            <input type="submit" value="Select image" onClick={() => setCategoryImage((prev) => ({ ...prev, selection: true }))} />
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

            {categoryImage.selection && <ImageUploader object={categoryImage} imageSelector={setCategoryImage} />}

            <div className="product-content">
                <div className="fetuered-image">
                    {featuredImage.image && <img src={featuredImage.image} alt="Featured" />}
                    <button onClick={() => setFeaturedImage((prev) => ({ ...prev, selection: true }))}>Select featured image</button>
                </div>
                <input type="text" placeholder="Enter product title" />
                {featuredImage.selection && <ImageUploader imageSelector={(image) => setFeaturedImage({ selection: false, image })} />}
                <TextEditor />
            </div>

            <hr />
        </div>
    );
};

export default Products;

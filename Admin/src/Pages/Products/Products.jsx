import React, { useContext, useEffect, useState } from "react";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import "./Products.css";
import { toast } from "react-toastify";
import { TShakyaContext } from "../../Context/TShakyContext";

const Products = () => {
    const [catImage, setCatImage] = useState(null);
    const { backend_url } = useContext(TShakyaContext);
    const [fetchData, setFetchData] = useState([]);
    const [shopCategory, setShopCategory] = useState({
        shopCategoryName: "",
        shopCategoryImage: null,
    });

    useEffect(() => {
        setShopCategory(prev => ({ ...prev, shopCategoryImage: catImage }));
    }, [catImage]);

    useEffect(() => {
        console.log(shopCategory);
    }, [shopCategory]);


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

            const data = await response.json();

            if (!data.success) {
                toast.error(data.message);
                return;
            }

            toast.success(data.message);
            setFetchData(data.shopCategories)
        } catch (error) {
            console.error(error.message);
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

        if (!shopCategory.shopCategoryImage) {
            toast.error("Please upload an image");
            return;
        }

        try {
            const response = await fetch(`${backend_url}/api/shop-category/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(shopCategory),
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
            console.log(data);

            setShopCategory({
                shopCategoryName: "",
                shopCategoryImage: null,
            });
            setCatImage(null);
            fetchShopCategory();

        } catch (error) {
            console.error(error.message);
            toast.error(error.message);
        }
    };




    useEffect(() => {
        console.log(fetchData);
    }, [fetchData]);

    return (
        <div className="product-container">
            <div className="add-category">
                <h2 style={{ marginLeft: "30px", padding: "10px", borderBottom: "1px solid gray" }}>
                    Add Category
                </h2>

                {shopCategory.shopCategoryImage && (
                    <div className="img-box">
                        <img
                            style={{ height: "270px" }}
                            src={shopCategory.shopCategoryImage}
                            alt="Selected category"
                        />
                        <button onClick={() => {
                            setShopCategory(prev => ({ ...prev, shopCategoryImage: null }));
                            setCatImage(null);
                        }}>Remove</button>
                    </div>
                )}

                <div className="action">
                    <input
                        type="text"
                        placeholder="Enter shop category name"
                        value={shopCategory.shopCategoryName}
                        onChange={(e) =>
                            setShopCategory(prev => ({ ...prev, shopCategoryName: e.target.value }))
                        }
                    />
                    <button type="submit" onClick={createShopCategory}>Submit</button>
                </div>
            </div>
            <br />
            <hr />
            <br />

            <div className="add-product">
                <h2 style={{ marginLeft: "30px", padding: "10px", borderBottom: "1px solid gray" }}>
                    Add Product
                </h2>
            </div>

            <ImageUploader setCatImage={setCatImage} />
        </div>
    );
};

export default Products;

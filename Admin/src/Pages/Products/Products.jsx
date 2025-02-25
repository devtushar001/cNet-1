import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import { toast } from "react-toastify";
import { TShakyaContext } from "../../Context/TShakyContext";
import TextEditor from "../../Components/TextEditor/TextEditor";

const Products = () => {
    const [catImage, setCatImage] = useState(null);
    const { backend_url } = useContext(TShakyaContext);
    const [fetchData, setFetchData] = useState([]);
    const [categorySet, setCategorySet] = useState(false)
    const [shopCategory, setShopCategory] = useState({
        shopCategoryName: "",
        shopCategoryImage: null,
    });
    const [gallery, setGallery] = useState([]);
    const { imageSelector, setImageSelector, addMultiple, addSingle, setSingle } = useContext(TShakyaContext);


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
        <>
            <div className="product-container">
                <div className="add-product">
                    <h2>Add Product</h2>
                    <hr />
                    <div className="category">
                        <button className="submit">Submit</button>
                    </div>
                    <div className="gallery-image">
                        <button onClick={() => setImageSelector(true)}>Add Gallery</button>
                        {addMultiple.map((item, i) => {
                            return (
                                <img style={{ height: "220px" }} key={i} src={item} alt="" />
                            )
                        }
                        )}
                    </div>
                    <div className="gallery-image">
                        <button onClick={() => setSingle(true)}>Add Featured Image</button>
                        <img style={{ width: "100%" }} src={addSingle} alt="" />
                    </div>
                    <div className="category">
                        <select name="shopCategory" id="shopCategory">
                            <option value="Select Category">Select a ctegory</option>
                            {fetchData.map((item, i) => {
                                return (
                                    <option>{item.shopCategoryName}</option>
                                )
                            })}
                        </select>
                        <input type="text" placeholder="Brand"/>
                        <input type="text" placeholder="Brand"/>
                        <input type="text" placeholder="Brand"/>
                        <input type="text" placeholder="Brand"/>
                    </div>
                    <input className="title" type="text" placeholder="Enter product title" />
                    <TextEditor />
                </div>

            </div>
        </>
    );
};

export default Products;

import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import { toast } from "react-toastify";
import { TShakyaContext } from "../../Context/TShakyContext";
import TextEditor from "../../Components/TextEditor/TextEditor";

const Products = () => {
    const [catImage, setCatImage] = useState(null);
    const { backend_url } = useContext(TShakyaContext);
    const [fetchData, setFetchData] = useState([]);
    const [shopCategory, setShopCategory] = useState("");
    const [gallery, setGallery] = useState([]);
    const { imageSelector, setImageSelector, addMultiple, addSingle, setSingle, content } = useContext(TShakyaContext);

    const [data, setData] = useState({
        featuredImg: '',
        galleryImg: [],
        title: '',
        category: '',
        brand: '',
        stock: '',
        price: '',
        description: ''
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const createNewProduct = async () => {
        try {
            const response = await fetch(`${backend_url}/api/shop-products/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...data, content, featuredImg: addSingle, galleryImg: [...addMultiple] })
            });


            console.log(response);
            const result = await response.json();

            alert(result.message);

            if (!result.success) {
                toast.error(result.message);
                return;
            }

            toast.success("Product added successfully");
        } catch (error) {
            toast.error("Error adding product");
        }
    };

    useEffect(() => {
        console.log(data);
    }, [])

    return (
        <div className="product-container">
            <div className="add-product">
                <h2>Add Product</h2>
                <hr />
                <button className="submit" onClick={createNewProduct}>Submit</button>

                <div className="gallery-image">
                    <button onClick={() => setImageSelector(true)}>Add Gallery</button>
                    {addMultiple.map((item, i) => (
                        <img key={i} style={{ height: "220px" }} src={item} alt="Gallery" />
                    ))}
                </div>

                <div className="gallery-image">
                    <button onClick={() => setSingle(true)}>Add Featured Image</button>
                    {addSingle && <img style={{ width: "100%" }} src={addSingle} alt="Featured" />}
                </div>

                <div className="category">
                    <select name="category" value={data.category} onChange={handleInputChange}>
                        <option value="">Select a category</option>
                        {fetchData.map((item, i) => (
                            <option key={i} value={item.shopCategoryName}>{item.shopCategoryName}</option>
                        ))}
                    </select>
                    <input type="text" name="brand" placeholder="Brand" value={data.brand} onChange={handleInputChange} />
                    <input type="number" name="stock" placeholder="Stock" value={data.stock} onChange={handleInputChange} />
                    <input type="number" name="price" placeholder="Price" value={data.price} onChange={handleInputChange} />
                    <textarea name="description" placeholder="Description" value={data.description} onChange={handleInputChange}></textarea>
                </div>

                <input className="title" type="text" name="title" placeholder="Enter product title" value={data.title} onChange={handleInputChange} />
                <TextEditor />
            </div>
        </div>
    );
};

export default Products;
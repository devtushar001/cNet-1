import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import { toast } from "react-toastify";
import { TShakyaContext } from "../../Context/TShakyContext";
import TextEditor from "../../Components/TextEditor/TextEditor";

const Products = () => {
    const { backend_url } = useContext(TShakyaContext);
    const [fetchData, setFetchData] = useState([]);

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

            product page
        </div>
        </>
    );
};

export default Products;
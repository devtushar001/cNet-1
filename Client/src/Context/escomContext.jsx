import React, { createContext, useState, useEffect } from "react";
import { escomData } from '../assets/escomData';
import { toast } from "react-toastify";

// Create the context
export const EscomContext = createContext(null);

// Context Provider component
const EscomContextProvider = ({ children }) => {
  const [navbar, setNavbar] = useState(false);
  const [data, setData] = useState("");
  const [toolsComponents, setToolsComponents] = useState({});
  const [sideBar, setSideBar] = useState(false); // To show all tools in the sidebar
  const [searchPage, setSearchPage] = useState(false);
  const [getValue, setGetValue] = useState([]);
  const [cartData, setCartData] = useState([]);

  const [courseCat, setCourseCat] = useState('All');
  const [blogCat, setBlogCat] = useState('All');
  const [shopCat, setShopCat] = useState('All');

  const getUser = localStorage.getItem('user');

  const user = JSON.parse(getUser);

  useEffect(() => {
    console.log(courseCat);
    console.log(blogCat);
    console.log(shopCat);
  }, []);

  const backend_url = "http://localhost:10017";

  const getFetchData = async () => {
    try {
      const response = await fetch(`${backend_url}/api/text-edit/get`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setGetValue(data);
    } catch (error) {
      alert("Failed to fetch data");
    }
  };

  const deleteContent = async (id) => {
    try {
      const response = await fetch(`${backend_url}/api/text-edit/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id })
      });

      const data = await response.json();
      getFetchData();
      if (data.success) {
        toast.success(data.message);
        setGetValue(getValue.filter(content => content._id !== id));
        getFetchData();
      } else {
        toast.error("Failed to delete content");
      }
    } catch (error) {
      alert("Failed to delete content");
    }
  };


  const addToCart = (productId) => {
    if (!user) {
      toast.error("Login First");
      return;
    }
    setCartData((prevCart) => {
      const existingItem = prevCart.find((item) => item.productId === productId);

      if (existingItem) {
        return prevCart.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { productId, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    if (!user) {
      toast.error("Login First");
      return;
    }
    setCartData((prevCart) => {
      const existingItem = prevCart.find((item) => item.productId === productId);

      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCart.filter((item) => item.productId !== productId);
      }
    });
  };


  useEffect(() => {
    const toolComponents = escomData.reduce((acc, item) => {
      acc[item._id] = item.url;
      return acc;
    }, {});
    setToolsComponents(toolComponents);
    getFetchData();
  }, []);

  useEffect(() => {
    console.log(cartData);
  }, [])


  const contextValue = {
    data,
    setData,
    escomData,
    toolsComponents,
    setSideBar,
    sideBar,
    backend_url,
    searchPage,
    setSearchPage,
    getValue,
    deleteContent,
    getFetchData,
    navbar,
    setNavbar,
    blogCat,
    setBlogCat,
    courseCat,
    setCourseCat,
    shopCat,
    setShopCat,
    addToCart,
    removeFromCart,
    cartData,
    user
  };

  return (
    <EscomContext.Provider value={contextValue}>
      {children}
    </EscomContext.Provider>
  );
};

export default EscomContextProvider;

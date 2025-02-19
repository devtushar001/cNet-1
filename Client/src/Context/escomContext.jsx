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

  // category setup for all routes
  const [courseCat, setCourseCat] = useState('All');
  const [blogCat, setBlogCat] = useState('All');
  const [shopCat, setShopCat] = useState('All');

  useEffect(() => {
    console.log(courseCat);
    console.log(blogCat);
    console.log(shopCat);
  }, []);

  const backend_url = "https://cnet-backend.onrender.com";

  // Function to fetch data from the database
  const getFetchData = async () => {
    try {
      const response = await fetch(`${backend_url}/api/text-edit/get`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setGetValue(data);  // Set fetched data in state
    } catch (error) {
      alert("Failed to fetch data");
    }
  };

  // Function to delete content from the database
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
        // Remove deleted content from UI
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


  useEffect(() => {
    const toolComponents = escomData.reduce((acc, item) => {
      acc[item._id] = item.url;
      return acc;
    }, {});
    setToolsComponents(toolComponents);
    getFetchData();
  }, []);


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
    setShopCat
  };

  return (
    <EscomContext.Provider value={contextValue}>
      {children}
    </EscomContext.Provider>
  );
};

export default EscomContextProvider;

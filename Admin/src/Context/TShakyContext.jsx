import React, { createContext, useEffect, useState } from "react";

export const TShakyaContext = createContext(null);

const TShakyaContextProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const [addSingle, SetAddsingle] = useState(null);
    const [addMultiple, setAddMultiple] = useState([]);
    const [imageSelector, setImageSelector] = useState(false);
    const [content, setContent] = useState('');
    const [single, setSingle] = useState(false);
    const backend_url = "http://localhost:10017";

    const contextValue = {
        sidebar,
        setSidebar,
        backend_url,
        addSingle,
        addMultiple,
        SetAddsingle,
        setAddMultiple,
        imageSelector,
        setImageSelector,
        single,
        setSingle,
        content,
        setContent
    };

    return (
        <TShakyaContext.Provider value={contextValue}>
            {children}
        </TShakyaContext.Provider>
    );
};

export default TShakyaContextProvider;

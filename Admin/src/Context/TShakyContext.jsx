import React, { createContext, useEffect, useState } from "react";

export const TShakyaContext = createContext(null);

const TShakyaContextProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const [content, setContent] = useState('');
    const backend_url = "http://localhost:10017";
    const [singleImageSelector, setSingleImageSelector] = useState(false);
    const [multiImageSelector, setMultimageSelector] = useState(false);

    const contextValue = {
        sidebar,
        setSidebar,
        backend_url,
        content,
        setContent,
        singleImageSelector,
        setSingleImageSelector,
        multiImageSelector,
        setMultimageSelector
    };

    return (
        <TShakyaContext.Provider value={contextValue}>
            {children}
        </TShakyaContext.Provider>
    );
};

export default TShakyaContextProvider;

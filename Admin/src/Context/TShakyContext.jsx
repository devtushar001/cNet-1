import React, { createContext, useState } from "react";

export const TShakyaContext = createContext(null);

const TShakyaContextProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const backend_url = "http://localhost:10017";

    const contextValue = { sidebar, setSidebar, backend_url };

    return (
        <TShakyaContext.Provider value={contextValue}>
            {children}
        </TShakyaContext.Provider>
    );
};

export default TShakyaContextProvider;

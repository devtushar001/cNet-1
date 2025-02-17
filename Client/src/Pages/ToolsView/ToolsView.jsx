import React, { useEffect } from "react";
import './ToolsView.css';
import { useContext } from "react";
import { EscomContext } from "../../Context/escomContext";
import AllTools from "../../Components/AllTools/AllTools";

const ToolsView = () => {
   const { escomData } = useContext(EscomContext);
   return (
      <>
         <div className="tools-view">
            {escomData.map((item, i) => {
               return (
                     <div key={i} className="tools-veiw" >
                        <AllTools data={item} />
                     </div>
               )
            })}
            
         </div>
      </>
   )
}

export default ToolsView;
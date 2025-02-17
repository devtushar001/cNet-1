import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Tools.css';
import { EscomContext } from '../../Context/escomContext';
import AnalogClock from '../../Components/AnalogComponent/AnalogComponent';

const Tools = () => {
  const { toolsId } = useParams();
  const { toolsComponents, escomData } = useContext(EscomContext);
  const [toolsData, setToolsData] = useState(null);
  const [view, setView] = useState('inactive');

  useEffect(() => {
    // Find the tool in escomData that matches the toolsId
    window.scrollTo(0, 0)
    const tool = escomData.find(item => item._id === toolsId);
    if (tool) {
      setToolsData(tool);
    }
  }, [toolsId, escomData]); // Only rerun when toolsId or escomData changes

  const ToolComponent = toolsComponents[toolsId];

  return (
    <>
      <div id="tools-item">
        <div className="tools-display" id={view}>
          {ToolComponent ? (
            <>
              {view === "inactive" ? <button id='btns' onClick={() => { setView("active") }}>Open</button> : <button id='btns' onClick={() => { setView("inactive") }}>Close</button>}
              <ToolComponent />
            </>
          ) : (
            <p>Tool not found!</p>
          )}
          <br />
          <br />
        </div>
        <br />
        <div id="tools-info" >
          <div className="tools-details">
            {toolsData && <h1>{toolsData.name}</h1>}
            <br />
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dignissimos numquam ea asperiores earum doloribus, possimus placeat recusandae quasi quae repellendus doloremque hic!</p>
            <br />
            <br />
            <div className="buttons">
              <button className="use-premium" title='After getting premium you will get faster version tools to your work.This one will be more efficient...'>Premium Version</button>
              <button>View profile...</button>
            </div>
          </div>
          <div className="clock-container">
            {/* <AnalogClock /> */}

          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;

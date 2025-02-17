import React, { useContext, useEffect } from "react";
import './Home.css'
import ToolsIcon from "../../Components/ToolsIcon/ToolsIcon";
import { EscomContext } from "../../Context/escomContext"
import SearchBar from "../../Components/SearchBar/SearchBar";
import Slider from "../../Components/Slider/Slider";
const Home = () => {

  const { escomData } = useContext(EscomContext)

  const lastSixItems = escomData.slice(-6);
  const itemsFromFiveToNine = escomData.slice(5, 10);

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <div className="home">
        <div className="slider">
          <Slider />
        </div>
        <SearchBar />
        {/* <Loading/> */}
        <ToolsIcon renderOne={lastSixItems} renderTwo={itemsFromFiveToNine} />
      </div>
    </>
  )
}

export default Home;
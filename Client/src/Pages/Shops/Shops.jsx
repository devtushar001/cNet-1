import React from "react";
import './Shops.css';
import { productData } from "../../assets/escomData";
import { Link } from "react-router-dom";

const Shops = () => {
  const latestProduct = productData.length > 0 ? productData[productData.length - 1] : null;

  return (
    <>
      <div style={{ backgroundImage: latestProduct?.featuredImg ? `url('${latestProduct.featuredImg}')` : "none" }} className="shops">
        <div className="over-lap"></div>
        {latestProduct ? <h1>{latestProduct.title}</h1> : <p>No blogs available</p>}
        <Link to={`/shops/${latestProduct._id}`}> <button className="read-more"> View Details </button></Link>
        <div className="shops-overlap"></div>
      </div>

      <div className="all-products">
        {productData.map((data) => {
          return (
            <div key={data._id} className="single-product">
              <img src={data.featuredImg} alt="" />
              <p>{data.title}</p>
              <div className="btns">
                <button className="view">View</button>
                <button className="purchase">Purchase</button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Shops;
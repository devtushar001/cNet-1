import React, { useContext } from "react";
import './Shops.css';
import { productData } from "../../assets/escomData";
import { Link } from "react-router-dom";
import { EscomContext } from "../../Context/escomContext";

const Shops = () => {
  const { shopCat } = useContext(EscomContext);

  const relatedProduct = productData.filter((data) => {
    if (shopCat === 'All') {
      return true;
    }
    return shopCat === data.category;
  })

  const latestProduct = relatedProduct.length > 0 ? relatedProduct[relatedProduct.length - 1] : null;


  return (
    <>
      <div style={{ backgroundImage: latestProduct?.featuredImg ? `url('${latestProduct.featuredImg}')` : "none" }} className="shops">
        <div className="over-lap"></div>
        {latestProduct ? <h1>{latestProduct.title}</h1> : <p>No blogs available</p>}
        <Link to={`/shops/${latestProduct._id}`}> <button className="read-more"> View Details </button></Link>
        <div className="shops-overlap"></div>
      </div>

      <div className="all-products">
        {relatedProduct.map((data) => {
          return (
            <div key={data._id} className="single-product">
              <img src={data.featuredImg} alt="" />
              <p>{data.title}</p>
              <div className="btns">
                <Link className="no-style view" to={`/shops/${data._id}`}><button className="view"> View</button></Link>
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
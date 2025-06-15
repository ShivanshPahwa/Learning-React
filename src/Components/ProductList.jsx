// image, stock, deliver in, rating, add to cart, quantity
import React from "react";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  // console.log("Data", props);
  const productData = props.productData;
  // console.log("Data", productData);

  return (
    <>
      <Link to={"Product/"+ productData.id}>
        <div className="card" style={{margin:'20px'}}>
          <div className="card-image">
            <img
              src="https://nobero.com/cdn/shop/files/be-fearlessly-authentic_94b5aff7-e936-4295-a75b-8198e966309d_1.jpg?v=1704111146"
              alt="tsirt"
              style={{ height: "200px" }}
            />
          </div>
          {/* <Link to='Product/123'><div className="card-heading">{productData.name}</div></Link> */}
          <div className="card-heading">{productData.name}</div>

          <div className="card-desc">{productData.desc}</div>
        </div>
      </Link>
    </>
  );
};

export default ProductList;

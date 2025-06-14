// shows sale and featured products
import React from "react";
import ProductList from "./ProductList";
import { bannerData } from "../Utils/mockdata";
const Banner = () => {
  return (
    <>
      <div className="banner-container">
        {bannerData.map((cardData) => (
          <ProductList key={cardData.id} productData={cardData} />
        ))}
      </div>

    </>
  );
};

export default Banner;

import React, { useEffect, useState } from "react";

const Business = () => {
  const [businessData, setBusinessData] = useState([]);
  const item = 1;

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch("http://localhost:3000/businesses.json");
        if (response.status == 200) {
          const data = await response.json();
          setBusinessData(data["businesses"]);
          console.log(data["businesses"]);
        } else {
          throw new Error("Request failed!");
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchBusinesses();
  });

  return (
    <div className="business_wrapper">
      <img src={businessData[item].imagesrc} alt="" />
      <h4 className="business_name">{businessData[item].name}</h4>
      <div className="info">
        <div className="adress">
          <span className="street">{businessData[item].street}</span>
          <span className="city">{businessData[item].city}</span>
          <div className="zip_wrapper">
            <span className="state">{businessData[item].state}</span>
            <span className="zipcode">{businessData[item].zip}</span>
          </div>
        </div>
        <div className="data">
          <span className="category">{businessData[item].category}</span>
          <span className="rating">{businessData[item].rating} stars</span>
          <span className="reviews">
            {businessData[item].reviewCount} reviews
          </span>
        </div>
      </div>
    </div>
  );
};

export default Business;

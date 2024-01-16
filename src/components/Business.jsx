import React, { useEffect, useState } from "react";

const Business = () => {
  const [business, setBusinessData] = useState([]);
  const item = 0;

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch("http://localhost:3000/businesses.json");
        if (response.status === 200) {
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
    // <div></div>
    <ul className="business_list">
      {business.map((business) => (
        <li className="business_wrapper">
          <div className="img_container">
            <img src={business.imagesrc} alt="" />
          </div>
          <h4 className="business_name">{business.name}</h4>
          <div className="info">
            <div className="adress">
              <span className="street">{business.street}</span>
              <span className="city">{business.city}</span>
              <div className="zip_wrapper">
                <span className="state">{business.state}</span>
                <span className="zipcode">{business.zip}</span>
              </div>
            </div>
            <div className="data">
              <span className="category">{business.category}</span>
              <span className="rating">{business.rating} stars</span>
              <span className="reviews">{business.reviewCount} reviews</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Business;
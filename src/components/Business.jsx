import React, { useEffect, useState } from "react";

const Business = () => {
  const [business, setBusinessData] = useState([]);

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
  }, []);

  const formatReview = (review) => {
    if (review < 1000) {
      return review;
    }
    if (review % 1000 !== 0) {
      review = (review / 1000).toFixed(1);
      return review + "k";
    }
    review = (review / 1000).toFixed(0);
    return Math.floor(review) + "k";
  };

  return (
    // <div></div>
    <ul className="business_list" id="business">
      {business.map((business) => (
        <li className="business_wrapper">
          <div className="img_container">
            <img src={business.imagesrc} alt="Business" />
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
              <span className="reviews">
                {formatReview(business.reviewCount)} reviews
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Business;

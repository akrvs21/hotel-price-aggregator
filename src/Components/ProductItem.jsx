import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductItem.css";

const ProductItem = ({ hotel }) => {
  // Render component
  return (
    <>
      <div className="outter-container">
        <div className="inner-container">
          <img
            src={hotel.max_photo_url}
            className="productImage"
            width="200"
            height="200"
          />
          <div className="product-info">
            <h1>{hotel.hotel_name}</h1>
            <div className="rating_container">
              {hotel.review_score ? (
                <>
                  <span className="ratings_word">
                    {hotel.review_score_word}
                  </span>
                  <span className="ratings">{hotel.review_score}</span>
                </>
              ) : (
                <>
                  <span className="new_merch">New to Looking.com</span>
                </>
              )}
            </div>
            <h4>
              {hotel.address +
                ", " +
                hotel.city_name_en +
                ", " +
                hotel.country_trans}
              <span>‎&nbsp; ({hotel.distances[0].text})‬</span>
            </h4>

            <div className="room-types">
              <span
                dangerouslySetInnerHTML={{
                  __html: hotel.unit_configuration_label,
                }}
              ></span>
            </div>
            <div className="price_container">
              <span className="room_price">
                Starts from: &nbsp;
                <b>
                  {
                    Math.ceil(hotel.composite_price_breakdown.all_inclusive_amount.value)
                  }{""}
                  &nbsp;{" "}
                  {
                    hotel.composite_price_breakdown.all_inclusive_amount
                      .currency
                  }
                </b>
              </span>
            </div>
            <span style={{ marginLeft: 20 }}>
              <Link
                to="/map"
                state={{ from: hotel.latitude + "," + hotel.longitude }}
              >
                &nbsp; &nbsp; &nbsp; Check location on map
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;

import React from "react";
import { Col } from "reactstrap";
import "../../styles/carTypes.css";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import sedanImg from "../../assets/media/types/sedans.jpg";
import suvImg from "../../assets/media/types/suv.jpg";
import otherImg from "../../assets/media/types/others.jpg";

const CarTypes = () => {
  const { data, loading, error } = useFetch(
    'https://car-shop-rentals-kol7.onrender.com/api/carslist/countByType?types=sedan,suv,others'
  );

  if (loading) {
    return <p>Loading, please wait...</p>;
  }

  if (error) {
    return <p>Error loading data</p>;
  }

  return (
    <>
      <CarItem imgUrl={sedanImg} title="Sedan(Saloon)" quantity={data[0]} />
      <CarItem imgUrl={suvImg} title="SUVs" quantity={data[1]} />
      <CarItem imgUrl={otherImg} title="Others" quantity={data[2]} />
    </>
  );
};
const CarItem = ({ imgUrl, title, quantity }) => {
  return (
    <Col lg="4" md="6" sm="6" className="mb-5 flex">
      <div className="blog__item">
        <img src={imgUrl} alt={title} className="w-100" />
        <div className="blog__info p-3">
          <span className="blog__author">
           {quantity} {title}
          </span>
          <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between">
            <Link to={`/cars`} className="read__more">
              View More
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CarTypes;

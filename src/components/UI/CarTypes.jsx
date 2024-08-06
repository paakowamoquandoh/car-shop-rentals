import React from "react";
import { Col } from "reactstrap";
import "../../styles/carTypes.css";
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blogData";

const CarTypes = () => {
  return (
    <>
      {blogData.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description, time } = item;

  return (
    <Col lg="4" md="6" sm="6" className="mb-5 flex">
      <div className="blog__item">
        <img src={imgUrl} alt="" className="w-100" />
        <div className="blog__info p-3">
          
          <span className="blog__author">
              25 {author} Cars
            </span>

          <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between">
          <Link to={`/blogs/${title}`} className="read__more">
            View More
          </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CarTypes;

import React, { useState } from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { ArrowLeft, ArrowRight, Star } from "react-feather";
import useFetch from "../../hooks/useFetch";

const OurMembers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, error } = useFetch(
    'http://localhost:8800/api/carslist?featured=true'
  );

  if (loading) {
    return <p>Loading, please wait...</p>;
  }

  if (error) {
    return <p>Error loading data</p>;
  }

  const itemsPerPage = 4; // Number of items per page
  const totalItems = data.length; // Total number of items
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Calculate the items to be displayed on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {selectedItems.map((item) => (
        <Col lg="3" md="3" sm="4" xs="6" key={item._id} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.photos[0]} alt="" className="w-100" />
            </div>
            <h6 className="text-center mb-0 mt-3">{item.model} {item.name}</h6>
            <p className="section__description text-center price">
              GhC {item.cheapestPrice}
            </p>
            <div className="rating text-center">
              {Array.from({ length: item.rating }).map((_, index) => (
                <Star key={index} className="icon-fill" />
              ))}
            </div>
          </div>
        </Col>
      ))}
      <div className="pagination">
        <button className="arrows" onClick={() => handlePageChange(currentPage - 1)}>
          <ArrowLeft size={20} className="icon-fill" />
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button className="arrows" onClick={() => handlePageChange(currentPage + 1)}>
          <ArrowRight size={20} className="icon-fill" />
        </button>
      </div>
    </>
  );
};

export default OurMembers;

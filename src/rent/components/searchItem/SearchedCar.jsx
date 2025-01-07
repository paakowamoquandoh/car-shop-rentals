import { Link } from "react-router-dom";
import "./searchedcar.css";
import { Col } from "reactstrap";

const SearchedCar = ({ item }) => {
  return (
    <Col className="">
    <div className="searchCar__item">
      <div className="searchCar__img">
        <img src={item.photos[0]} alt="" className="w-100" />
      </div>

      <div className="searchCar__item-content mt-2">
        <p className="searchSection__title text-center">{item.model} {item.name}</p>
        <h6 className="rent__price text-center mt-">
          Ghc {item.pricePerDay}<span>/day</span>
        </h6>

        <div className="searchCar__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
          <span className=" d-flex align-items-center gap-1">
            <i class="ri-car-line"></i> {item.model}
          </span>
          <span className=" d-flex align-items-center gap-1">
            <i class="ri-settings-2-line"></i> {item.transmission}
          </span>
          <span className=" d-flex align-items-center gap-1">
            <i class="ri-timer-flash-line"></i> {item.mileage}
          </span>
        </div>

        <button className=" w-50 searchCar__item-btn searchCar__btn-rent">
          <Link to={`/cars`}>Rent Car</Link>
        </button>

        <button className=" w-50 searchCar__item-btn searchCar__btn-details">
          <Link to={`/carforrent/${item._id}`}>Details</Link>
        </button>
      </div>
    </div>
  </Col>
  );
};

export default SearchedCar;
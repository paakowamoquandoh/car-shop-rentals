import {
  faBed,
  faCalendarDays,
  faPerson
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./rent.css";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/searchContext";

const Rent = ({ type }) => {
  const [location, setLocation] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    passengers: 1
  });

  const navigate = useNavigate();


  const handleOption = (name, operation) => {
    setOptions((prev) => {
      if (operation === "i" && options[name] < 5) {
        return {
          ...prev,
          [name]: options[name] + 1,
        };
      } else if (operation === "d" && options[name] > 1) {
        return {
          ...prev,
          [name]: options[name] - 1,
        };
      }
      return prev;
    });
  };

  // const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    // dispatch({ type: "NEW_SEARCH", payload: { location, dates, options } });
    navigate("/rentals", { state: { location, dates, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        {type !== "list" && (
          <>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.passengers} passengers`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Passengers</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.passengers <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("passengers", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.passengers}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("passengers", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Rent;
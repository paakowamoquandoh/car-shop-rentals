import {
  faCar,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./booking.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Booking = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDate] = useState([
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


  const handleSearch = () => {
    if (destination && dates[0].startDate && dates[0].endDate && options.passengers) {

      navigate("/carsforrent", { state: { destination, dates, options } });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const isSearchButtonDisabled = !destination || !dates[0].startDate || !dates[0].endDate || options.passengers < 1;

  return (
    <div className="formHeader">
      <div
        className={type === "list" ? "headerContainer listMode" : "headerContainer"}
      >
        {type !== "list" && (
          <>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCar} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText dateInput"
                >{`${format(dates[0].startDate, "MM-dd-yyyy")} to ${format(
                  dates[0].endDate,
                  "MM-dd-yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
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
                <button
                  className="headerBtn"
                  onClick={handleSearch}
                  disabled={isSearchButtonDisabled}
                >
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

export default Booking;

import "./carsforrent.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../SearchItem/SearchItem";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const CarsForRent = () => {
  const location = useLocation();
  const navigate = useNavigate();

 
  const defaultState = {
    destination: "",
    date: [{ startDate: new Date(), endDate: new Date(), key: "selection" }],
    options: { adult: 1, children: 0, room: 1 },
  };

  const [destination] = useState(location.state?.destination || defaultState.destination);
  const [date, setDate] = useState(location.state?.date || defaultState.date);
  const [openDate, setOpenDate] = useState(false);
  const [options] = useState(location.state?.options || defaultState.options);

  const { data, loading, error } = useFetch(
    `http://localhost:8800/api/carslist?location=${destination}`
  );

  if (loading) {
    return <p>Loading, please wait...</p>;
  }

  if (error) {
    return <p>Error loading data</p>;
  }

  const handleSearch = () => {
    if (destination && date[0].startDate && date[0].endDate && options.passengers) {
      navigate("/carsforrent", { state: { destination, date, options } });
    } else {
      alert("Please fill in all fields.");
    }
  };

  

  const isSearchButtonDisabled = !destination || !date[0].startDate || !date[0].endDate || options.passengers < 1;


  return (
    <div>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per day</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per day</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Passengers</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
              </div>
            </div>
            <button 
            disabled={isSearchButtonDisabled}
            onClick={handleSearch}>Search</button>
          </div>          
        </div>
        <div className="listResult">
          {loading ? "Cars Loading..." : <>
          {data.map(item =>(<SearchItem item={item} key={item._id} />))}            
          </>}
          </div>
      </div>
    </div>
  );
};

export default CarsForRent;

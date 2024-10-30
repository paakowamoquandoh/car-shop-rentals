import "./carsforrent.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../SearchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const CarsForRent = () => {
  const location = useLocation();
 
  const defaultState = {
    destination: "",
    date: [{ startDate: new Date(), endDate: new Date(), key: "selection" }],
    options: { passengers: 0 },
  };
  const [destination] = useState(location.state?.destination || defaultState.destination);
  const [date, setDate] = useState(location.state?.date || defaultState.date);
  const [openDate, setOpenDate] = useState(false);
  const [options] = useState(location.state?.options || defaultState.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:8800/api/carslist?location=${destination}&min=${min || 0}&max=${max || 999}`
  );

  if (loading) {
    return <p>Loading, please wait...</p>;
  }

  if (error) {
    return <p>Error loading data</p>;
  }

  const handleClick = () => {
    reFetch()
  }
  

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
            <div className="lsItem datepicker">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM-dd-yyyy")} to ${format(date[0].endDate, "MM-dd-yyyy")}`}
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
                    Min rental <small>price</small>
                  </span>
                  <input type="number" className="lsOptionInput" onChange={e=>setMin(e.target.value)}/>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max rental <small>price</small>
                  </span>
                  <input type="number" className="lsOptionInput" onChange={e=>setMax(e.target.value)}/>
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
            onClick={handleClick}>Search</button>
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

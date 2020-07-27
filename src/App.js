import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FilterGrid } from "./components/FilterGrid";
import { FilterContext } from "./context/FilterContext";
import { RSListContext } from "./context/RSListContext";
import { RealStateGrid } from "./components/RealStateGrid";

function App() {
  const [filters, setFilters] = useState({
    type: "all",
    rooms: "all",
    bathrooms: "all",
    parking: "all",
  });

  function filterBy(field, option) {
    setFilters({ ...filters, [field]: option });
  }

  const [rsList, setRSList] = useState([]);

  function updateList(newlist) {
    setRSList([...rsList, ...newlist]);
  }

  return (
    <div className="containter">
      <FilterContext.Provider value={{ state: filters, update: filterBy }}>
        <RSListContext.Provider value={{ state: rsList, update: updateList }}>
          <div className="row">
            <div className="col-12">
              <FilterGrid />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <RealStateGrid />
            </div>
          </div>
        </RSListContext.Provider>
      </FilterContext.Provider>
    </div>
  );
}

export default App;

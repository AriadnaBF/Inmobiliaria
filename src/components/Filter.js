import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../context/FilterContext";
import { RSListContext } from "../context/RSListContext";
import { DeleteButton } from "./DeleteButton";
import { TYPE_FILTER } from "../constants/filter-constants";

function Filter(props) {
  // const filterContext = useContext(FilterContext);

  const { state: filters, update: setFilters } = useContext(FilterContext);
  const { field, label } = props;

  const rsContext = useContext(RSListContext);
  const [options, setOptions] = useState();

  useEffect(() => {
    let uniqueValues = new Set();
    if (field === TYPE_FILTER) {
      rsContext.state.forEach((value) => uniqueValues.add(value[field].name));
    } else {
      rsContext.state.forEach((value) => uniqueValues.add(value[field]));
    }
    const valuesArray = [...uniqueValues];
    const sortedArray = valuesArray.sort();
    setOptions(sortedArray);
  }, [rsContext]);

  function handleChange(event, myfield) {
    const value = event.target.value;
    setFilters(myfield, value);
  }

  function clearField(myfield) {
    setFilters(myfield, "all");
  }

  return (
    <div className="row form-group">
      <label className="col-form-label">{label}</label>
      <div className="col-auto d-flex">
        <select
          className="form-control"
          value={filters[field]}
          onChange={(event) => handleChange(event, field)}
        >
          <option value="all">Todas</option>
          {options !== undefined
            ? options.map((num) => (
                <option key={field + num} value={num}>
                  {num}
                </option>
              ))
            : null}
        </select>
        {filters[field] !== "all" ? (
          <DeleteButton
            deletefunction={() => {
              clearField(field);
            }}
          />
        ) : null}
      </div>
    </div>
  );
}

export { Filter };

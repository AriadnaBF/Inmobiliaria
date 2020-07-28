import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../context/FilterContext";
import { RSListContext } from "../context/RSListContext";
import { DeleteButton } from "./DeleteButton";

function Filter(props) {
  const filterContext = useContext(FilterContext);
  const rsContext = useContext(RSListContext);
  const [options, setOptions] = useState();

  useEffect(() => {
    let uniqueValues = new Set();
    if (props.field === "type") {
      rsContext.state.forEach((value) =>
        uniqueValues.add(value[props.field].name)
      );
    } else {
      rsContext.state.forEach((value) => uniqueValues.add(value[props.field]));
    }
    const valuesArray = [...uniqueValues];
    const sortedArray = valuesArray.sort();
    setOptions(sortedArray);
  }, [rsContext]);

  function handleChange(event, field) {
    const value = event.target.value;
    filterContext.update(field, value);
  }

  function clearField(field) {
    filterContext.update(field, "all");
  }

  return (
    <div className="row form-group">
      <label className="col-form-label">{props.label}</label>
      <div className="col-auto d-flex">
        <select
          className="form-control"
          value={filterContext.state[props.field]}
          onChange={(event) => handleChange(event, props.field)}
        >
          <option value="all">Todas</option>
          {options !== undefined
            ? options.map((num) => <option value={num}>{num}</option>)
            : null}
        </select>
        {filterContext.state[props.field] !== "all" ? (
          <DeleteButton
            deletefunction={() => {
              clearField(props.field);
            }}
          />
        ) : null}
      </div>
    </div>
  );
}

export { Filter };

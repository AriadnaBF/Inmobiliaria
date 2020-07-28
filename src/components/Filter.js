import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../context/FilterContext";
import { RSListContext } from "../context/RSListContext";

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

  return (
    <div className="row form-group">
      <label className="col-form-label">{props.label}</label>
      <div className="col-auto">
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
      </div>
    </div>
  );
}

export { Filter };

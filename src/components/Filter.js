import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { RSListContext } from "../context/RSListContext";

function Filter(props) {
  const filterContext = useContext(FilterContext);
  const rsContext = useContext(RSListContext);

  function handleChange(event, field) {
    const value = event.target.value;
    filterContext.update(field, value);
  }

  return (
    <div className="form-group d-flex">
      <label>{props.label}</label>
      <select
        className="form-control"
        value={filterContext.state[props.field]}
        onChange={(event) => handleChange(event, props.field)}
      >
        <option value="all">Todas</option>
        {rsContext.state && rsContext.state.length > 0
          ? console.log(rsContext.state)
          : null}
      </select>
    </div>
  );
}

export { Filter };

import React from "react";
import { Filter } from "./Filter";
import {
  TYPE_FILTER,
  ROOM_FILTER,
  BATHROOM_FILTER,
  PARKING_FILTER,
} from "../constants/filter-constants";

function FilterGrid() {
  return (
    <div className="d-flex justify-content-around align-items-center mt-4 alert alert-info">
      <Filter label={"Tipo Inmueble"} field={TYPE_FILTER} />
      <Filter label={"Nº Habitaciones"} field={ROOM_FILTER} />
      <Filter label={"Nº Baños"} field={BATHROOM_FILTER} />
      <Filter label={"Plazas Parking"} field={PARKING_FILTER} />
    </div>
  );
}

export { FilterGrid };

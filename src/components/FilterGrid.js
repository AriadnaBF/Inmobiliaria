import React from "react";
import { Filter } from "./Filter";

function FilterGrid() {
  return (
    <div className="d-flex justify-content-around">
      <Filter label={"Tipo Inmueble"} field={"type"} />
      <Filter label={"Nº Habitaciones"} field={"rooms"} />
      <Filter label={"Nº Baños"} field={"bathrooms"} />
      <Filter label={"Plazas Parking"} field={"parking"} />
    </div>
  );
}

export { FilterGrid };

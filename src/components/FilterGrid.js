import React from "react";
import { Filter } from "./Filter";

function FilterGrid() {
  return (
    <div className="d-flex justify-content-around align-items-center mt-4 alert alert-info">
      <Filter label={"Tipo Inmueble"} field={"type"} />
      <Filter label={"Nº Habitaciones"} field={"room_amount"} />
      <Filter label={"Nº Baños"} field={"bathroom_amount"} />
      <Filter label={"Plazas Parking"} field={"parking_lot_amount"} />
    </div>
  );
}

export { FilterGrid };

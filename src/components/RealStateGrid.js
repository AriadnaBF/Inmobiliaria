import React, { useEffect, useState, useContext } from "react";
import { RealState } from "./RealState";
import { getRSList } from "../api/getRSList";
import { FilterContext } from "../context/FilterContext";
import { RSListContext } from "../context/RSListContext";

function RealStateGrid() {
  const [completeList, setCompleteList] = useState();
  const context = useContext(FilterContext);
  const rsListContext = useContext(RSListContext);

  useEffect(() => {
    async function fetchRSList() {
      const houselist = await getRSList();
      setCompleteList(houselist);
    }

    fetchRSList();
  }, []);

  useEffect(() => {
    if (completeList) {
      rsListContext.update(completeList);
    }
  }, [completeList]);

  useEffect(() => {
    if (completeList) {
      const newList = completeList.filter(
        (house) =>
          (parseInt(context.state.bathroom_amount) === house.bathroom_amount ||
            context.state.bathroom_amount === "all") &&
          (parseInt(context.state.room_amount) === house.room_amount ||
            context.state.room_amount === "all") &&
          (parseInt(context.state.parking_lot_amount) ===
            house.parking_lot_amount ||
            context.state.parking_lot_amount === "all")
      );

      rsListContext.update(newList);
    }
  }, [
    context.state.bathroom_amount,
    context.state.room_amount,
    context.state.parking_lot_amount,
  ]);

  return (
    <div>
      {!rsListContext.state ? (
        <div>Cargando</div>
      ) : (
        rsListContext.state.map((house) => {
          return (
            <RealState
              image={house.photos}
              publication_title={house.publication_title}
              rooms={house.room_amount}
              bathrooms={house.bathroom_amount}
              parking={house.parking_lot_amount}
              description={house.description}
            />
          );
        })
      )}
    </div>
  );
}

export { RealStateGrid };

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
          (parseInt(context.state.bathrooms) === house.bathroom_amount ||
            context.state.bathrooms === "all") &&
          (parseInt(context.state.rooms) === house.room_amount ||
            context.state.rooms === "all") &&
          (parseInt(context.state.parking) === house.parking_lot_amount ||
            context.state.parking === "all")
      );
      rsListContext.update(newList);
    }
  }, [context.state.bathrooms, context.state.rooms, context.state.parking]);

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
              key={house.id}
            />
          );
        })
      )}
    </div>
  );
}

export { RealStateGrid };

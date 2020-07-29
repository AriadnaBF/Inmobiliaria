import React, { useEffect, useState, useContext } from "react";
import { RealState } from "./RealState";
import { getRSList } from "../api/getRSList";
import { FilterContext } from "../context/FilterContext";
import { RSListContext } from "../context/RSListContext";
import {
  TYPE_FILTER,
  ROOM_FILTER,
  BATHROOM_FILTER,
  PARKING_FILTER,
} from "../constants/filter-constants";
import { DEFAULT_VALUE } from "../constants/value-constant";

function RealStateGrid() {
  const [completeList, setCompleteList] = useState();
  const { state: filter } = useContext(FilterContext);
  const { state: listToShow, update: setListToShow } = useContext(
    RSListContext
  );

  useEffect(() => {
    async function fetchRSList() {
      const houselist = await getRSList();
      setCompleteList(houselist);
    }

    fetchRSList();
  }, []);

  useEffect(() => {
    if (completeList) {
      setListToShow(completeList);
    }
  }, [completeList]);

  const bathroom = filter[BATHROOM_FILTER];
  const room = filter[ROOM_FILTER];
  const parking = filter[PARKING_FILTER];
  const type = filter[TYPE_FILTER];

  useEffect(() => {
    if (completeList) {
      const newList = completeList.filter(
        (house) =>
          (parseInt(filter[BATHROOM_FILTER]) === house[BATHROOM_FILTER] ||
            filter[BATHROOM_FILTER] === DEFAULT_VALUE) &&
          (parseInt(filter[ROOM_FILTER]) === house[ROOM_FILTER] ||
            filter[ROOM_FILTER] === DEFAULT_VALUE) &&
          (parseInt(filter[PARKING_FILTER]) === house[PARKING_FILTER] ||
            filter[PARKING_FILTER] === DEFAULT_VALUE) &&
          (filter[TYPE_FILTER] === house[TYPE_FILTER].name ||
            filter[TYPE_FILTER] === DEFAULT_VALUE)
      );

      setListToShow(newList);
    }
  }, [bathroom, room, parking, type]);

  return (
    <div>
      {!listToShow ? (
        <div>Cargando</div>
      ) : (
        listToShow.map((house) => {
          return (
            <RealState
              image={house.photos}
              publication_title={house.publication_title}
              rooms={house[ROOM_FILTER]}
              bathrooms={house[BATHROOM_FILTER]}
              parking={house[PARKING_FILTER]}
              type={house[TYPE_FILTER].name}
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

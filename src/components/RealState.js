import React from "react";

function RealState(props) {
  return (
    <div className="row">
      <div className="col-auto border border-secondary">
        <img alt="foto casa" src={props.image} className="d-block mx-auto" />
      </div>
      <div className="col-8 border border-secondary">
        <h3>{props.publication_title}</h3>
        <div>
          <span className="font-weight-bold mr-2">Habitaciones:</span>
          <span>{props.rooms}</span>
        </div>
        <div>
          <span className="font-weight-bold mr-2">Baños:</span>
          <span>{props.bathrooms}</span>
        </div>
        <div>
          <span className="font-weight-bold mr-2">Plazas parking:</span>
          <span>{props.parking}</span>
        </div>
        <p className="text-lowercase mr-2">{props.description}</p>
      </div>
    </div>
  );
}

export { RealState };

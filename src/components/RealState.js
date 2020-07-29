import React from "react";

function RealState(props) {
  return (
    <div className="col-10 mx-auto">
      <div className="card border-info bg-white mb-3 cardwidth">
        <div className="row no-gutters">
          <div className="col-md-3">
            <img src={props.image} className="card-img" alt="Foto casa" />
          </div>
          <div className="col-md-9">
            <div className="card-header">
              <h5 className="card-title">{props.publication_title}</h5>
            </div>
            <div className="card-body text-info">
              <h6 className="card-text">
                <span className="font-weight-bold mr-2">Tipo de inmueble:</span>{" "}
                {props.type}
              </h6>
              <h6 className="card-text">
                <span className="font-weight-bold mr-2">Habitaciones:</span>{" "}
                {props.rooms}
              </h6>
              <h6 className="card-text">
                <span className="font-weight-bold mr-2">Baños:</span>{" "}
                {props.bathrooms}
              </h6>
              <h6 className="card-text">
                <span className="font-weight-bold mr-2">
                  Plazas aparcamiento:
                </span>{" "}
                {props.parking}
              </h6>

              <p className="card-text text-muted text-truncate">
                <small className="text-muted">{props.description}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { RealState };

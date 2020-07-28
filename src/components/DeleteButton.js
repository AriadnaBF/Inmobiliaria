import React from "react";

function DeleteButton(props) {
  return (
    <button
      className="btn btn-danger rounded btn-sm"
      onClick={props.deletefunction}
    >
      🗙
    </button>
  );
}

export { DeleteButton };

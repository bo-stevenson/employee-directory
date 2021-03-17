import React from "react";

function SortButtons(props) {

  return (
    <div>
      <button type="button" className="btn btn-warning" style={{margin: "5px"}} onClick={() => props.sortById()}>
        Click to view by ID
      </button>

      <button type="button" className="btn btn-primary" style={{margin: "5px"}} onClick={() => props.sortByName()}>
        Click to view by name
      </button>

    </div>
  );
}

export default SortButtons;
import React from "react";

function SortButtons(props) {

  return (
    <div class="text-center">
      <button type="button" className="btn btn-primary" style={{margin: "5px"}} onClick={() => props.sortByID()}>
        Click to view by ID
      </button>

      <button type="button" className="btn btn-primary" style={{margin: "5px"}} onClick={() => props.sortByName()}>
        Click to view by Name
      </button>

    </div>
  );
}

export default SortButtons;
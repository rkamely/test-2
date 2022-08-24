import * as React from "react";

const eventNames = ["onDragStart", "onDrag", "onDragEnd"];

function round5(value) {
  return (Math.round(value * 1e5) / 1e5).toFixed(5);
}

function ControlPanel(props) {
  return (
    <div className="control-panel">
      
    </div>
  );
}

export default React.memo(ControlPanel);

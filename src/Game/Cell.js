import React from "react";

function Cell(props) {
  const cellValue = props.value;
  let borderStyle = cellValue === "X" ? "blue" : "red";
  return (
    <div
      onClick={props.onClick}
      style={{
        color: "white",
        width: "60px",
        height: "40px",
        padding: "20px",
        paddingTop: "30px",
        border: "1px solid " + borderStyle,
        textAlign: "center",
        verticalAlign: "center",
        background: borderStyle
      }}
    >
      {cellValue}
    </div>
  );
}

export default Cell;

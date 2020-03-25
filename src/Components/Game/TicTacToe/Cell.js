import React from "react";

function Cell(props) {
  const cellValue = props.value;
  let backgroundStyle = cellValue === "X" ? "darkGray" : "gray";
  return (
    <div
      onClick={props.onClick}
      style={{
        color: "white",
        width: "60px",
        height: "40px",
        padding: "20px",
        paddingTop: "30px",
        border: "1px indent lightGray",
        textAlign: "center",
        verticalAlign: "center",
        background: backgroundStyle
      }}
    >
      {cellValue}
    </div>
  );
}

export default Cell;

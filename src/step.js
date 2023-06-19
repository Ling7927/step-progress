import React from "react";

export default function Step(props) {
  return (
    <div className={"stepBlock" + (props.selected ? " selected" : "")}>
      {/* <span className="step">{props.label}</span> */}

      <div
        className="circleWrapper"
        onClick={() => props.updateStep(props.index + 1)}
      >
        <div className="circle">{props.index + 1}</div>
      </div>
    </div>
  );
}

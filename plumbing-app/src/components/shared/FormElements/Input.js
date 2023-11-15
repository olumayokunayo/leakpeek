import React from "react";
import "./Input.css";

const Input = (props) => {
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className="input-field"
      />
    ) : (
      <textarea
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        rows={props.rows || 3}
        className="input-field1"
      ></textarea>
    );

  return (
    <div className="input-container">
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;

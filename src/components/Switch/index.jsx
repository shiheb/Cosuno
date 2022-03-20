import React from "react";
import { CheckBoxText, Root } from "./styles";
import "./styles.css";
const Switch = ({ isOn, handleToggle, onColor, id, name }) => {
  const capitalizeFirstLetter = (S) => {
    if (!S?.length) return "";
    return S?.charAt(0).toUpperCase() + S?.slice(1);
  };
  return (
    <Root>
      <div>
        <input
          checked={isOn}
          onChange={handleToggle}
          className="react-switch-checkbox"
          id={id}
          type="checkbox"
        />
        <label
          style={{ background: isOn && onColor }}
          className="react-switch-label"
          htmlFor={id}
        >
          <span className={`react-switch-button`} />
        </label>
      </div>
      <CheckBoxText>{capitalizeFirstLetter(name)}</CheckBoxText>
    </Root>
  );
};

export default Switch;

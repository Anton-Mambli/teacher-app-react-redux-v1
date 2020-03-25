import React from "react";

const Select = props => {
  return (
    <div className="col-2">
      <div className="form-group">
        <label htmlFor={props.lessons}>
          <strong>{props.lesson}</strong>
        </label>
        <select
          name={props.name}
          className="form-control"
          onChange={props.onChange}
        >
          <option value="0">0</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );
};

export default Select;

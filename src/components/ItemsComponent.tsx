import React, { type ChangeEvent } from "react";

interface Props {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: number;
}

const ItemsComponent: React.FC<Props> = ({ handleChange, value }) => {

  return (
    <div className="input-group">
      <label htmlFor="number">عدد التذاكر:</label>
      <input
        type="number"
        name="number"
        id="number"
        value={value}
        onChange={handleChange}
        min={1}
        max={1000}
        className="styled-input"
      />
    </div>
  );
};

export default ItemsComponent;
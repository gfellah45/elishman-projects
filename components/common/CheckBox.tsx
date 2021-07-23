import React, { useState } from "react";
type CheckBoxProps = {
  checked: string;
  setChecked: (checked: string) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({ checked, setChecked }) => {
  return (
    <form className="px-10">
      <div className="flex flex-wrap items-center justify-center ">
        <input
          className="w-6 h-6"
          type="radio"
          checked={checked === "hours"}
          onChange={() => setChecked("hours")}
        />
        <label className="w-24 mx-4" htmlFor="contactChoice1">
          By Hour
        </label>

        <input
          className="w-6 h-6 ml-6"
          type="radio"
          checked={checked === "days"}
          onChange={() => setChecked("days")}
        />
        <label className="inline-block w-24 mx-4" htmlFor="contactChoice2">
          Past 7 Days
        </label>
      </div>
    </form>
  );
};

export default CheckBox;

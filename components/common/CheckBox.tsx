import React from "react";

const CheckBox: React.FC = () => {
  return (
    <form className="px-10">
      <div className="flex flex-wrap items-center ">
        <input
          className="w-6 h-6"
          type="radio"
          id="contactChoice1"
          name="contact"
          value="email"
        />
        <label className="w-24 mx-4" htmlFor="contactChoice1">
          By Month
        </label>

        <input
          className="w-6 h-6 ml-6"
          type="radio"
          id="contactChoice2"
          name="contact"
          value="phone"
        />
        <label className="inline-block w-24 mx-4" htmlFor="contactChoice2">
          Past 7 Days
        </label>
      </div>
    </form>
  );
};

export default CheckBox;

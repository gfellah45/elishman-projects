import React from "react";

interface Props {
  startDate: string;
  endDate: string;
  setStartDate: (startDate: string) => void;
  setEndDate: (endDate: string) => void;
}

const FilterDates: React.FC<Props> = ({
  startDate,
  endDate,
  setEndDate,
  setStartDate,
}) => {
  return (
    <div className="flex justify-center p-2 ">
      <div className="flex flex-col">
        <label htmlFor="startDate" className="px-2 mx-3">
          Start Date
        </label>
        <input
          type="date"
          name="startDate"
          id="startDate"
          value={startDate}
          className="block p-2 mx-3 "
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="endDate" className="px-2 mx-3">
          End Date
        </label>
        <input
          type="date"
          name="endDate"
          id="endDate"
          className="block p-2 mx-3 "
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FilterDates;

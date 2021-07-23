import React, { useState } from "react";

type Props = {
  chartState: string;
  setChartState: Function;
  min: number;
  max: number;
  type: string;
};

const Range: React.FC<Props> = ({
  chartState,
  setChartState,
  min,
  max,
  type,
}) => {
  return (
    <div className="p-4 text-center">
      <div className="p-4 text-center">
        <input
          type="range"
          name="days"
          id="days"
          value={chartState}
          onChange={(e) => setChartState(e.target.value)}
          min={min}
          max={max}
          step={1}
          className="w-7/12 text-center transition-all ease-in-out transform focus:bg-red-800"
        />
        {type === "days" && (
          <p className="font-bold text-blue-800">
            {chartState} {Number(chartState) > 1 ? "Days" : "Day"}
          </p>
        )}

        {type === "hours" && (
          <p className="font-bold text-blue-800">
            {chartState} {Number(chartState) > 1 ? "Hours" : "Hour"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Range;

import React, { FC } from "react";

import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { formatUserData, isEmpty, newFormatedData } from "../helpers";

type data = {
  data: any;
  setStartDate: (arg: string) => void;
  setEndDate: (arg: string) => void;
};

const PieCharts: FC<data> = ({ data, setStartDate, setEndDate }) => {
  // console.log(data);
  // const displayData = formatUserData(
  //   isEmpty(data) ? [] : data.Book,
  //   isEmpty(data) ? [] : data.Journal,
  //   "Book",
  //   "Journal"
  // );

  const reset = () => {
    setStartDate("");
    setEndDate("");
  };

  return (
    <>
      {isEmpty(data) && (
        <div>
          No data withing to chosen time frame{" "}
          <span
            onClick={() => reset()}
            className="text-sm font-bold text-blue-800 cursor-pointer"
          >
            Reset?
          </span>
        </div>
      )}
      {!isEmpty(data) && (
        <ResponsiveContainer width="50%" height="50%">
          <PieChart width={400} height={400}>
            <Pie
              data={newFormatedData(!isEmpty(data) && data)}
              dataKey="number"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
              label
              labelLine
            />
            <Pie
              data={newFormatedData(!isEmpty(data) && data)}
              dataKey="number"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#82ca9d"
              label
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default PieCharts;

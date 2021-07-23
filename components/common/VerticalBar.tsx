import React, { FC } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { formatUserData, isEmpty } from "../helpers";

type Props = {
  data: any;
  setStartDate: (arg: string) => void;
  setEndDate: (arg: string) => void;
};

const VerticalBar: FC<Props> = ({ data, setStartDate, setEndDate }) => {
  const displayData = formatUserData(
    !isEmpty(data) ? data.Book : [],
    !isEmpty(data) ? data.Fiction : [],
    "Book",
    "Fiction"
  );

  const reset = () => {
    setStartDate("");
    setEndDate("");
  };

  return (
    <div>
      {isEmpty(data) && (
        <div className="flex items-center justify-center mt-6">
          No data withing to chosen time frame{" "}
          <span
            onClick={() => reset()}
            className="mx-2 text-sm font-bold text-blue-800 cursor-pointer"
          >
            Reset?
          </span>
        </div>
      )}
      {!isEmpty(data) && (
        <ResponsiveContainer minHeight={360}>
          <BarChart
            data={displayData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="categoryName" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="bookLength" fill="#8884d8" />
            <Bar dataKey="fictionLength" fill="#82ca9d" />
            {/* <Bar dataKey="edition" fill="#f0ac59" /> */}
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default VerticalBar;

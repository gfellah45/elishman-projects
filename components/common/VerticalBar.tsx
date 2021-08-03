import React, { FC, useState, useEffect } from "react";
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
import { formatUserData, isEmpty, newFormatedData } from "../helpers";

type Props = {
  data: any;
  setStartDate: (arg: string) => void;
  setEndDate: (arg: string) => void;
};

const VerticalBar: FC<Props> = ({ data, setStartDate, setEndDate }) => {
  // console.log(data);

  // const [newArr, setNewArr] = useState<{}[]>();

  // console.log(Object.keys(!isEmpty(data) && data));

  // useEffect(() => {
  //   const keys = Object.keys(!isEmpty(data) && data);
  //   const obj = [];
  //   if (!isEmpty(data)) {
  //     for (let i: number = 0; i < Object.keys(data).length; i++) {
  //       if (keys[i] === Object.keys(data)[i]) {
  //         data[keys[i]].forEach((item: object) => {
  //           obj.push({
  //             number: data[keys[i]].length,
  //             ...item,
  //           });
  //         });
  //       }
  //     }
  //   }
  //   setNewArr(obj);
  // }, [data]);

  // newFormatedData(!isEmpty(data) && data);

  // console.log(newFormatedData(!isEmpty(data) && data), "final blow FORMATTED");

  // const displayData = formatUserData(
  //   !isEmpty(data) ? data.Book : [],
  //   !isEmpty(data) ? data.Refrence : [],
  //   "Book",
  //   "Refrence"
  // );

  const reset = () => {
    setStartDate("");
    setEndDate("");
  };

  return (
    // <p>testing</p>
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
            data={newFormatedData(!isEmpty(data) && data)}
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
            <Bar dataKey="number" fill="#8884d8" />
            {/* <Bar dataKey="fictionLength" fill="#82ca9d" /> */}
            {/* <Bar dataKey="edition" fill="#f0ac59" /> */}
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default VerticalBar;

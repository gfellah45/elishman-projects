import React, { FC } from "react";
import { Bar } from "react-chartjs-2";
import { isEmpty, newFormatedData } from "../helpers";

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

type Props = {
  data: any;
  setStartDate: (arg: string) => void;
  setEndDate: (arg: string) => void;
  type: string;
};

const VerticalBar: FC<Props> = ({ data, setEndDate, setStartDate, type }) => {
  const reset = () => {
    setStartDate("");
    setEndDate("");
  };

  return (
    <>
      {isEmpty(data) && (
        <div className="p-3 text-center">
          No data withing to chosen time frame{" "}
          <span
            onClick={() => reset()}
            className="text-sm font-bold text-blue-800 cursor-pointer"
          >
            Reset?
          </span>
        </div>
      )}
      <Bar
        type="bar"
        data={newFormatedData(!isEmpty(data) && data, type)}
        options={options}
      />
    </>
  );
};

export default VerticalBar;

// const reset = () => {
//   setStartDate("");
//   setEndDate("");
// };

// type Props = {
//   data: any;
//   setStartDate: (arg: string) => void;
//   setEndDate: (arg: string) => void;
// };

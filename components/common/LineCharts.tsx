//
import React, { FC } from "react";
import { Line } from "react-chartjs-2";

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          max: 10,
          min: 0,
          stepSize: 3,
          beginAtZero: true,
        },
      },
    ],
  },
};

interface LineProps {
  data?: {};
}

const LineChart: FC<LineProps> = ({ data }) => (
  <>
    <Line type="line" data={data} options={options} />
  </>
);

export default React.memo(LineChart);

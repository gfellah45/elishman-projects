//
import React, { FC } from "react";
import { Line } from "react-chartjs-2";

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

interface LineProps {
  data?: {};
}

const LineChart: FC<LineProps> = ({ data }) => (
  <>
    <Line type="line" data={data} options={options} />
  </>
);

export default React.memo(LineChart);

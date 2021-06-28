import React from "react";
import VerticalBar from "./common/VerticalBar";
import CheckBox from "./common/CheckBox";
import PieChart from "./common/PieChart";
import LineChart from "./common/LineChart";
interface Props {
  state: string;
}

const Charts: React.FC<Props> = ({ state }) => {
  return (
    <div
      className={` ${
        state === "report"
          ? " opacity-100 scale-100 delay-75 ease-in-out translate-x-0 block mt-24"
          : "opacity-0 scale-0 transition-all delay-75 ease-in-out translate-x-6 hidden"
      }`}
    >
      <div className="grid w-full h-full grid-cols-2 gap-20 p-8 px-10 overflow-auto">
        <div>
          <LineChart />
        </div>
        <div>
          <LineChart />
        </div>
        <div>
          <VerticalBar />
        </div>
        <div>
          <CheckBox />
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Charts;

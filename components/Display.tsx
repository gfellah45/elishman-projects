import React, { useState } from "react";
import Generate from "./Generate";
import Charts from "./Charts";

const Display: React.FC = () => {
  const [state, setState] = useState("key");
  return (
    <div className="flex flex-wrap w-full h-screen bg-gray-50 ">
      <div className="flex justify-center w-2/12 h-full pt-20 bg-white">
        {" "}
        <div className="text-lg font-semibold">
          <div
            onClick={() => setState("key")}
            className={`z-10 my-5 text-lg font-bold text-blue-900 transition-all ease-in-out transform cursor-pointer hover:scale-110 ${
              state === "key" && "scale-110 border-blue-900 border-b-4 "
            } `}
          >
            Get Key
          </div>
          <div
            onClick={() => setState("report")}
            className={`z-10 my-5 text-lg font-bold text-blue-900 transition-all ease-in-out transform cursor-pointer hover:scale-110 ${
              state === "report" && "scale-110 border-blue-900 border-b-4"
            }`}
          >
            Report
          </div>{" "}
        </div>
      </div>

      <div className="relative w-10/12 h-full ">
        {" "}
        <div className="absolute font-bold text-blue-900 right-8 top-6">
          Log out
        </div>
        <div className="w-full ">
          <Generate state={state} />
          <Charts state={state} />
        </div>
      </div>
    </div>
  );
};

export default Display;

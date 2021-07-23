import React, { useState } from "react";
import Generate from "./Generate";
import Charts from "./Charts";
import Link from "next/link";
import { getData } from "./helpers";
import { useWindowSize } from "../hooks/useWindowSize";

const Display: React.FC = () => {
  const [state, setState] = useState("key");

  const size = useWindowSize();

  console.log(size);
  return (
    <>
      {size.width < 1000 && (
        <div className="relative flex items-center justify-center h-screen px-6 text-lg font-semibold">
          <div className="absolute font-bold text-blue-900 right-8 top-6">
            <Link href="/">Log out</Link>
          </div>
          For better viweing experience pls switch to desktop mode or device
          width above 1000px
        </div>
      )}

      {size.width > 1000 && (
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
            {size.height > 600 && (
              <div className="z-30 w-full bg-white">
                {" "}
                <div className="absolute font-bold text-blue-900 left-8 top-6">
                  {getData("profile").email}
                </div>{" "}
                <div className="absolute font-bold text-blue-900 right-8 top-6">
                  <Link href="/">Log out</Link>
                </div>{" "}
              </div>
            )}

            <div className="z-0 w-full h-screen pt-8 overflow-y-auto ">
              <Generate state={state} />
              <Charts show={state} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Display;

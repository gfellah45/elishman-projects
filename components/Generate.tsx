import React, { useState, useRef } from "react";
import axios from "axios";
import { useClipboard } from "use-clipboard-copy";
import { getData, getExpirationDate, isExpired, setData } from "./helpers";
import AxiosInstance from "../services";
interface Props {
  state: string;
}

const Generate: React.FC<Props> = ({ state }) => {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied!");
  }

  const generate = () => {
    AxiosInstance.put(
      `${process.env.NEXT_PUBLIC_BASE_URL}/account/keys/regenerate`
    );
  };
  return (
    <div
      className={` ${
        state === "key"
          ? " opacity-100 scale-100 delay-75 ease-in-out translate-x-0 block mt-24"
          : "opacity-0 scale-0 transition-all delay-75 ease-in-out translate-x-6 hidden"
      }`}
    >
      <div className="flex justify-between w-9/12 px-10 mt-24 lg:w-6/12">
        <div className="w-7/12">
          <input
            type="text"
            ref={textAreaRef}
            value={getData("basic")}
            readOnly
            className="w-full h-12 px-2 text-gray-600 placeholder-gray-500 border rounded-lg focus-within:outline-none focus:outline-none"
          />
        </div>
        <div className="w-4/12">
          <button
            onClick={() => generate()}
            className="w-full h-12 text-lg text-white rounded-lg shadow-md bg-base hover:opacity-75"
          >
            Generate
          </button>
        </div>
      </div>
      <div className="flex w-5/12 px-10 text-gray-600 my-9 text-md">
        <button onClick={copyToClipboard}>
          <img
            src="/Group.svg"
            alt="copy"
            className="inline-block mx-3 cursor-pointer"
            loading="lazy"
          />
        </button>

        <p className="inline-block w-11/12 lg:w-8/12">
          Click to copy the generated key for use on another platform
        </p>

        <p className="text-sm text-red-600">{copySuccess}</p>
      </div>
    </div>
  );
};

export default Generate;

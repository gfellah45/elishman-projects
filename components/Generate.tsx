import React from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

interface Props {
  state: string;
}

const Generate: React.FC<Props> = ({ state }) => {
  return (
    <div
      className={` ${
        state === "key"
          ? " opacity-100 scale-100 delay-75 ease-in-out translate-x-0 block mt-24"
          : "opacity-0 scale-0 transition-all delay-75 ease-in-out translate-x-6 hidden"
      }`}
    >
      <div className="flex justify-between w-6/12 px-10 mt-24">
        <div className="w-7/12">
          <Input type="text" name="search" />
        </div>
        <div className="w-4/12">
          <Button>Generate</Button>
        </div>
      </div>
      <div className="flex w-5/12 px-10 text-gray-600 my-9 text-md">
        <img
          src="/Group.svg"
          alt="copy"
          className="inline-block mx-3"
          loading="lazy"
        />
        <p className="inline-block w-8/12">
          Click to copy the generated key for use on another platform
        </p>
      </div>
    </div>
  );
};

export default Generate;

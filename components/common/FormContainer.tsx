import React from "react";

interface Props {
  heading: string;
  navText: string;
  fnText: string;
  current: string;
  clickFn: (current: string) => void;
}

const FormContainer: React.FC<Props> = ({
  children,
  clickFn,
  navText,
  fnText,
  heading,
  current,
}) => {
  return (
    <section className="flex items-center justify-center w-full min-h-screen py-6 border ">
      <div className="w-full mx-auto lg:w-4/12">
        <p className="text-2xl font-semibold text-center text-base2">
          {heading}
        </p>
        <div className="w-9/12 mx-auto my-6">{children}</div>

        <div className="text-base font-semibold text-center">
          <p>
            {navText}
            <span
              className="mx-1 font-bold cursor-pointer"
              onClick={() => clickFn(current)}
            >
              {fnText}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FormContainer;

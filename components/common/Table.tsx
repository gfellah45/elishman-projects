import React, { FC } from "react";

interface TableProps {
  data?: {}[];
}

const Table: FC<TableProps> = ({ data }) => {
  console.log(data);
  return (
    <div className="container">
      <table className="w-full text-left">
        <thead className="flex w-full text-white bg-black">
          {/* {data.map(item => {
                if(item.categoryName === "")
            })} */}
          <tr className="flex w-full mb-4">
            <th className="w-1/4 p-4">One</th>
            <th className="w-1/4 p-4">Two</th>
            <th className="w-1/4 p-4">Three</th>
            <th className="w-1/4 p-4">Four</th>
          </tr>
        </thead>

        <tbody
          className="flex flex-col items-center justify-between w-full overflow-y-scroll bg-grey-light"
          style={{ height: "50vh" }}
        >
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
          <tr className="flex w-full mb-4">
            <td className="w-1/4 p-4">Dogs</td>
            <td className="w-1/4 p-4">Cats</td>
            <td className="w-1/4 p-4">Birds</td>
            <td className="w-1/4 p-4">Fish</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

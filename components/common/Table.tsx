import React, { FC } from "react";

interface TableProps {
  data?: any[];
  type?: string;
}

const Table: FC<TableProps> = ({ type, data }) => {
  return (
    <div className="container">
      <table className="w-full text-left">
        <thead className="flex w-full text-white bg-black">
          {type === "material" && (
            <>
              <th className="flex w-full p-2 mb-4">Author Name</th>
              <th className="flex w-full p-2 mb-4">Category</th>
              <th className="flex w-full p-2 mb-4">Publish year</th>
              <th className="flex w-full p-2 mb-4">Publisher</th>
            </>
          )}
          {type === "patron" && (
            <>
              <th className="flex w-full p-2 mb-4"> Name</th>
              <th className="flex w-full p-2 mb-4">Faculty</th>
              <th className="flex w-full p-2 mb-4">Email</th>
              <th className="flex w-full p-2 mb-4">Department</th>
            </>
          )}
        </thead>

        <tbody
          className="flex flex-col items-center justify-between w-full overflow-y-scroll bg-grey-light"
          style={{ height: "50vh" }}
        >
          {data.map((item) => {
            if (item.categoryName) {
              return (
                <tr className="flex w-full mb-4">
                  <td className="w-1/4 p-4">{item.author}</td>
                  <td className="w-1/4 p-4">{item.categoryName}</td>

                  <td className="w-1/4 p-4">{item.publishedYear}</td>
                  <td className="w-1/4 p-4">{item.publisher}</td>
                </tr>
              );
            } else if (item.fullName) {
              return (
                <tr className="flex w-full mb-4">
                  <td className="w-1/4 p-4">{item.fullName}</td>
                  <td className="w-1/4 p-4">{item.faculty}</td>
                  <td className="w-1/4 p-4 truncate">{item.email}</td>
                  <td className="w-1/4 p-4">{item.department}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

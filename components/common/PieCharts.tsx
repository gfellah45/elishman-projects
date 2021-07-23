import React, { FC } from "react";

import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { formatUserData, isEmpty } from "../helpers";

type data = {
  data: any;
  setStartDate: (arg: string) => void;
  setEndDate: (arg: string) => void;
};

const PieCharts: FC<data> = ({ data, setStartDate, setEndDate }) => {
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];

  const data02 = [
    { name: "Group A", value: 2400 },
    { name: "Group B", value: 4567 },
    { name: "Group C", value: 1398 },
    { name: "Group D", value: 9800 },
    { name: "Group E", value: 3908 },
    { name: "Group F", value: 4800 },
  ];

  const dd = {
    Book: [
      {
        author: "Walter Savitch",
        categoryName: "Book",
        discipline: "Technology",
        documentNumber: "9780134462035",
        edition: "8",
        publishedYear: "2017",
        publisher: "Pearson",
        subject: "Computer Programming",
        title: "Java",
        usedTime: "2021-06-12T10:30:20Z",
      },
      {
        author: "Daniel Liang",
        categoryName: "Book",
        discipline: "Technology",
        documentNumber: "9780134611037",
        edition: "11",
        publishedYear: "2017",
        publisher: "Pearson",
        subject: "Computer Programming",
        title: "Introduction to Java Programming, Brief Version",
        usedTime: "2021-06-12T10:30:21Z",
      },
      {
        author: "Walter Savitch",
        categoryName: "Book",
        discipline: "Technology",
        documentNumber: "9780134462035",
        edition: "8",
        publishedYear: "2017",
        publisher: "Pearson",
        subject: "Computer Programming",
        title: "Java",
        usedTime: "2021-06-25T07:57:02Z",
      },
      {
        author: "Walter Savitch",
        categoryName: "Book",
        discipline: "Technology",
        documentNumber: "9780134462035",
        edition: "8",
        publishedYear: "2017",
        publisher: "Pearson",
        subject: "Computer Programming",
        title: "Java",
        usedTime: "2021-06-25T08:39:00Z",
      },
      {
        author: "Walter Savitch",
        categoryName: "Book",
        discipline: "Technology",
        documentNumber: "9780134462035",
        edition: "8",
        publishedYear: "2017",
        publisher: "Pearson",
        subject: "Computer Programming",
        title: "Java",
        usedTime: "2021-06-25T09:29:50Z",
      },
      {
        author: "Walter Savitch",
        categoryName: "Book",
        discipline: "Technology",
        documentNumber: "9780134462035",
        edition: "8",
        publishedYear: "2017",
        publisher: "Pearson",
        subject: "Computer Programming",
        title: "Java",
        usedTime: "2021-06-25T15:00:29Z",
      },
      {
        author: "Walter Savitch",
        categoryName: "Book",
        discipline: "Technology",
        documentNumber: "9780134462035",
        edition: "8",
        publishedYear: "2017",
        publisher: "Pearson",
        subject: "Computer Programming",
        title: "Java",
        usedTime: "2021-06-25T16:28:20Z",
      },
      {
        author: "Virginia Hume",
        categoryName: "Book",
        discipline: "Fiction",
        documentNumber: "9781250266521",
        publishedYear: "2021",
        publisher: "Pearson",
        title: "Haven Point",
        usedTime: "2021-06-30T07:52:49Z",
      },
      {
        author: "Michael Punke",
        categoryName: "Book",
        discipline: "Fiction",
        documentNumber: "9781250310460",
        publishedYear: "2021",
        publisher: "Henry Holt and Co.",
        title: "Ridgeline",
        usedTime: "2021-07-09T08:12:46Z",
      },
    ],
    Fiction: [
      {
        author: "Gwyn Thomas",
        categoryName: "Fiction",
        discipline: "History",
        documentNumber: "B004INHCHE",
        edition: "Kindle",
        publishedYear: "2009",
        publisher: "Pearson",
        subject: "History",
        title: "The Alone to the Alone",
        usedTime: "2021-06-25T07:57:00Z",
      },
      {
        author: "Gwyn Thomas",
        categoryName: "Fiction",
        discipline: "History",
        documentNumber: "B004INHCHE",
        edition: "Kindle",
        publishedYear: "2009",
        publisher: "Pearson",
        subject: "History",
        title: "The Alone to the Alone",
        usedTime: "2021-06-25T08:39:01Z",
      },
      {
        author: "Gwyn Thomas",
        categoryName: "Fiction",
        discipline: "History",
        documentNumber: "B004INHCHE",
        edition: "Kindle",
        publishedYear: "2009",
        publisher: "Pearson",
        subject: "History",
        title: "The Alone to the Alone",
        usedTime: "2021-06-25T09:29:49Z",
      },
      {
        author: "Gwyn Thomas",
        categoryName: "Fiction",
        discipline: "History",
        documentNumber: "B004INHCHE",
        edition: "Kindle",
        publishedYear: "2009",
        publisher: "Pearson",
        subject: "History",
        title: "The Alone to the Alone",
        usedTime: "2021-06-25T15:00:30Z",
      },
      {
        author: "Gwyn Thomas",
        categoryName: "Fiction",
        discipline: "History",
        documentNumber: "B004INHCHE",
        edition: "Kindle",
        publishedYear: "2009",
        publisher: "Pearson",
        subject: "History",
        title: "The Alone to the Alone",
        usedTime: "2021-06-25T16:28:18Z",
      },
    ],
  };

  const displayData = formatUserData(
    isEmpty(data) ? [] : data.Book,
    isEmpty(data) ? [] : data.Reference,
    "Book",
    "Reference"
  );

  const reset = () => {
    setStartDate("");
    setEndDate("");
  };

  return (
    <>
      {isEmpty(data) && (
        <div>
          No data withing to chosen time frame{" "}
          <span
            onClick={() => reset()}
            className="text-sm font-bold text-blue-800 cursor-pointer"
          >
            Reset?
          </span>
        </div>
      )}
      {!isEmpty(data) && (
        <ResponsiveContainer width="50%" height="50%">
          <PieChart width={400} height={400}>
            <Pie
              data={displayData}
              dataKey="fictionLength"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
              label
              labelLine
            />
            <Pie
              data={displayData}
              dataKey="bookLength"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#82ca9d"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default PieCharts;

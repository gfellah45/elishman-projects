import { getData, pulledData } from "./index";
import axios from "axios";

const formatUrl = (type: string, num: number, filter: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/api/${filter}/${type}/${num}`;
};

getData;

export const fetchData = async (
  type: string,
  numberDay: string,
  numberHour: string,
  filter: string,
  modifier: (arg: pulledData) => void
) => {
  const resp = await axios.get(
    formatUrl(type, Number(type === "days" ? numberDay : numberHour), filter),
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic " + getData("basic"),
      },
    }
  );

  modifier(resp.data.data);
};

export const fetchSingleData = async (
  endDate: string,
  startDate: string,
  modifier: (arg: object) => void,
  filter: string
) => {
  const resp = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${filter}${
      startDate && endDate ? `?endDate=${endDate}&startDate=${startDate}` : ""
    }`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic " + getData("basic"),
      },
    }
  );

  modifier(resp.data.data);
};

export const fetchTableData = async (url: string) => {
  const resp = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${url}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic " + getData("basic"),
      },
    }
  );

  return resp.data.data;
};

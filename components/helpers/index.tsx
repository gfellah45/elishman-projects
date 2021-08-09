import SecureLS from "secure-ls";

let data;
if (typeof window !== "undefined") {
  data = new SecureLS();
}

export const setData = (id: string, storage: string) => {
  data.set(id, storage);
};

export const getData = (id: string) => {
  if (typeof window !== "undefined") {
    return data.get(id);
  }
};

export const getExpirationDate = (expiryTime: string): number | null => {
  if (!expiryTime) {
    return null;
  }
  // multiply by 1000 to convert seconds into milliseconds
  return 1000 * Number(expiryTime) || null;
};

export const isExpired = (exp?: number) => {
  if (!exp) {
    return false;
  }

  return Date.now() > exp;
};

export const currentDay = (val: number) => {
  switch (val) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      break;
  }
};

export type pulledData = { period: string; count: number }[];
type itrator = { period: string; count: number };

export const formartData = (data: pulledData) => {
  return data
    .sort(
      (a: any, b: any) =>
        Number(new Date(b.period).getDate()) -
        Number(new Date(a.period).getDate())
    )
    .reduce((acc: pulledData, itr: itrator) => {
      const obj = {
        period: currentDay(Number(new Date(itr.period).getDay())),
        count: itr.count,
      };
      return acc.concat(obj);
    }, [])
    .reverse();
};

export const formatUserData = (
  arr1: any,
  arr2: any,
  arg1: string,
  arg2: string
) => {
  const combine = [...arr1, ...arr2].reduce((array, obj) => {
    let obj1 = {
      author: obj.author,
      categoryName: obj.categoryName,
    };

    if (obj1.categoryName === arg1) {
      obj1["bookLength"] = arr1.length;
    }
    if (obj1.categoryName === arg2) {
      obj1["fictionLength"] = arr2.length;
    }

    return [...array, obj1];
  }, []);

  return combine;
};

export const newFormatedData = (data: {}[], type: string) => {
  const keys = Object.keys(data);
  const obj = [];
  const newKey: string[] = [];
  const dataLength = {};
  if (data) {
    for (let i: number = 0; i < Object.keys(data).length; i++) {
      if (keys[i] === Object.keys(data)[i]) {
        data[keys[i]].forEach((item: object) => {
          dataLength[keys[i]] = data[keys[i]].length;
          obj.push(data[keys[i]].length);
        });
      }
    }
  }

  keys.forEach((item: string, idx) => {
    if (item === Object.keys(data)[idx]) {
      let repeatedDataset: string = `${item} `.repeat(dataLength[item]);
      newKey.push(repeatedDataset);
    }
  });
  const mainData = {
    labels: newKey.toLocaleString().trim().split(" "),
    datasets: [
      {
        label: `Number of Materials ${type}`,
        data: obj,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return mainData;
};

export function isEmpty(value: object | string | number | Array<any>) {
  return (
    value === null ||
    value === undefined ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
}

export const formatDays = (
  arg: { count: number; period: string }[],
  type: string
) => {
  let labels = [];
  let data = [];

  for (let i = 0; i < arg.length; i++) {
    labels.push(currentDay(new Date(arg[i].period).getDay()));
    data.push(arg[i].count);
  }

  let mainData = {
    labels: labels.sort((a, b) => b - a).reverse(),
    datasets: [
      {
        data: data.reverse(),
        label: `Materials ${type}`,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return mainData;
};

export const formatTime = (
  arg: { count: number; period: string }[],
  type: string
) => {
  let labels = [];
  let data = [];

  for (let i = 0; i < arg.length; i++) {
    let start = arg[i].period.lastIndexOf("T");
    let end = arg[i].period.lastIndexOf(".");
    let time = arg[i].period.substring(start + 1, end);
    labels.push(time);
    data.push(arg[i].count);
  }

  let mainData = {
    labels: labels.sort((a, b) => b - a).reverse(),
    datasets: [
      {
        data: data.sort((a, b) => b - a).reverse(),
        label: `Materials ${type}`,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return mainData;
};

// item.period.split("T")[1].split(".")[0],

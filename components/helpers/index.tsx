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
        Number(new Date(a.period).getDate()) -
        Number(new Date(b.period).getDate())
    )
    .reduce((acc: pulledData, itr: itrator) => {
      const obj = {
        period: currentDay(Number(new Date(itr.period).getDay())),
        count: itr.count,
      };
      return acc.concat(obj);
    }, []);
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

export const newFormatedData = (data: {}[]) => {
  const keys = Object.keys(data);
  const obj = [];
  if (data) {
    for (let i: number = 0; i < Object.keys(data).length; i++) {
      if (keys[i] === Object.keys(data)[i]) {
        data[keys[i]].forEach((item: object) => {
          obj.push({
            number: data[keys[i]].length,
            ...item,
          });
        });
      }
    }
  }
  return obj;
};

export function isEmpty(value: object | string | number | Array<any>) {
  return (
    value === null ||
    value === undefined ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
}

export const computetime = (use) => {
  console.log(use);
  return use
    .map((item) => {
      return {
        period: new Date(item.period).toLocaleTimeString(),
        count: item.count,
      };
    })
    .sort((a, b) => b.period - a.period)
    .reverse();
};

// item.period.split("T")[1].split(".")[0],

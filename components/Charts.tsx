import React, { useState, useEffect } from "react";
import VerticalBar from "./common/VerticalBar";
import Range from "./common/Range";

import LineCharts from "./common/LineCharts";
import CheckBox from "./common/CheckBox";
import FilterDates from "./common/FilterDates";
import { pulledData, isEmpty, formatDays, formatTime } from "./helpers";
import {
  fetchData,
  fetchSingleData,
  fetchTableData,
} from "./helpers/SendRequest";
import Table from "./common/Table";

interface Props {
  show: string;
}

type RequestProps = {
  data: any;
};

const Charts: React.FC<Props> = ({ show }) => {
  const [dayBrowse, setDayBrowse] = useState<string>("1");
  const [dayUse, setDayUse] = useState<string>("1");
  const [hourBrowse, setHourBrowse] = useState<string>("1");
  const [hourUse, setHourUse] = useState<string>("1");
  const [checked, setChecked] = useState("days");
  const [checked2, setChecked2] = useState("days");

  const [use, setUse] = useState<pulledData>([]);
  const [borrow, setBorrow] = useState<pulledData>([]);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [startDate2, setStartDate2] = useState<string>("");
  const [endDate2, setEndDate2] = useState<string>("");
  const [use2, setUse2] = useState<RequestProps>();
  const [borrow2, setBorrow2] = useState<RequestProps>();
  const [material, setMaterial] = useState();
  const [patron, setPatron] = useState();

  useEffect(() => {
    fetchData(checked, dayUse, hourUse, "patron-use-material", setUse);
    fetchData(
      checked2,
      dayBrowse,
      hourBrowse,
      "patron-borrow-material",
      setBorrow
    );
  }, [checked, checked2, dayUse, hourUse, dayBrowse, hourBrowse]);

  useEffect(() => {
    fetchSingleData(startDate, endDate, setUse2, "patron-use-material");
    fetchSingleData(startDate2, endDate2, setBorrow2, "patron-borrow-material");
  }, [startDate, endDate, startDate2, endDate2]);

  const patronAndMeterialData = async () => {
    const material = await fetchTableData("material");
    const patron = await fetchTableData("patron");
    setMaterial(material);
    setPatron(patron);
  };

  useEffect(() => {
    patronAndMeterialData();
  }, []);

  return (
    <div
      className={` ${
        show === "report"
          ? " opacity-100 scale-100 delay-75 ease-in-out translate-x-0 block mt-16 min-h-screen overflow-y-auto "
          : "opacity-0 scale-0 transition-all delay-75 ease-in-out translate-x-6 hidden"
      }`}
    >
      <div className="grid w-full h-full grid-cols-1 gap-5 px-5 lg:grid-cols-2 ">
        <div>
          {/* use */}

          <CheckBox checked={checked} setChecked={setChecked} />
          {checked === "days" && (
            <Range
              chartState={dayUse}
              setChartState={setDayUse}
              min={1}
              max={7}
              type="days"
            />
          )}

          {checked === "hours" && (
            <Range
              chartState={hourUse}
              setChartState={setHourUse}
              min={1}
              max={24}
              type="hours"
            />
          )}

          <LineCharts
            data={
              checked === "days"
                ? formatDays(use, "Used")
                : formatTime(use, "Used")
            }
          />
        </div>
        <div>
          {/* borrow */}
          <CheckBox checked={checked2} setChecked={setChecked2} />
          {checked2 === "days" && (
            <Range
              chartState={dayBrowse}
              setChartState={setDayBrowse}
              min={1}
              max={7}
              type="days"
            />
          )}

          {checked2 === "hours" && (
            <Range
              chartState={hourBrowse}
              setChartState={setHourBrowse}
              min={1}
              max={24}
              type="hours"
            />
          )}

          <LineCharts
            data={
              checked2 === "days"
                ? formatDays(borrow, "Borrowed")
                : formatTime(borrow, "Borrowed")
            }
          />
        </div>
        <div>
          {/* use */}
          {/* /api/patron-use-material */}

          <FilterDates
            startDate={startDate}
            endDate={endDate}
            setEndDate={setEndDate}
            setStartDate={setStartDate}
          />
          <VerticalBar
            data={use2}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            type="Used"
          />
        </div>
        <div>
          {/* borrow */}
          {/* /api/patron-borrow-material */}
          <div>
            <FilterDates
              startDate={startDate2}
              endDate={endDate2}
              setEndDate={setEndDate2}
              setStartDate={setStartDate2}
            />
          </div>

          <VerticalBar
            data={borrow2}
            setStartDate={setStartDate2}
            setEndDate={setEndDate2}
            type="Borrowed"
          />
        </div>

        <div>
          <Table type="material" data={!isEmpty(material) ? material : []} />
        </div>
        <div>
          <Table type="patron" data={!isEmpty(patron) ? patron : []} />
        </div>
      </div>
    </div>
  );
};

export default Charts;

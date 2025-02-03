import React from "react";
import { RiFootprintFill } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import LogTable from "../components/MUITable";
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTooltip, VictoryTheme } from 'victory';
import { useDispatch, useSelector } from "react-redux";
import { deleteAllLogs, getAllLogs } from "../features/logging/logThunk";
import { useEffect } from "react";
import { FaTimes, FaPlus } from "react-icons/fa";
import { deleteLogs } from "../features/logging/logSlice";
function LogDashboard() {
  const dispatch = useDispatch();
  const { logs, loading, error } = useSelector((state) => state.log)

  useEffect(() => {
    dispatch(getAllLogs())
  }, [dispatch]);

  const clearSearch = () => {
    deleteAllLogs()
    dispatch(deleteLogs())
  }

  if (logs.length === 0) {
    return (
      <section className="flex text-xl font-Outfit flex-col gap-4 justify-center items-center min-h-screen">
        <div>No logs exist currently</div>
        <Link className="!py-3 !px-6 transition-all  bg-green-950 text-white hover:bg-green-900 active:bg-green-800 rounded-full" to={'add-log'}>Create a new log</Link>
      </section>
    )
  }
  return (
    <section className="!pt-20 !px-4 bg-cyan-50 min-h-screen">
      <div className="flex items-center !py-2 border-b-[1px] border-b-gray-400 justify-between">
        <div className="flex items-center text-xl font-Bricolage text-cyan-950">
          <h1>Footprint Report</h1>
          <RiFootprintFill />
        </div>
        <div className="sm:flex gap-4">
          <Link to={'add-log'} className="font-Outfit "><div className="flex gap-1 items-center"><FaPlus /> Add </div></Link>
          <button onClick={() => clearSearch()} className="font-Outfit text-base"><div className="flex gap-1 items-center"><FaTimes /> Clear </div></button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 !pt-4 gap-2">
        <div className="lg:col-span-3">
          <div className="flex flex-col items-stretch gap-2">
            <Metrics logs={logs} />
            <LogTable logs={logs} />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="flex flex-col h-full items-stretch gap-2">
            <EmissionChart logs={logs} />
          </div>
        </div>
      </div>
    </section>
  );
}

const Metrics = ({ logs }) => {
  const totalEmissions = Number.parseFloat(logs.reduce((acc, log) => acc + log.emission, 0)).toFixed(2);
  const todaysEmissions = (logs.filter(log => log.date === "2025-02-03").reduce((acc, log) => acc + log.emission, 0)).toFixed(2);
  const averageEmissions = (totalEmissions / logs.length).toFixed(2);
  const totalLogs = logs.length;

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 !py-4 rounded-2xl ">
        <div className="bg-cyan-950 rounded-xl">
          <p className="!p-4 text-white font-Outfit">Complete emissions</p>
          <h1 className="!p-4 text-white font-Bricolage text-4xl ">{totalEmissions} <span className="text-base">CO2e</span></h1>
        </div>
        <div className="border-gray-400 border-[1px] rounded-xl">
          <p className="!p-4 text-gray-700 font-Outfit">Today's emissions</p>
          <h1 className="!p-4 font-Bricolage text-4xl">{todaysEmissions} <span className="text-base">CO2e</span></h1>
        </div>
        <div className="border-gray-400 border-[1px] rounded-xl">
          <p className="!p-4 text-gray-700 font-Outfit">Average emissions</p>
          <h1 className="!p-4 font-Bricolage text-4xl">{averageEmissions} <span className="text-base">CO2e</span></h1>
        </div>
        <div className="border-gray-400 border-[1px] rounded-xl">
          <p className="!p-4 text-gray-700 font-Outfit">Total Logs Entered</p>
          <h1 className="!p-4 font-Bricolage text-4xl">{totalLogs} <span className="text-base">logs</span></h1>
        </div>
      </div>
    </>
  );
};

const EmissionChart = ({ logs }) => {
  const categoryData = logs.reduce((acc, log) => {
    acc[log.category] = (acc[log.category] || 0) + log.emission;
    return acc;
  }, {});

  const chartData = Object.keys(categoryData).map((category) => ({
    x: category,
    y: categoryData[category],
  }));

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={20}
      style={{ parent: { width: '100%', aspectRatio: 1 / 1, fontFamily: 'Outfit' } }}
    >
      <VictoryAxis
        style={{
          axisLabel: { fontFamily: "Outfit, sans-serif" },
          ticks: { fontFamily: "Outfit, sans-serif" },
          tickLabels: { fontFamily: "Outfit, sans-serif" },
        }}
      />
      <VictoryAxis dependentAxis
        style={{
          axisLabel: { fontFamily: "Outfit, sans-serif" },
          ticks: { fontFamily: "Outfit, sans-serif" },
          tickLabels: { fontFamily: "Outfit, sans-serif" },
        }}
      />
      <VictoryBar
        data={chartData}
        labels={({ datum }) => `${datum.y} CO2e`}
        style={{
          data: { fill: "#032e15" },
          labels: { fontFamily: "Outfit, sans-serif", fontSize: 12, fill: "black" }, // Label size for bars
        }}
        labelComponent={<VictoryTooltip />}
        barWidth={20} // Adjust bar width
      />
    </VictoryChart>
  );
};

export default LogDashboard;

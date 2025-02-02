import React from "react";
import { RiFootprintFill } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import LogTable from "../components/MUITable";
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTooltip, VictoryTheme } from 'victory';


function LogDashboard() {
  return (
    <section className="!mt-20 !mx-4">
      <div className="flex items-center !py-2 border-b-[1px] border-b-gray-400 justify-between">
        <div className="flex items-center text-xl font-Bricolage text-cyan-950">
          <h1>Footprint Report</h1>
          <RiFootprintFill />
        </div>
        <div>
          <Link to={'add-log'} className="font-Outfit ">+ Add</Link>
        </div>
      </div>
      <div className="grid grid-cols-5 !pt-4 gap-2">
        <div className="col-span-3">
          <div className="flex flex-col items-stretch gap-2">
            <Metrics />
            <LogTable />
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col h-full items-stretch gap-2">
            <EmissionChart />
          </div>
        </div>
      </div>
    </section>
  );
}

const Metrics = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 !py-4 rounded-2xl ">
        <div className="bg-cyan-950 rounded-xl">
          <p className="!p-4 text-white font-Outfit">Total emissions</p>
          <h1 className="!p-4 text-white font-Bricolage text-4xl ">42069 <span className="text-base">CO2e</span></h1>
        </div>
        <div className="border-gray-400 border-[1px] rounded-xl">
          <p className="!p-4 text-gray-700 font-Outfit">Today's emissions</p>
          <h1 className="!p-4 font-Bricolage text-4xl">4000 <span className="text-base">CO2e</span></h1>
        </div>
        <div className="border-gray-400 border-[1px] rounded-xl">
          <p className="!p-4 text-gray-700 font-Outfit">Average emissions</p>
          <h1 className="!p-4 font-Bricolage text-4xl">2025 <span className="text-base">CO2e</span></h1>
        </div>
        <div className="border-gray-400 border-[1px] rounded-xl">
          <p className="!p-4 text-gray-700 font-Outfit">Total Logs Entered</p>
          <h1 className="!p-4 font-Bricolage text-4xl">77 <span className="text-base">logs</span></h1>
        </div>
      </div>
    </>
  )
}

const EmissionChart = () => {
  const logs = [
    { category: "Transport", emission: 4.5 },
    { category: "Food", emission: 1.2 },
    { category: "Energy", emission: 2.3 },
    { category: "Transport", emission: 1.5 },
    { category: "Food", emission: 0.5 },
  ];
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
      style={{ parent: { width: '100%', aspectRatio: 2 / 1, fontFamily: 'Outfit' } }}
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

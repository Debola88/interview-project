// src/UpcomingClassesChart.js

import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const classes = [
  { id: 1, name: "Mathematics", teacher: "Mr. Smith", time: "10:00 AM" },
  { id: 2, name: "Science", teacher: "Mrs. Johnson", time: "11:00 AM" },
  { id: 3, name: "History", teacher: "Mr. Brown", time: "01:00 PM" },
  { id: 4, name: "English", teacher: "Ms. Davis", time: "02:00 PM" },
];

const classNames = classes.map((classItem) => classItem.name);
const classTimes = classes.map((classItem) => {
  const [time, period] = classItem.time.split(" ");
  let [hours, minutes] = time.split(":");
  if (period === "PM" && hours !== "12") {
    hours = parseInt(hours) + 12;
  }
  return `${hours}:${minutes}`;
});

const data = {
  labels: classNames,
  datasets: [
    {
      label: "Class Times",
      data: classTimes.map((time) => {
        const [hours, minutes] = time.split(":");
        return parseInt(hours) + parseInt(minutes) / 60;
      }),
      backgroundColor: "rgba(54, 162, 235, 0.6)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          const hours = Math.floor(value);
          const minutes = (value % 1) * 60;
          return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          const value = tooltipItem.raw;
          const hours = Math.floor(value);
          const minutes = (value % 1) * 60;
          return `Time: ${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
        },
      },
    },
  },
};

const UpcomingClassChart = () => {
  return (
    <div className="mx-auto w-auto">
      {/* <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Upcoming Classes</h2> */}
      <div className="bg-[#ffffff] shadow-lg rounded-lg p-5">
      <div className="flex justify-between w-full pb-5 items-center ">
          <h2 className="font-bold text-2xl max-md:text-base max-md:pt-0">
            Upcoming Classes
          </h2>
          <p className="text-sm font-semibold md:hidden text-[#1D8EED] cursor-pointer">
            See All
          </p>
        </div>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default UpcomingClassChart;

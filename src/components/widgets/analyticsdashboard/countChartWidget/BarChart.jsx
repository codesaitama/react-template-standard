import React from "react";
import { Bar } from "react-chartjs-2";

const options = {
  tooltips: {
    enabled: false
  },
  maintainAspectRatio: true,
  scaleShowLabels: false,
  legend: false,
  responsive: true,
  barRoundness: 1,
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.9,
        stacked: true
      }
    ],
    yAxes: [
      {
        display: false,
        stacked: true
      }
    ]
  }
};

const data = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  datasets: [
    {
      label: "Data",
      borderWidth: 3,
      backgroundColor: "white",
      hoverBorderColor: "none",
      weight: 100,
      borderColor: "none",
      data: [2, 4, 5, 3, 4, 7, 1, 3, 4, 3, 5, 2]
    }
  ]
};

const BarChart = props => <Bar data={data} height={200} options={options} />;

export default BarChart;

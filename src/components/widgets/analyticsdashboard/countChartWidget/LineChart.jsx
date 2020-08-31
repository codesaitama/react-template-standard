import React from "react";
import { Line } from "react-chartjs-2";

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
  labels: ["1", "2", "3", "4", "5"],
  datasets: [
    {
      label: "Data",
      borderWidth: 3,
      backgroundColor: "transparent",
      borderColor: "white",
      data: [3, 1, 7, 4, 8]
    }
  ]
};

const LineChart = props => <Line data={data} height={200} options={options} />;

export default LineChart;

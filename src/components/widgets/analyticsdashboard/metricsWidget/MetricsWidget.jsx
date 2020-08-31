import React from "react";
import { Bar } from "react-chartjs-2";
import { MetricsWrapper } from "./MetricsWidget.style";

const options = {
  tooltips: {
    enabled: false
  },
  maintainAspectRatio: true,
  responsive: true,
  scales: {
    xAxes: [
      {
        stacked: true,
        barPercentage: 0.7,
        position: "bottom",
        display: false,
        gridLines: {
          display: false,
          drawBorder: false,
          drawTicks: false
        }
      }
    ],
    yAxes: [
      {
        stacked: false,
        display: false,
        gridLines: {
          drawBorder: true,
          display: false,
          color: "#eef0fa",
          drawTicks: false,
          zeroLineColor: "rgba(90, 113, 208, 0)"
        }
      }
    ]
  },
  legend: {
    display: false
  },
  plugins: {
    datalabels: {
      display: false,
      align: "center",
      anchor: "center"
    }
  }
};

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "Data",
      data: [2, 4, 5, 3, 4, 7],
      borderWidth: 3,
      backgroundColor: "#1FA2FF",
      hoverBorderColor: "none",
      weight: 100,
      borderColor: "none"
    },
    {
      label: "Data1",
      data: [9, 9, 9, 9, 9, 9],
      borderWidth: 0,
      backgroundColor: "#1FA2FF20",
      hoverBorderColor: "none",
      weight: 100,
      borderColor: "none"
    }
  ]
};

const MetricsWidget = ({
  cardTitle,
  count1,
  metric1,
  count2,
  metric2,
  stackCount
}) => {
  return (
    <MetricsWrapper className="roe-shadow-2">
      <div className="header fs-18">{cardTitle}</div>
      <div className="row mx-0 mt-20">
        <div className="col-5 px-0">
          <div className="fs-14 bold-text">{count1}</div>
          <p className="fs-13">{metric1}</p>
          <hr />
          <div className="fs-14 bold-text">{count2}</div>
          <p className="fs-13">{metric2}</p>
        </div>
        <div className="col-7">
          <Bar data={data} height={200} options={options} />
        </div>
      </div>
      <div className="mt-20 flex center">
        <button className="btn btn-primary px-3">
          <i className="material-icons">dynamic_feed</i>
        </button>
        <div className="fs-25 mx-3 bold-text">{stackCount}</div>
      </div>
    </MetricsWrapper>
  );
};

export default MetricsWidget;

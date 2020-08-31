import React from "react";
import { Bar } from "react-chartjs-2";
import chroma from "chroma-js";

const BarChartComponent = ({ sidebarTheme }) => {
    const color = chroma("#563c91");

    const data = {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],
        datasets: [
            {
                label: "Data",
                backgroundColor: "#563c91",
                borderColor: "#563c91",
                borderWidth: 1,
                hoverBackgroundColor: color.alpha(0.8).css(),
                hoverBorderColor: "#563c91",
                data: [65, 59, 80, 81, 56, 65, 59, 80, 81, 56, 90, 71]
            }
        ]
    };

    return (
        <div>
            <Bar
                data={data}
                width={100}
                height={300}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    );
};

export default BarChartComponent;

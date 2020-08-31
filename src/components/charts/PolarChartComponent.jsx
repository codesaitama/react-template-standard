import React from "react";
import { Polar } from "react-chartjs-2";

const PolarChartComponent = ({ sidebarTheme }) => {
    const data = {
        datasets: [
            {
                data: [11, 16, 7, 3, 14],
                backgroundColor: [
                    "#563c91",
                    "#4BC0C0",
                    sidebarTheme.backgroundColor,
                    "#E7E9ED",
                    "#36A2EB"
                ],
                label: "My dataset" // for legend
            }
        ],
        labels: ["A", "B", "C", "D", "E"]
    };

    return (
        <div>
            <Polar data={data} height={100} />
        </div>
    );
};

export default PolarChartComponent;

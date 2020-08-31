import React from "react";
import { Pie } from "react-chartjs-2";

const PieChartComponent = ({ sidebarTheme }) => {
    const data = {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#563c91",
                    "rgb(108, 117, 125)",
                    "rgb(66, 46, 98)"
                ],
                hoverBackgroundColor: [
                    "#563c91",
                    "rgba(108, 117, 125, 0.5)",
                    "rgba(66, 46, 98,0.5)"
                ]
            }
        ]
    };

    return (
        <div>
            <Pie data={data} height={100} />
        </div>
    );
};

export default PieChartComponent;

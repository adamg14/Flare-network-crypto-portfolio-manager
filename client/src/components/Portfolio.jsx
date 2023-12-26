import React from "react";
import Chart from "react-apexcharts";

function Porfolio(){
    const state = {
        options: {
          series: [40, 30, 15, 15],
          labels: ["Apple", "Mango", "Lemon", "Banana"]
        }
    };

    return (
        <div>
            <h1>Porfolio </h1>
            <Chart options={ state.options}
            series={state.options.series}
            type="pie"
            width="50%">
            </Chart>
        </div>
    )
}

export default Porfolio;

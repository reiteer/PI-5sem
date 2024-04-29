import React, { Component } from "react";
import Chart from "react-apexcharts";

function Chart(){

    const option = {
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            tooltip: {
                enable: true
            }
        }
    }

    const series = [{
        data: []
    }]


    return {
        <Chart
            options={options}
            series={series} />

    }
}
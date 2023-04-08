import React from 'react'
import Chart from 'react-apexcharts';
import "../css/CustomerReview.css";

const CustomerReview = () => {
    const data = {
        series: [
            {
                name: "Review",
                data: [10, 50, 30, 90, 40, 120, 100]
            },
        ],
        options: {
            chart: {
                type: "area",
                height: "auto"
            },
            fill: {
                colors: ["#fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["#ff929f"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                },
            },
            grid: {
                show: false,
            }
        }
    }
  return (
    <div className="CustomerReview">
        <Chart series={data.series} type='area' options={data.options} />
    </div>
  )
}

export default CustomerReview
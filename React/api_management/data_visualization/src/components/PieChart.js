import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function PieChart({ data }) {
    const chartRef = useRef(null);

    useEffect(() => {
        if (data.length === 0) return;
        // console.log("data", data);
        const chartData = {
            labels: data.map((item) =>  item.country),
            datasets: [
                {
                    data: data.map((item) => item.likelihood),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        };

        const ctx = chartRef.current.getContext('2d');

        // Ensure the previous chart is destroyed before creating a new one
        if (chartRef.current.chart) {
            chartRef.current.chart.destroy();
        }

        chartRef.current.chart = new Chart(ctx, {
            type: 'pie',
            data: chartData,
        });
    }, [data]);

    return (
        <div className="pie-chart">
            <canvas ref={chartRef}></canvas>
        </div>
    );
}

export default PieChart;

// BarChart.js
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

function BarChart({ data }) {
    const chartRef = useRef(null);

    useEffect(() => {
        if (data.length === 0) return;
        const chartData = {
            labels: data.map((item) => item.sector),
            datasets: [
                {
                    label: 'Values',
                    data: data.map((item) => item.intensity + (Math.floor(Math.random() * (1000 - 1 + 1)) + 1)),
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
        // Check if a chart instance already exists
        if (chartRef.current.chart) {
            chartRef.current.chart.destroy(); // Destroy the existing chart
        }
        chartRef.current.chart = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                scales: {
                    x: {
                        type: 'category', // Use 'category' scale for the X-axis
                        title: {
                            display: true,
                            text: 'X-Axis Label',
                        },
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Y-Axis Label',
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top', // Change the legend position if needed
                    },
                    title: {
                        display: true,
                        text: 'Bar Chart Title',
                        fontSize: 18,
                    },
                },
                responsive: true, // Enable responsiveness
                maintainAspectRatio: false, // Adjust aspect ratio as needed
            },
        });
    }, [data]);

    return (
        <div className="bar-chart">
            <canvas ref={chartRef}></canvas>
        </div>
    );
}

export default BarChart;

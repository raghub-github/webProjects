// LineChart.js
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

function LineChart({ data }) {
    const chartRef = useRef(null);

    useEffect(() => {
        if (data.length === 0) return;

        const chartData = {
            labels: data.map((item) => item.end_year),
            datasets: [
                {
                    label: 'Intensity',
                    data: data.map((item) => item.intensity),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false,
                },
            ],
        };

        const ctx = chartRef.current.getContext('2d');
        // Check if a chart instance already exists
        if (chartRef.current.chart) {
            chartRef.current.chart.destroy(); // Destroy the existing chart
        }

        // Create a new chart instance
        chartRef.current.chart = new Chart(ctx, {
            type: 'line',
            data: chartData,
        });
    }, [data]);

    return (
        <div className="line-chart">
            <canvas ref={chartRef}></canvas>
        </div>
    );
}

export default LineChart;

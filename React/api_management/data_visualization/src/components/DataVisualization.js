import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';

function DataVisualization({ data, filters }) {
  // Filter data based on selected filters
  const filteredData = data.filter((item) => {
    const {
      end_year,
      topics,
      sector,
      region,
      pestle,
      source,
      swot,
      country,
      city,
    } = filters;

    // Implement your filtering logic here using filters object
    return (
      (end_year === '' || item.end_year === end_year) &&
      (topics.length === 0 || topics.includes(item.topic)) &&
      (sector === '' || item.sector === sector) &&
      (region === '' || item.region === region) &&
      (pestle === '' || item.pestle === pestle) &&
      (source === '' || item.source === source) &&
      (swot === '' || item.swot === swot) &&
      (country === '' || item.country === country) &&
      (city === '' || item.city === city)
    );
  });

  return (
    <div className="data-visualization m-5 p-3 App" style={{ backgroundColor: "#ededff", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
      <h2 className="text-center mb-4">Data Visualization</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Bar Chart</h5>
              <BarChart data={filteredData} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Pie Chart</h5>
              <PieChart data={filteredData} />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Line Chart</h5>
              <LineChart data={filteredData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataVisualization;

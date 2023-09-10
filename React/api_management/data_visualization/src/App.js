import React, { useState, useEffect } from 'react';
import './App.css'; 
import FilterPanel from './components/FilterPanel';
import DataVisualization from './components/DataVisualization';

function App() {
  // State for storing data and filters
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    end_year: '',
    topics: [],
    sector: '',
    region: '',
    pestle: '',
    source: '',
    swot: '',
    country: '',
    city: '',
  });

  // Fetch data from the external API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3001/jsondata');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [filters]);

  // Handle filter changes
  const handleFilterChange = (filterName, filterValue) => {
    setFilters({ ...filters, [filterName]: filterValue });
  };

  return (<>
    <h1 className='p-4 mb-5 App' style={{ backgroundColor: "#ededff", color:"#5e0000" }}>Data Visualization Dashboard</h1>
    <div className="App">
      <div className="container">
        <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
        <DataVisualization data={data} filters={filters} />
      </div>
    </div></>
  );
}

export default App;

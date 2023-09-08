import React from 'react';

function FilterPanel({ filters, onFilterChange }) {
  // Handle filter changes
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    onFilterChange(name, value);
  };

  return (
    <div className="filter-panel container" style={{width:"50%",backgroundColor:"#ededff", padding:'10px'}}>
      <h2>Filters</h2>
      <div className="form-group">
        <label htmlFor="end_year">End Year:</label>
        <input
          type="text"
          id="end_year"
          name="end_year"
          className="form-control"
          value={filters.end_year}
          onChange={handleFilterChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="topics">Topics:</label>
        <select
          id="topics"
          name="topics"
          className="form-control"
          value={filters.topics}
          onChange={handleFilterChange}
          multiple
        >
          {/* Populate with available topics */}
          <option value="Gas">Gas</option>
          <option value="Oil">Oil</option>
          <option value="Market">Market</option>
          <option value="Gdp">Gdp</option>
          <option value="War">War</option>
          <option value="Production">Production</option>
          <option value="Export">Export</option>
          <option value="Consumption">Consumption</option>
          <option value="Battery">Battery</option>
          <option value="Strategy">Strategy</option>
          <option value="Biofuel">Biofuel</option>
          <option value="Economy">Economy</option>
          <option value="Policy">Policy</option>
          <option value="Robot">Robot</option>
          <option value="Growth">Growth</option>
          <option value="Energy">Energy</option>
          <option value=""></option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="sector">Sector:</label>
        <input
          type="text"
          id="sector"
          name="sector"
          className="form-control"
          value={filters.sector}
          onChange={handleFilterChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="region">Region:</label>
        <input
          type="text"
          id="region"
          name="region"
          className="form-control"
          value={filters.region}
          onChange={handleFilterChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pestle">PESTLE:</label>
        <input
          type="text"
          id="pestle"
          name="pestle"
          className="form-control"
          value={filters.pestle}
          onChange={handleFilterChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="source">Source:</label>
        <input
          type="text"
          id="source"
          name="source"
          className="form-control"
          value={filters.source}
          onChange={handleFilterChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="swot">SWOT:</label>
        <input
          type="text"
          id="swot"
          name="swot"
          className="form-control"
          value={filters.swot}
          onChange={handleFilterChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          className="form-control"
          value={filters.country}
          onChange={handleFilterChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          className="form-control"
          value={filters.city}
          onChange={handleFilterChange}
        />
      </div>
    </div>
  );
}

export default FilterPanel;

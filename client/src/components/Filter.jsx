import React from 'react'

const Filter = ({ handleFilter, filter }) => {
  return (
    <div className="filter">
        <button
          style={{ backgroundColor: filter.all && "#fedc74" }}
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          style={{ backgroundColor: filter.onyx && "#fedc74" }}
          onClick={() => handleFilter("onyx")}
        >
          Onyx
        </button>
        <button
          style={{ backgroundColor: filter.porcelain && "#fedc74" }}
          onClick={() => handleFilter("porcelain")}
        >
          Porcelain
        </button>
        <button
          style={{ backgroundColor: filter.marble && "#fedc74" }}
          onClick={() => handleFilter("marble")}
        >
          Marble
        </button>
        <button
          style={{ backgroundColor: filter.quartz && "#fedc74" }}
          onClick={() => handleFilter("quartz")}
        >
          Quartz
        </button>
      </div>
  )
}

export default Filter
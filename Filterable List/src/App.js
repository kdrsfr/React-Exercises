import React from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import Element from './element.js';

const allCategories = [...new Set(data.map((item) => item.category))];

function App() {
  const [categories, setCategories] = useState(allCategories);
  const [check, setCheck] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState(data);

  const handleChange = () => {
    setCheck(!check);
  };
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== '') {
      const filteredData = data.filter((item) => {
        return Object.values(item.name)
          .join('')
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  return (
    <>
      <div className="wrapper">
        <form>
          <div>
            <input
              type="search"
              onChange={(e) => searchItems(e.target.value)}
            ></input>

            <label htmlFor="show-only">Show Only Stock</label>
            <input
              type="checkbox"
              id="show-only"
              checked={check}
              onChange={handleChange}
            ></input>
          </div>
          <div className="list-wrap">
            <ul>
              <Element
                categories={categories}
                check={check}
                filteredResults={filteredResults}
              />
            </ul>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;

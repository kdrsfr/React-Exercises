import data from './data.json';
import { useState, useEffect } from 'react';

const Element = ({ categories, check, filteredResults }) => {
  useEffect(() => {}, [check]);
  var last = '';
  if (filteredResults.length > 0) {
    return (
      <>
        {categories.map((item) => {
          const filtered = filteredResults.filter((element) => {
            if (!check) {
              return element.category === item;
            } else {
              return element.category === item && element.stocked === true;
            }
          });

          return (
            <>
              {filtered.map((map) => {
                if (last != map.category) {
                  last = map.category;
                  return <h2>{map.category}</h2>;
                }
              })}
              {filtered.map((filtered) => {
                const { name, price, stocked, category } = filtered;
                console.log(filteredResults);
                return (
                  <>
                    <ul>
                      <li>{name}</li>
                      <li>{stocked ? 'In Stock' : 'Not Stock '}</li>
                      <li>{price}</li>
                    </ul>
                  </>
                );
              })}
            </>
          );
        })}
      </>
    );
  } else {
    return (
      <>
        <h4>Nothing Found</h4>
      </>
    );
  }
};

export default Element;

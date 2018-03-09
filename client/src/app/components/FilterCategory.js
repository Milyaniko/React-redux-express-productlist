import React from 'react'

const filterCategory = ({ products, isFetching, categoryFilter }) => (
  <div className="dropdown filter filter-category">
    <input className="dropdown-toggle" type="text" />
    <div className="dropdown-text">Category</div>
    <ul className="dropdown-content">
      {isFetching === false ? products.map((product) => product.category).filter((a, b, c) => c.indexOf(a) === b).map((item, i) => {
        console.log(item)
        console.log(isFetching);
        return <li key={i}><input type="checkbox" value={`${item}`} onClick={() => categoryFilter(item)} />{item}</li>
      }) : null}
    </ul>
  </div>
);

export default filterCategory;
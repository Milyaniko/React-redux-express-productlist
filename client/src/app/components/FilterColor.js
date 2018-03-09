import React from 'react'

const FilterColor = ({ products, isFetching, colorFilter }) => (
    <div className="dropdown filter filter-colors">
        <input className="dropdown-toggle" type="text" />
        <div className="dropdown-text">Color</div>
        <ul className="dropdown-content">
            {isFetching === false ? products.map((product) => product.color).filter((a, b, c) => c.indexOf(a) === b).map((item, i) => {
                console.log(item)
                console.log(isFetching);
                return <li key={i}><input type="checkbox" value={`${item}`} onClick={() => colorFilter(item)} />{item}</li>
            }) : null}
        </ul>
    </div>
);

export default FilterColor;
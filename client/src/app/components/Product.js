import React from 'react';

const Product = ({ products, category, color }) => (
    <div className="products-list">
        {products.map(product => { // eslint-disable-line
            if (
                (category.indexOf(product.category) !== -1 && color.indexOf(product.color) !== -1) // Colors and Categories are both selected
                || (category.indexOf(product.category) !== -1 && color.length === 0) // Only Category is selected
                || (color.indexOf(product.color) !== -1 && category.length === 0) // Only color is selected
                || (category.length === 0 && color.length === 0) // Nothing is selected
            ) {
                return (
                    <div key={product.id} className="product-container">
                        <ul >
                            <img alt="" src={`http://localhost:3000/images/${product.category}-${product.color}.png`} className="product-image" />
                            <li>Name: <span>{product.name}</span></li>
                            <li>Price: <span>{product.price}$</span></li>
                            <li>Category: <span>{product.category}</span></li>
                        </ul>
                    </div>
                );
            }
        })
        }
    </div>
);

export default Product;
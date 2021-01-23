import React from 'react';
import './SortProduct.css';

const SortProduct = (props) => {
    return (
        <div className="sortContainer">
            <div className="sortCount">
                <span>{props.smartphonesCounts} products found</span>
            </div>
            <div className="sortProduct">
                <span>Order</span>
                <select className="form-select" value={props.sort} onChange={props.handleSort} >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                </select>
            </div>
        </div>
    )
}

export default SortProduct

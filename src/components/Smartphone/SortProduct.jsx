import React from 'react';
import './SortProduct.css';

const SortProduct = (props) => {
    return (
        <div className="sortContainer">
            <div className="sortCount">
                <span>{props.smartphones.length} products found</span>
            </div>
            <div className="sortProduct">
                <span>Filter</span>
                <select className="form-select" value={props.sort.filter} onChange={props.handleFilter} >
                    <option value="apple">Apple</option>
                    <option value="huawei">Huawei</option>
                    <option value="onePlus">OnePlus</option>
                    <option value="oppo">Oppo</option>
                    <option value="samsung">Samsung</option>
                    <option value="xiaomi">Xiaomi</option>
                </select>
                <span>Order</span>
                <select className="form-select" value={props.sort.sort} onChange={props.handleSort} >
                    <option value="oldest">Oldest</option>
                    <option value="newest">Newest</option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                </select>
            </div>
        </div>
    )
}

export default SortProduct

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSmartphoneFilter, setSmartphoneSort } from "../../Redux/SmartphoneDucks";
import "./SortProduct.css";

const SortProduct = () => {
    const dispatch = useDispatch();
    const smartphones = useSelector(state => state.smartphones)

  return (
    <div className="sortContainer">
      <div className="sortCount">
        <span> products found</span>
      </div>
      <div className="sortProduct">
        <span>Filter</span>
        <select
          className="form-select"
          value={smartphones.sort.filter}
          onChange={(e) => dispatch(setSmartphoneFilter(e))}
        >
          <option value="all">All</option>
          <option value="apple">Apple</option>
          <option value="huawei">Huawei</option>
          <option value="onePlus">OnePlus</option>
          <option value="oppo">Oppo</option>
          <option value="samsung">Samsung</option>
          <option value="xiaomi">Xiaomi</option>
        </select>
        <span>Order</span>
        <select
          className="form-select"
          value={smartphones.sort.sort}
          onChange={(e) => dispatch(setSmartphoneSort(e))}
        >
          <option value="oldest">Oldest</option>
          <option value="newest">Newest</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default SortProduct;

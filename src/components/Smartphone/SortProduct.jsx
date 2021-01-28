import React from "react";
import { setSmartphoneFilter, setSmartphoneSort } from "../../Redux/SmartphoneDucks";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSort } from "@fortawesome/free-solid-svg-icons";
import "./SortProduct.css";

const SortProduct = () => {
  // Redux
    const dispatch = useDispatch();
    const smartphones = useSelector(state => state.smartphones)

  return (
    <div className="sortContainer">
      <div className="sortCount">
        <span>{smartphones.smartphonesFiltered.length} products found</span>
      </div>
      <div className="sortProduct">
        <span><FontAwesomeIcon className="faIconsSort" icon={faFilter}/>Filter</span>
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
        <span><FontAwesomeIcon className="faIconsSort" icon={faSort}/>Sort</span>
        <select
          className="form-select"
          value={smartphones.sort.sort}
          onChange={(e) => dispatch(setSmartphoneSort(e.target.value))}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default SortProduct;

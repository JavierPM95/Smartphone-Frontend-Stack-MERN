import React, { useEffect, useState } from "react";

/* React Redux */
import { useDispatch, useSelector } from "react-redux";
import { deleteSmartphone, getSmartphone } from "../../Redux/SmartphoneDucks";

//Components
import ModalForm from "./ModalForm";
import "./smartphoneList.css";

//icons
import dimentionSmartphone from "../../icons/dimentionSmartphone.svg";
import cpuSmartphone from "../../icons/cpuSmartphone.svg";
import batterySmartphone from "../../icons/batterySmartphone.svg";
import cameraSmartphone from "../../icons/cameraSmartphone.svg";

//Thirds Packages
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import SortProduct from "./SortProduct";

const SmartphoneList = () => {
  //Redux Connection
  const dispatch = useDispatch();
  const smartphones = useSelector((store) => store.smartphones.smartphoneArray);

  // Load Content
  const loadSmartphone = () => {
    dispatch(getSmartphone());
  };

  useEffect(() => {
    loadSmartphone();
  }, []);

  // SORT COMPONENT

  let initialStateSort = {
    sort: '',
    filter: ''
  };

  const [sort, setSort] = useState(initialStateSort);

  const handleSort = (e) => {
    const sortSelected = e.target.value;
    setSort({...sort, sort: sortSelected});
    switch (sortSelected) {
      case "newest":
        smartphones.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
        break;
      case "oldest":
        smartphones.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1));
        break;
      case "a-z":
        smartphones.sort((a, b) => (a.name > b.name ? 1 : -1));
        break;
      case "z-a":
        smartphones.sort((a, b) => (a.name < b.name ? 1 : -1));
        break;
      default: smartphones.sort((a, b) => (a._id < b._id ? 1 : -1));
        break;
    }
  };

  const handleFilter = (e) => {
    const filterSelected = e.target.value;
    setSort({...sort, filter: filterSelected});
    // const smartphoneBrand = smartphones.filter(smartphone => smartphone.name.split(' ')[0] === filterSelected)
    switch (filterSelected) {
      case "apple":
        smartphones.filter((smartphone) => (/apple/gi.test(smartphone.name)));
        break;
      case "huawei":
        smartphones.filter((smartphone) => (/huawei/gi.test(smartphone.name)));
        break;
      case "onePlus":
        console.log(smartphones.filter((smartphone) => (/onePlus/gi.test(smartphone.name))));
        break;
      case "oppo":
        console.log(smartphones.filter((smartphone) => (/oppo/gi.test(smartphone.name))));
        break;
      case "samsung":
        console.log(smartphones.filter((smartphone) => (/samsung/gi.test(smartphone.name))));
        break;
      case "xiaomi":
        console.log(smartphones.filter((smartphone) => (/xiaomi/gi.test(smartphone.name))));
        break;
      default: smartphones.sort((a, b) => (a._id < b._id ? 1 : -1));
        break;
    }

  } 

  // MODAL COMPONENT
  //Handle Events
  const handleDelete = async (smartphone) => {
    if (
      window.confirm(`You really want to delete ${smartphone.name} smartphone?`)
    ) {
      await dispatch(deleteSmartphone(smartphone._id));
      toast.error("The smartphone erased successfully");
      loadSmartphone();
    }
  };

  // Modals Buttons Appearances
  const newSmartphoneModal = (
    <button className="btn btn-success">Add new smartphone</button>
  );
  const editSmartphoneModal = (
    <span>
      <FontAwesomeIcon icon={faEdit} />
    </span>
  );

  return (
    <>
      <SortProduct
        smartphones={smartphones}
        initialStateSort={initialStateSort}
        handleSort={handleSort}
        handleFilter={handleFilter}
        sort={sort}
      />
      <div className="row my-4">
        <h2>Smartphone List</h2>
        <div className="ml-auto">
          <ModalForm
            newSmartphoneModal={newSmartphoneModal}
            smartphones={smartphones}
            loadSmartphone={loadSmartphone}
            cpuSvg={cpuSmartphone}
            dimentionSmartphoneSvg={dimentionSmartphone}
            cameraSmartphoneSvg={cameraSmartphone}
            batterySmartphoneSvg={batterySmartphone}
          />
        </div>
      </div>
      <div className="row">
        <div className="d-flex cardList">
          {smartphones.map((smartphone) => (
            <div key={smartphone._id} className="spCard">
              <div className="d-flex">
                <div className="col-md-4 smartphoneCardImgContainer">
                  <img
                    className="smartphoneCardImg"
                    src={smartphone.urlImg}
                    alt="smartphone-img"
                    title={smartphone.name}
                  />
                </div>
                <div className="col-md-7 spCardDetail">
                  <div className="spCardTitle">
                    <h5 className="">{smartphone.name}</h5>
                    <div className="configButton">
                      <div className="editButton" title="Edit smartphone">
                        <ModalForm
                          smartphone={smartphone}
                          editSmartphoneModal={editSmartphoneModal}
                          smartphones={smartphones}
                          loadSmartphone={loadSmartphone}
                          cpuSvg={cpuSmartphone}
                          dimentionSmartphoneSvg={dimentionSmartphone}
                          cameraSmartphoneSvg={cameraSmartphone}
                          batterySmartphoneSvg={batterySmartphone}
                        />
                      </div>
                      <span
                        className="deleteButton"
                        title="Delete smartphone"
                        onClick={() => {
                          handleDelete(smartphone);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </span>
                    </div>
                  </div>
                  <div>
                    <ul className="spCardList">
                      <li className="item-features">
                        <span className="bgCircle">
                          <img src={cpuSmartphone} alt="Smartphone CPU" />
                        </span>
                        <span className="item-features-details">
                          {smartphone.cpu}
                        </span>
                      </li>
                      <li className="item-features">
                        <span className="bgCircle">
                          <img
                            src={dimentionSmartphone}
                            alt="Smartphone Dimention"
                          />
                        </span>
                        <span className="item-features-details">
                          {smartphone.screenDimention}"
                        </span>
                      </li>
                      <li className="item-features">
                        <span className="bgCircle">
                          <img src={cameraSmartphone} alt="Smartphone Camera" />
                        </span>
                        <span className="item-features-details">
                          {smartphone.mainCamera} Mpx
                        </span>
                      </li>
                      <li className="item-features">
                        <span className="bgCircle">
                          <img
                            src={batterySmartphone}
                            alt="Smartphone Battery"
                          />
                        </span>
                        <span className="item-features-details">
                          {smartphone.power} mAh
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default SmartphoneList;

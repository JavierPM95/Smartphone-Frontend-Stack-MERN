import React, { useEffect } from "react";

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
  const smartphones = useSelector(
    (store) => store.smartphones.smartphonesFiltered
  );

  // Load Content
  const loadSmartphone = () => {
    dispatch(getSmartphone());
  };

  useEffect(() => {
    loadSmartphone();
  }, []);

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
    <button className="btn" onClick={() => smartphones}>aqui</button>
      <SortProduct />
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
      {!smartphones ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
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
                            smartphones={smartphones}
                            smartphone={smartphone}
                            loadSmartphone={loadSmartphone}
                            editSmartphoneModal={editSmartphoneModal}
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
                            <img
                              src={cameraSmartphone}
                              alt="Smartphone Camera"
                            />
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
      )}
    </>
  );
};

export default SmartphoneList;

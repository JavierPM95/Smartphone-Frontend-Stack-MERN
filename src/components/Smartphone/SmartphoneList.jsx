import React, { useEffect } from "react";

/* React Redux */
import { useDispatch, useSelector } from "react-redux";
import { deleteSmartphone, getSmartphone } from "../../Redux/SmartphoneDucks";

//Components
import ModalForm from './ModalForm'
import "./smartphoneList.css";

//icons
import dimentionSmartphone from "../../icons/dimentionSmartphone.svg";
import cpuSmartphone from "../../icons/cpuSmartphone.svg";
import batterySmartphone from "../../icons/batterySmartphone.svg";
import cameraSmartphone from "../../icons/cameraSmartphone.svg";

//Thirds Packages
import { toast, ToastContainer } from "react-toastify";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'

const SmartphoneList = () => {
  
  //Redux Connection
  const dispatch = useDispatch();
  const smartphones = useSelector((store) => store.smartphones.smartphoneArray);
  

  // Load Content
  const loadSmartphone = () => {
    dispatch(getSmartphone());
  }

  useEffect(() => {
    loadSmartphone()
  }, [])


  //Handle Events
  const handleDelete = async(id) => {
    if (window.confirm('You really want to delete this smartphone?')) {
      await dispatch(deleteSmartphone(id))
      toast.error('The smartphone erased successfully')
      loadSmartphone();
    };
  }


  // Modals Buttons Appearances
  const newSmartphoneModal = <button className="btn btn-success">Add new smartphone</button>
  const editSmartphoneModal = <span><FontAwesomeIcon icon={faEdit} /></span>

  return (
    <>
      <div className="row my-4">
        <h2>Smartphone List</h2>
        <div className="ml-auto">
              <ModalForm newSmartphoneModal={newSmartphoneModal} smartphones={smartphones} loadSmartphone={loadSmartphone} cpuSvg={cpuSmartphone} dimentionSmartphoneSvg={dimentionSmartphone} cameraSmartphoneSvg={cameraSmartphone} batterySmartphoneSvg={batterySmartphone} />
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
                      <ModalForm smartphone={smartphone} editSmartphoneModal={editSmartphoneModal} smartphones={smartphones} loadSmartphone={loadSmartphone} cpuSvg={cpuSmartphone} dimentionSmartphoneSvg={dimentionSmartphone} cameraSmartphoneSvg={cameraSmartphone} batterySmartphoneSvg={batterySmartphone} />
                      </div>
                      <span className="deleteButton" title="Delete smartphone" onClick={() => {handleDelete(smartphone._id)}}><FontAwesomeIcon icon={faTrash} /></span>
                    </div>
                  </div>
                  <div>
                    <ul className="spCardList">
                      <li className="item-features">
                        <span className="bgCircle">
                          <img src={cpuSmartphone} alt="Smartphone CPU" />
                        </span>
                        <span>{smartphone.cpu}</span>
                      </li>
                      <li className="item-features">
                        <span className="bgCircle">
                          <img
                            src={dimentionSmartphone}
                            alt="Smartphone Dimention"
                            
                          />
                        </span>
                        <span>{smartphone.screenDimention}"</span>
                      </li>
                      <li className="item-features">
                        <span className="bgCircle">
                          <img src={cameraSmartphone} alt="Smartphone Camera" />
                        </span>
                        <span>{smartphone.mainCamera} Mpx</span>
                      </li>
                      <li className="item-features">
                        <span className="bgCircle">
                          <img
                            src={batterySmartphone}
                            alt="Smartphone Battery"
                            
                          />
                        </span>
                        <span>{smartphone.power} mAh</span>
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

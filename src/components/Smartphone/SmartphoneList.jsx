import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { smartphoneAction } from "../../Redux/SmartphoneDucks";
import "./smartphoneList.css";

//icons
import dimentionSmartphone from "../../icons/dimentionSmartphone.svg";
import cpuSmartphone from "../../icons/cpuSmartphone.svg";
import batterySmartphone from "../../icons/batterySmartphone.svg";
import cameraSmartphone from "../../icons/cameraSmartphone.svg";
import ModalForm from './ModalForm'

const SmartphoneList = () => {
  const dispatch = useDispatch();

  const smartphones = useSelector((store) => store.smartphones.smartphoneArray);
  console.log(smartphones);

  return (
    <>
      <div className="row my-4">
        <h2>Smartphone List</h2>
        <div className="ml-auto">
          <ModalForm cpuSvg={cpuSmartphone} dimentionSmartphoneSvg={dimentionSmartphone} cameraSmartphoneSvg={cameraSmartphone} batterySmartphoneSvg={batterySmartphone} />
          <button
            className="btn btn-primary"
            onClick={() => dispatch(smartphoneAction())}
          >
            Get smartphones
          </button>
        </div>
      </div>
      <div className="row">
        <div className="d-flex">
          {smartphones.map((smartphone) => (
            <div key={smartphone._id} className="spCard">
              <div className="d-flex">
                <div className="col-md-4 smartphoneCardImgContainer">
                  <img
                    className="smartphoneCardImg"
                    src={smartphone.urlImg}
                    alt="smartphone-img"
                  />
                </div>
                <div className="col-md-7 spCardDetail">
                  <div>
                    <h5 className="">{smartphone.name}</h5>
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
                        <span>{smartphone.screenDimention}</span>
                      </li>
                      <li className="item-features">
                        <span className="bgCircle">
                          <img src={cameraSmartphone} alt="Smartphone Camera" />
                        </span>
                        <span>{smartphone.mainCamera}</span>
                      </li>
                      <li className="item-features">
                        <span className="bgCircle">
                          <img
                            src={batterySmartphone}
                            alt="Smartphone Battery"
                          />
                        </span>
                        <span>{smartphone.power}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SmartphoneList;

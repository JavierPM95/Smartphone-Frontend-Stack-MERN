import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

/* React Redux */
import {useDispatch} from 'react-redux';

/* Components */
import "./modalForm.css";
import { createSmartphone, editSmartphone } from "../../Redux/SmartphoneDucks";

// Thirds Packages
import {toast} from 'react-toastify'


const ModalForm = (props) => {
    const dispatch = useDispatch()

  const initialSmartphoneState = {
    name: "",
    urlImg: "",
    cpu: "",
    screenDimention: "",
    mainCamera: "",
    power: "",
  }

  const [smartphoneFeatures, setSmartphoneFeatures] = useState(initialSmartphoneState);

  /* Handle Input Form */
  const handleInputChange = (e) => {
    setSmartphoneFeatures({
      ...smartphoneFeatures,
      [e.target.name]: e.target.value,
    });
  };

/* Handle Submit Form */
  const handleCreateSubmitForm = async (e) => {
    e.preventDefault();
    await dispatch(createSmartphone(smartphoneFeatures))
    toast.success('New smartphone added successfully')
    setSmartphoneFeatures(initialSmartphoneState)
    props.loadSmartphone();
    toggleModal();
}

  const handleEditSubmitForm = async(smartphoneFeatures) => {
    await dispatch(editSmartphone(smartphoneFeatures))
    toast.warn('Smartphone update successfully');
    setSmartphoneFeatures(initialSmartphoneState);
    props.loadSmartphone();
    toggleModal();
  }

// Close Modal
const closeModal = () => {
  setSmartphoneFeatures(initialSmartphoneState)
  toggleModal();
}

  /* Modal Open/Close */
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <>
      {/* <div onClick={() => toggleModal(setSmartphoneFeatures(props.smartphone))}>{props.newSmartphoneModal ? props.newSmartphoneModal : props.editSmartphoneModal}</div> */}
        {props.smartphone ?
          <div onClick={() => toggleModal(setSmartphoneFeatures(props.smartphone))}>{props.editSmartphoneModal}</div>
          :
          <div onClick={() => toggleModal()}>{props.newSmartphoneModal}</div>
        }
      <Modal isOpen={modal} toggle={toggleModal} autoFocus={true} >
        <ModalHeader className=" text-white font-weight-bold bg-primary">
          <div className="modalHeader">
            {props.newSmartphoneModal ? "Add a new smartphone" : "Edit smarthone"}
          </div>
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group modalGroup">
              <label htmlFor="" className="required">
                Smartphone name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Xiaomi Mi 11"
                onChange={handleInputChange}
                value={smartphoneFeatures.name}
                required
                autoFocus /*{modal ? (autofocus) : (null)}*/
              />
            </div>
            <div className="form-group modalGroup">
              <label htmlFor="">Smartphone image</label>
              <input
                type="url"
                className="form-control"
                name="urlImg"
                placeholder="http://MySmartphoneImage.com/phone.jpg"
                onChange={handleInputChange}
                value={smartphoneFeatures.urlImg}
              />
              <small className="form-text text-muted">
                Only url direcctions
              </small>
            </div>
            <div className="form-group modalGroup">
              <label htmlFor="" className="required">
                CPU
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text spSquare">
                    <img src={props.cpuSvg} alt="cpu"/>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="cpu"
                  placeholder="SnapDragon 888"
                  onChange={handleInputChange}
                  value={smartphoneFeatures.cpu}
                  required
                />
              </div>
            </div>
            <div className="form-group modalGroup">
              <label htmlFor="" className="required">
                Screen dimention
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text spSquare">
                    <img
                      src={props.dimentionSmartphoneSvg}
                      alt="Screen dimention"
                    />
                  </span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  name="screenDimention"
                  placeholder="6.81"
                  onChange={handleInputChange}
                  value={smartphoneFeatures.screenDimention}
                  required
                />
              </div>
            </div>
            <div className="form-group modalGroup">
              <label htmlFor="" className="required">
                Main camera resolution
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text spSquare">
                    <img
                      src={props.cameraSmartphoneSvg}
                      alt="Main Camera Resolution"
                    />
                  </span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  name="mainCamera"
                  placeholder="108"
                  onChange={handleInputChange}
                  value={smartphoneFeatures.mainCamera}
                  required
                />
              </div>
            </div>
            <div className="form-group modalGroup">
              <label htmlFor="" className="required">
                Battery capacity
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text spSquare">
                    <img
                      src={props.batterySmartphoneSvg}
                      alt="Battery Capacity"
                    />
                  </span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  name="power"
                  placeholder="4600"
                  onChange={handleInputChange}
                  value={smartphoneFeatures.power}
                  required
                />
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-secondary" onClick={closeModal}>
            Return
          </button>
          {props.newSmartphoneModal ? 
            <button className="btn btn-success" onClick={handleCreateSubmitForm} >Create smartphone</button>
            :
            <button className="btn btn-warning" onClick={() => {handleEditSubmitForm(smartphoneFeatures)}} >Update smartphone</button>
          }
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalForm;

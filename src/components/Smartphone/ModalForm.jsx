import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import './modalForm.css'

const ModalForm = (props) => {

const [modal, setModal] = useState(false)

const toggleModal = () => setModal(!modal)

    return (
        <>
            <button className="btn btn-success" onClick={toggleModal} >Open Modal</button>
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader className="text-primary font-weight-bold">
                    Add a new smartphone
                </ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group modalGroup">
                            <label htmlFor="" className="required" >Smartphone name</label>
                            <input type="text" className="form-control" name="" placeholder="Xiaomi Mi 11" required /*{modal ? (autofocus) : (null)}*/ />
                        </div>
                        <div className="form-group modalGroup">
                            <label htmlFor="">Smartphone image</label>
                            <input type="url" className="form-control" name="" placeholder="http://MySmartphoneImage.com/phone.jpg" />
                            <small className="form-text text-muted">Only url direcctions</small>
                        </div>
                        <div className="form-group modalGroup">
                            <label htmlFor="" className="required">CPU</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text spSquare"><img src={props.cpuSvg} alt="cpu"/></span>
                                </div>
                                <input type="text" className="form-control" name="" placeholder="SnapDragon 888" required />
                            </div>
                        </div>
                        <div className="form-group modalGroup">
                            <label htmlFor="" className="required">Screen dimention</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text spSquare"><img src={props.dimentionSmartphoneSvg} alt="Screen dimention"/></span>
                                </div>
                                <input type="number" className="form-control" name="" placeholder="6.81" required />
                            </div>
                        </div>
                        <div className="form-group modalGroup">
                            <label htmlFor="" className="required">Main camera resolution</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text spSquare"><img src={props.cameraSmartphoneSvg} alt="Main Camera Resolution"/></span>
                                </div>
                                <input type="number" className="form-control" name="" placeholder="108" required />
                            </div>
                        </div>
                        <div className="form-group modalGroup">
                            <label htmlFor="" className="required">Battery capacity</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text spSquare"><img src={props.batterySmartphoneSvg} alt="Battery Capacity"/></span>
                                </div>
                                <input type="number" className="form-control" name="" placeholder="4600" required />
                            </div>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-secondary" onClick={toggleModal}>Return</button>
                    <button className="btn btn-success">Create smartphone</button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default ModalForm

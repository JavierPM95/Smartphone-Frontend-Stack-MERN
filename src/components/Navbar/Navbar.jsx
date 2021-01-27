import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import React, { useState } from "react";
import {Link} from 'react-router-dom'
import './Navbar.css'
import { useSelector } from "react-redux";

const Navbar = () => {
  const smartphones = useSelector(state => state.smartphones)


  const [dropDown, setDropDown] = useState(false)

  const dropDownToggle = () => {
    setDropDown(!dropDown)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span aria-label="smartphone">📱</span> Smartphone
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <Dropdown className="dropdown" inNavbar={true} isOpen={dropDown} toggle={dropDownToggle}>
                <DropdownToggle variant="primary" caret>
                  <FontAwesomeIcon className="faIconsFavNav" icon={faHeart}/> Favorite
                </DropdownToggle>
                <DropdownMenu>
                  {
                    smartphones.favorites.length <= 0 ? <DropdownItem header disabled>Add smartphones to favorite list</DropdownItem>
                    :
                    smartphones.favorites.map(smartphone => (<DropdownItem key={smartphone._id}>{smartphone.name} <FontAwesomeIcon icon={faHeartBroken} /> </DropdownItem>))
                  }
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

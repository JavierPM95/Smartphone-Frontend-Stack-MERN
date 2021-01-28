import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { dropdownToggle, removeFavorite } from "../../Redux/FavoritesDucks";
import { toast } from "react-toastify";

const Navbar = () => {
  // Redux
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  //Favorite Toggle State
  const dropdownState = favorites.dropdown;
  const setDropdown = () => {
    dispatch(dropdownToggle());
  };

  //Favorite Handle
  const removeFavorites = async (smartphone) => {
    await dispatch(removeFavorite(smartphone));
    toast.error(`${smartphone.name} have been removed from favorite list`);
  };

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
              <Dropdown
                className="dropdown"
                inNavbar={true}
                isOpen={dropdownState}
                toggle={setDropdown}
              >
                <DropdownToggle variant="primary" caret>
                  <FontAwesomeIcon className="faIconsFavNav" icon={faHeart} />{" "}
                  Favorite
                </DropdownToggle>
                <DropdownMenu right>
                  {favorites.favorites.length <= 0 ? (
                    <DropdownItem header disabled>
                      Add smartphones to the favorite list
                    </DropdownItem>
                  ) : (
                    favorites.favorites.map((smartphone) => (
                      <DropdownItem
                        key={smartphone._id}
                        className="dropdownItemContainer"
                      >
                        <div className="spImgFavContainer">
                          <img
                            className="spImgFav"
                            src={smartphone.urlImg}
                            alt={smartphone.name}
                          />
                        </div>
                        <div className="spNameFav">{smartphone.name}{" "} </div>
                        <span className="faIconsFavContainer">
                          <FontAwesomeIcon
                            className="faIconsFav"
                            icon={faHeartBroken}
                            onClick={() => removeFavorites(smartphone)}
                          />
                        </span>{" "}
                      </DropdownItem>
                    ))
                  )}
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

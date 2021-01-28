const favoritesInitialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  dropdown: false,
  alreadyExist: false
};

// Types
const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";
const DROPDOWN_TOGGLE = "DROPDOWN_TOGGLE";

//Reducer
export default function smartphoneReducer(
  state = favoritesInitialState,
  action
) {
  switch (action.type) {
    case ADD_FAVORITE:
      // const newFavoriteList = state.favorites.concat(action.payload);
      return {
        ...state,
        favorites: action.payload.favoriteList,
        dropdown: true,
        alreadyExist: action.payload.alreadyExist
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: action.payload,
      };
    case DROPDOWN_TOGGLE:
      return {
        ...state,
        dropdown: action.payload,
      };
    default:
      return state;
  }
}

// Actions

export const addFavorite = (smartphone) => (dispatch, getState) => {
  const favoriteList = getState().favorites.favorites.slice();
  let alreadyExist = false;

  if (
    favoriteList.filter((favorite) => favorite._id === smartphone._id).length >=
    1
  ) {
    alreadyExist = true;
  }
  if (alreadyExist === false) {
    favoriteList.push(smartphone);
  }
  dispatch({
    type: ADD_FAVORITE,
    payload: {favoriteList: favoriteList, alreadyExist: alreadyExist}
  });
  localStorage.setItem("favorites", JSON.stringify(favoriteList));
};

export const removeFavorite = (smartphone) => (dispatch, getState) => {
  const favoriteList = getState().favorites.favorites;
  const favoriteRemove = favoriteList.filter(
    (favorite) => favorite._id !== smartphone._id
  );
  dispatch({
    type: REMOVE_FAVORITE,
    payload: favoriteRemove,
  });
  localStorage.setItem("favorites", JSON.stringify(favoriteRemove));
};

export const dropdownToggle = () => (dispatch, getState) => {
  const dropdownToggle = !getState().favorites.dropdown;
  dispatch({
    type: DROPDOWN_TOGGLE,
    payload: dropdownToggle,
  });
};

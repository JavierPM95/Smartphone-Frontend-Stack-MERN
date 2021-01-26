import axios from "axios";

//Constants

const smartphoneInitialState = {
  smartphoneArray: [],
  smartphonesFiltered: [],
  sort: {},
};

//Types
const GET_SMARTPHONES = "GET_SMARTPHONES";
const CREATE_SMARTPHONE = "CREATE_SMARTPHONE";
const DELETE_SMARTPHONE = "DELETE_SMARTPHONE";
const UPDATE_SMARTPHONE = "UPDATE_SMARTPHONE";
const SET_SMARTPHONE_FILTER = "SET_SMARTPHONE_FILTER";
const SET_SMARTPHONE_SORT = "SET_SMARTPHONE_SORT";

//Reducer

export default function smartphoneReducer(
  state = smartphoneInitialState,
  action
) {
  switch (action.type) {
    case GET_SMARTPHONES:
      return {
        ...state,
        smartphoneArray: action.payload,
        smartphonesFiltered: action.payload,
      };
    case CREATE_SMARTPHONE:
      const newSmartphone = state.smartphonesFiltered.concat(action.payload);
      return { ...state, newSmartphone };
    case DELETE_SMARTPHONE:
      const filterSmartphone = state.smartphonesFiltered.filter(
        (smartphone) => smartphone.id !== action.payload.id
      );
      return { ...state, smartphonesFiltered: filterSmartphone };
    case UPDATE_SMARTPHONE:
      return { ...state, smartphonesFiltered: filterSmartphone };
    case SET_SMARTPHONE_FILTER:
      return {
        ...state,
        smartphonesFiltered: action.payload.smartphoneFiltered,
        sort: action.payload.filterSelected,
      };
    case SET_SMARTPHONE_SORT:
      return {
        ...state,
        smartphonesFiltered: action.payload.smartphonesSorted,
        sort: action.payload.sortSelected,
      };
    default:
      return state;
  }
}

//Actions
export const getSmartphone = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:4100/");
    dispatch({
      type: GET_SMARTPHONES,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const createSmartphone = (smartphoneFeatures) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:4100/", smartphoneFeatures);
    dispatch({
      type: CREATE_SMARTPHONE,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteSmartphone = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`http://localhost:4100/${id}`);
    dispatch({
      type: DELETE_SMARTPHONE,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const editSmartphone = (smartphoneFeatures) => async (dispatch) => {
  try {
    const id = smartphoneFeatures._id;
    const res = await axios.put(
      `http://localhost:4100/${id}`,
      smartphoneFeatures
    );
    dispatch({
      type: UPDATE_SMARTPHONE,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const setSmartphoneFilter = (e) => (dispatch, getState) => {
  const filterSelected = e.target.value;
  const smartphones = getState().smartphones.smartphoneArray;
  const smartphonesFiltered = () => {
    switch (filterSelected) {
      case "apple":
        return smartphones.filter((smartphone) =>
          /apple/gi.test(smartphone.name)
        );
      case "huawei":
        return smartphones.filter((smartphone) =>
          /huawei/gi.test(smartphone.name)
        );
      case "onePlus":
        return smartphones.filter((smartphone) =>
          /onePlus/gi.test(smartphone.name)
        );
      case "oppo":
        return smartphones.filter((smartphone) =>
          /oppo/gi.test(smartphone.name)
        );
      case "samsung":
        return smartphones.filter((smartphone) =>
          /samsung/gi.test(smartphone.name)
        );
      case "xiaomi":
        return smartphones.filter((smartphone) =>
          /xiaomi/gi.test(smartphone.name)
        );
      default:
        return smartphones.sort((a, b) => (a._id < b._id ? 1 : -1));
    }
  };
  dispatch({
    type: SET_SMARTPHONE_FILTER,
    payload: {
      smartphoneFiltered: smartphonesFiltered(),
      filterSelected: { filter: filterSelected },
    },
  });
};

export const setSmartphoneSort = (e) => (dispatch, getState) => {
  const sortSelected = e.target.value;
  const smartphones = getState().smartphones.smartphonesFiltered;
  const smartphonesSorted = () => {
    switch (sortSelected) {
      case "newest":
        return smartphones.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
      case "oldest":
        return smartphones.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1));
      case "a-z":
        return smartphones.sort((a, b) => (a.name > b.name ? 1 : -1));
      case "z-a":
        return smartphones.sort((a, b) => (a.name < b.name ? 1 : -1));
      default:
        return smartphones.sort((a, b) => (a._id < b._id ? 1 : -1));
    }
  };
  dispatch({
    type: SET_SMARTPHONE_SORT,
    payload: {
      smartphonesSorted: smartphonesSorted(),
      sortSelected: { sort: sortSelected },
    },
  });
};

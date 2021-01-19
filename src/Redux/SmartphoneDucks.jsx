import axios from 'axios'


//Constants

const smartphoneInitialState = {
    smartphoneArray : []
}

//Types
const GET_SMARTPHONES = 'GET_SMARTPHONES';
const CREATE_SMARTPHONE = 'CREATE_SMARTPHONE';
const DELETE_SMARTPHONE = 'DELETE_SMARTPHONE';
const UPDATE_SMARTPHONE = 'UPDATE_SMARTPHONE';


//Reducer

export default function smartphoneReducer (state = smartphoneInitialState, action){
    switch (action.type) {
        case GET_SMARTPHONES:
            return {...state, smartphoneArray: action.payload};
        case CREATE_SMARTPHONE:
            const newSmartphone = state.smartphoneArray.concat(action.payload)
            return {...state, newSmartphone};
        case DELETE_SMARTPHONE:
            const filterSmartphone = state.smartphoneArray.filter(smartphone => (smartphone.id !== action.payload.id))
            return {...state, smartphoneArray: filterSmartphone};
        case UPDATE_SMARTPHONE:
            return {...state, smartphoneArray: filterSmartphone};
        default:
            return state;
    }
} 

//Actions
export const getSmartphone = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('http://localhost:4100/');
        dispatch({
            type: GET_SMARTPHONES,
            payload: res.data
        })
    } catch (error) {
        console.error(error)
    }
}


export const createSmartphone = (smartphoneFeatures) => async (dispatch, getState) => {
    try {
        const res = await axios.post('http://localhost:4100/', smartphoneFeatures)
        dispatch({
            type: CREATE_SMARTPHONE,
            payload: res.data
        })
    } catch (error) {
        console.error(error);
    }
}


export const deleteSmartphone = (id) => async (dispatch, getState) => {
    try {
        const res = await axios.delete(`http://localhost:4100/${id}`)
        dispatch({
            type: DELETE_SMARTPHONE,
            payload: res.data
        })
    } catch (error) {
        console.error(error);
    }
}

export const editSmartphone = (smartphoneFeatures) => async(dispatch, getState) => {
    try {
        const id = smartphoneFeatures._id
        console.log(id);
        const res = await axios.put(`http://localhost:4100/${id}`, smartphoneFeatures)
        dispatch({
            type: UPDATE_SMARTPHONE,
            payload: res.data
        })
    } catch (error) {
        console.error(error);
    }
}
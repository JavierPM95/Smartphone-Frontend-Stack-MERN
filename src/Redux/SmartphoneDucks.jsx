import axios from 'axios'


//Constants

const smartphoneInitialState = {
    smartphoneArray : []
}

//Types
const GET_SMARTPHONES = 'GET_SMARTPHONES';


//Reducer

export default function smartphoneReducer (state = smartphoneInitialState, action){
    switch (action.type) {
        case GET_SMARTPHONES:
            return {...state, smartphoneArray: action.payload}
        default:
            return state;
    }
} 

//Actions
export const smartphoneAction = () => async (dispatch, getState) => {
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
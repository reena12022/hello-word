
import { SIGNUP_FAIL,SIGNUP_SUCCESS } from '../action/type'

const initialState = {
    data: null
}

const signupReducer = (state = initialState, action) => {
    console.log("action>>", action)
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
            case SIGNUP_FAIL:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}
export default signupReducer;
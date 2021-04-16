
import { GET_PAGE_LIST } from '../action/type'

const initialState = {
    pageList: null
}

const pageListReducer = (state = initialState, action) => {
    console.log("action>>", action)
    switch (action.type) {
        case GET_PAGE_LIST:
            return {
                ...state,
                pageList: action.payload
            }
        default:
            return state;
    }
}
export default pageListReducer;
import {FETCH_START, FETCH_SUCCESS} from "./../actions"

const initialState = {
    gifData: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                gifData: action.payload
            }
        default:
            return state
    }
}

export default reducer

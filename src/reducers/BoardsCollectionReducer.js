import { STORE_NEW_BOARD_TO_COLLECTION} from "../actions/ActionTypes"

//const initialState = [];

export default function(state = [], action){
    switch(action.type){
        case STORE_NEW_BOARD_TO_COLLECTION:
            return [...state,action.payload];

        default:
            return state;
    }
}
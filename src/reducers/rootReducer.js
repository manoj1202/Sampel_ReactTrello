import { combineReducers } from "redux";
import createBoardReducer from "./createBoardReducer";
import {reducer as formReducer} from "redux-form"
import BoardsCollectionReducer from "./BoardsCollectionReducer";

export default combineReducers({
    newBoard : createBoardReducer,
    form : formReducer,
    boardsCollections : BoardsCollectionReducer
});
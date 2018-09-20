import { combineReducers } from "redux";
import createBoardReducer from "./createBoardReducer";
import {reducer as formReducer} from "redux-form"
import BoardsCollectionReducer from "./BoardsCollectionReducer";
import activeBoardReducer from "./ActiveBoardDataReducer";

export default combineReducers({
    newBoard : createBoardReducer,
    form : formReducer,
    boardsCollections : BoardsCollectionReducer,
    activeBoardData : activeBoardReducer
});
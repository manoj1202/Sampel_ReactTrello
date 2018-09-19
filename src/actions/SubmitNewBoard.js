import { SUBMIT_NEW_BOARD, STORE_NEW_BOARD_TO_COLLECTION  }from "./ActionTypes"
import {store} from "../index"

export default function submitNewBoard(title){
    return dispatch =>{
        dispatch({
            type: SUBMIT_NEW_BOARD ,
             payload : title
        })

        const newBoard = {
            id : store.getState().newBoard.id,
            title :store.getState().newBoard.title 
        }

        dispatch({
            type: STORE_NEW_BOARD_TO_COLLECTION, 
            payload : newBoard
        })
    }
}
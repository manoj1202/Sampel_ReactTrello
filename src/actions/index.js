import * as types from "./ActionTypes"

import find from "lodash/find"
import {store} from "../index"

export const createNewBoard = () => {
    return{
        type: types.CREATE_NEW_BOARD,
        payload: true
    }
}

export const cancleCreatingBoard = () =>{
    return{
        type : types.CANCLE_NEW_BOARD,
        payload : false,
    }
}

export const submitNewCard = (card, cardId,listId) => {
    return dispatch =>{
        dispatch({
            type:types.SUBMIT_NEW_CARD,
            cardName : card,
            cardId,
            listId
        })
    }
}

export const submitList = (name) => {
    return dispatch =>{
        dispatch({
            type:types.SUBMIT_LIST,
            payload: name
        })
    }
}

export const selectActiveBoard = (id) => {
    return dispatch =>{
        const boardsCollection = store.getState().boardsCollection
        const activeBoard = find(boardsCollection, board => board.id === id)

        dispatch({
            type: types.SELECT_ACTIVE_BOARD,
            payload : activeBoard
        })

    }
}

export const archiveCard = (cardId, listId) => {
    return dispatch => {
        dispatch({
            type: types.ARCHIVE_POST,
            payload : {cardId, listId}
        })
    }
}
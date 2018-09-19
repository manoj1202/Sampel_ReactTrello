import * as types from "./ActionTypes"

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
export const ADD_CHAR = "ADD_CHAR"
export const DELETE_CHAR = "DELETE_CHAR"
export const FILTER = "FILTER_CHAR"
export const ORDER = "ORDER_CHAR"

export const addChar =(character)=>{
    return{ type: ADD_CHAR, payload: character}
}

export const deleteChar =(id)=>{
    return{ type: DELETE_CHAR, payload: id}
}

export const filterCards =(status)=>{
    return{ type: FILTER, payload: status}
}

export const orderCards =(id)=>{
    return{ type: ORDER, payload: id}
}

import { ADD_CHAR, DELETE_CHAR, FILTER, ORDER } from "./actions"
const initialState={
    myFavorites:[],
    allCharacters:[]
}
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {

  case ADD_CHAR:
    console.log("PAYLOAD_ADD-->",action.payload)
    return { ...state,
            myFavorites: [...state.allCharacters, action.payload ],
            allCharacters: [...state.myFavorites, action.payload]
           }
  case DELETE_CHAR:
    return {...state,
            myFavorites: state.myFavorites.map((e)=>{
                return e.id !== action.payload.id;
            })}  
            
  case FILTER:
    return{...state,
      // eslint-disable-next-line
      myFavorites: state.allCharacters.filter((e)=>action.payload === e.gender)}      
    case ORDER:
    // eslint-disable-next-line
    return {...state,
        myFavorites: action.payload === "Ascendente" ?
       [...state.allCharacters.sort((a,b) => a.id-b.id)]:
       [...state.allCharacters.sort((a,b) => b.id-a.id)]}
  default:
    return {...state}
  }
}


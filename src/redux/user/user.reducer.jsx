import { UserActionTypes } from "./user.types";
const Initial_state ={
    currentUser:null
}

const userReducer =(state=Initial_state,action)=>{
    switch(action.type){
        case UserActionTypes.SET_CURRECT_USER:
            return {
                ...state,
                currentUser:action.payload
            }
        default:
            return state;
    }
}

export default userReducer;
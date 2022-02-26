import { UserActionTypes } from "./user.types"
export const setCurrentUser =user =>({
    type:UserActionTypes.SET_CURRECT_USER,
    payload:user
})
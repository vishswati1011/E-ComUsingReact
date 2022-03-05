import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage  from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart-reducer";

const persisiConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer
})
export default persistReducer(persisiConfig,rootReducer);
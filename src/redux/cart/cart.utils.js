//this function is to check if we have any new item 
export const addItemToCart = (cartItems,cartItemToAdd ) =>{
    const existingCartItem = cartItems.find(
        cartItem =>cartItem.id ===cartItemToAdd.id
    );
//if any item alredy in carItem array then we only increase qunatity of item and retrun
    if(existingCartItem) {
        return cartItems.map(cartItem=>
            cartItem.id===cartItemToAdd.id
            ?{...cartItem,quantity:cartItem.quantity+1 }
            :cartItem
            )
    }
//we retrun if  we have any new item 
    return [...cartItems,{...cartItemToAdd,quantity:1}]
}
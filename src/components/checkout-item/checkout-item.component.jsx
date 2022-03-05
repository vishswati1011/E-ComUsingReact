import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart,addItem,removeItem } from "../../redux/cart/cart.action";
import { useSelector,useDispatch } from "react-redux";
import './checkout-item.style.scss'

const CheckoutItem = ({cartItem}) =>{
    // const {cartItems}=useSelector((store) => store.cart)
    // console.log("CArt",cartItem)
    const dispatch=useDispatch();
    const {name,imageUrl,price,quantity} =cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt='item'/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>dispatch(removeItem(cartItem))}>&#10094;</div>
                   <span className="value">{quantity}</span> 
                <div className="arrow" onClick={()=>dispatch(addItem(cartItem))}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => dispatch(clearItemFromCart(cartItem))}>&#10005;</span>
        </div>
    )
}

export default CheckoutItem;



// import React from "react";
// import { connect } from "react-redux";
// import { clearItemFromCart } from "../../redux/cart/cart.action";
// import './checkout-item.style.scss'

// const CheckoutItem = ({cartItem,clearItem}) =>{
//     const {name,imageUrl,price,quantity} =cartItem
//     return(
//         <div className="checkout-item">
//             <div className="image-container">
//                 <img src={imageUrl} alt='item'/>
//             </div>
//             <span className="name">{name}</span>
//             <span className="quantity">{quantity}</span>
//             <span className="price">{price}</span>
//             <span className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</span>
//         </div>
//     )
// }

// const mapDispatchToProps =dispatch =>({
//     clearItem:item =>dispatch (clearItemFromCart(item))
// })
// export default connect(null, mapDispatchToProps)(CheckoutItem);

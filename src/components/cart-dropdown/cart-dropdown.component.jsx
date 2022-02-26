import React from "react";
import {useNavigate} from 'react-router-dom'
import CustomButton from "../custom-button/custom-button.component";
import { createStructuredSelector } from "reselect";
import './cart-dropdown.style.scss'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { connect } from "react-redux";
const CartDropdown = ({cartItems,dispatch}) => {
    const navigate=useNavigate();
    return(
    <div className="cart-dropdown">
        <div className="cart-items">
           {
               cartItems.length?
               cartItems.map(cartItem =>(
                   <CartItem key={cartItem.id} item={cartItem} />
               ))
               :<span className="empty-message">Your cart is empty</span>
           }
         </div>
         <CustomButton onClick= {()=>
             {
             navigate('/checkout');
             dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>  
    </div>
    )
}

//with createStructuredSelector 
const mapStateToProps =createStructuredSelector({
    cartItems:selectCartItems
})

export default  connect(mapStateToProps)(CartDropdown);
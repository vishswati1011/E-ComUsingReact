import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import './cart-dropdown.style.scss'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";
const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
           {
               cartItems.map(cartItem =>(
                   <CartItem key={cartItem.id} item={cartItem} />
               ))
           }
         </div>
         <CustomButton>GO TO CHECKOUT</CustomButton>  
    </div>
)
//without selector
// const mapStateToProps = ({cart:{cartItems}}) => ({
//     cartItems
// })


//with selector 
const mapStateToProps = state => ({
    cartItems:selectCartItems(state)
})

export default  connect(mapStateToProps)(CartDropdown);
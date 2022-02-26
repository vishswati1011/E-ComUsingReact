import React from "react";
import {connect} from 'react-redux'
import { toggleCartHidden } from "../../redux/cart/cart.action";
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { selectCartItmesCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import './cart-icon.style.scss';

const CartIcon = ({toggleCartHidden,itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps =dispatch => ({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

const mapStateToProps =createStructuredSelector({
    itemCount:selectCartItmesCount
})
export  default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
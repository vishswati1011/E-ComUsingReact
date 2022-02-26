import React from "react";
import {Link, NavLink} from 'react-router-dom';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth } from '../../firebase/firebase.utils'
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import './header.style.scss'
import { selectCurrentUser } from "../../redux/user/user.selector";

const Header = ({currentUser,hidden}) =>{

    const handleLogout =() =>{
        auth.signOut();
        console.log("logout===============")
        window.location.replace('/');
    }
    return(
        <div className="header">
            <NavLink className="logo-container" to="/">
                <Logo className="logo" />
            </NavLink>
            <div className="options">
                <NavLink className="option" to='/'>
                    HOME
                </NavLink>
                <NavLink className="option" to='/shop'>
                    SHOP
                </NavLink>
                {currentUser ? 
                 <div className="option" onClick={()=>handleLogout()}>
                     SIGN OUT
                     </div>:
                 <Link className="option" to='/'>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {hidden ?null:<CartDropdown/>}
        </div>
    )
}

// here state is rootReducer and userReducer then variable  it is without selector
// const mapStateToProps = ({user :{currentUser},cart:{hidden}}) =>({
//     currentUser,
//     hidden
// })

//after use selector
// const mapStateToProps = (state) =>({
//     currentUser:selectCurrentUser(state),
//     hidden:selectCartHidden(state)
// })

//if we use createStructuredSelector
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})
export default connect(mapStateToProps)(Header);
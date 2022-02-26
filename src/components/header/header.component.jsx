import React from "react";
import {Link, NavLink} from 'react-router-dom';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth } from '../../firebase/firebase.utils'
import { connect } from "react-redux";
import './header.style.scss'

const Header = ({currentUser,hidden}) =>{

    return(
        <div className="header">
            <NavLink className="logo-container" to="/">
                <Logo className="logo" />
            </NavLink>
            <div className="options">
                <NavLink className="option" to='/shop'>
                    SHOP
                </NavLink>
                <NavLink className="option" to='/shop'>
                    CONTACT
                </NavLink>
                {currentUser ? 
                 <div className="option" onClick={()=>auth.signOut()}>
                     SIGN OUT
                     </div>:
                 <Link className="option" to='/signin'>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {hidden ?null:<CartDropdown/>}
        </div>
    )
}

// here state is rootReducer and userReducer then variable 
const mapStateToProps = ({user :{currentUser},cart:{hidden}}) =>({
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Header);
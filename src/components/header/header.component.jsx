import React from "react";
import {Link, NavLink} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth } from '../../firebase/firebase.utils'
import { connect } from "react-redux";
import './header.style.scss'

const Header = ({currentUser}) =>{

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
            </div>
        </div>
    )
}

// here state is rootReducer and userReducer then variable 
const mapStateToProps = state =>({
    currentUser:state.user.currentUser
})
export default connect(mapStateToProps)(Header);
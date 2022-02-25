import React from "react";
import {Link, NavLink} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth } from '../../firebase/firebase.utils'
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
                {!currentUser ? 
                 <Link className="option" to='/signin'>SIGN IN</Link>
                :<div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
               }
            </div>
        </div>
    )
}

export default Header
import React from "react";

import './custom-button.style.scss';

const CustomButton = ({children,isGoogleSignIn,isFacebookSignIn,inverted,...otherProps}) =>(
    <button  className={`${inverted?'inverted':""} ${isGoogleSignIn?'google-sign-in':""}
     ${isFacebookSignIn?"facebook-sign-in":""} custom-button`}
     {...otherProps}
     >
        {children}
    </button>
)
export default CustomButton;
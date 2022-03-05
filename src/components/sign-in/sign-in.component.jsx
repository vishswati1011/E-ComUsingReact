import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-button/custom-button.component'
import {auth,signInWithGoogle} from '../../firebase/firebase.utils'
import {signInWithFacebook} from '../../firebase/signin_with_facebook'
import  "./sign-in.style.scss"
import {NavLink} from 'react-router-dom';


class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {email,password} =this.state;
        try{
            const response = await auth.signInWithEmailAndPassword(email,password);
            console.log("response",response)
            this.setState({email:'',password:""})
        }catch(error){
            console.log(error);
        }
        this.setState({email:'',password:''})
    }
    handleChange = event =>{
        const {name,value} =event.target;
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email" 
                    type="email" 
                    handleChange={this.handleChange}
                    value={this.state.email} 
                    label="email"
                    required/>
                    <FormInput 
                    name="password" 
                    type="password" 
                    handleChange={this.handleChange}
                    value={this.state.password} 
                    label='password'
                    required/>

                    <div id="recptcha-container"></div>
                    <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle}
                    
                    isGoogleSignIn={true} >{' ' }Sign in with google{' '}</CustomButton>
                </div>
                <div className="buttons">
                    <CustomButton onClick={signInWithFacebook} isFacebookSignIn={true}>Sign in with Facebook{' '}</CustomButton>
                    <NavLink to='/loginwithphone_number' >
                    <CustomButton >Login with Phone No. Otp</CustomButton></NavLink>
                </div>
                </form>
                
            </div>
        )
    }
}

export default SignIn;
import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-button/custom-button.component'
import  "./sign-in.style.scss"
import {setUpRecaptch} from '../../firebase/signinwith_phoneNumber';


class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            phone: '',
            otp: '',
            confirmObj:'',
        }
    }
    
    handleChange = event =>{
        const {name,value} =event.target;
        this.setState({[name]:value})
    }
    onSignInSubmit =async (event) => {
        event.preventDefault();
        const phoneNumber = this.state.phone;
        try{

            const response= await setUpRecaptch(phoneNumber);
            console.log(response,"response")
            this.setState({confirmObj:response});

        }catch(error)
        {
            console.log(error)
        }
    }


    verifyOtp =async() =>{
        if(this.state.otp === '' || this.state.otp===null)
        return;
        try{

            await this.state.confirmObj.confirm(this.state.otp);
            window.location.replace('/home')

        }catch(err)
        {
            console.log(err)
        }

    }
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with phone number</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="phone" 
                    type="phone" 
                    handleChange={this.handleChange}
                    value={this.state.phone} 
                    label="Enter Phone"
                    required/>
                     <div className="buttons">
                    <CustomButton onClick={this.onSignInSubmit} >Login with Phone No</CustomButton>
               
                </div>
                    <FormInput 
                    name="otp" 
                    type="otp" 
                    handleChange={this.handleChange}
                    value={this.state.otp} 
                    label='Enter Otp'
                    required/>

                    <div id="recaptcha-container"></div>
                </form>
                <div className="buttons">
                    <CustomButton onClick={this.verifyOtp} >Verify Otp</CustomButton>
               
                </div>
            </div>
        )
    }
}

export default SignIn;

//both code will work for login with phone no


// import React from "react";
// import FormInput from "../form-input/form-input.component";
// import CustomButton from '../custom-button/custom-button.component'
// import  "./sign-in.style.scss"
// import {auth1} from '../../firebase/signinwith_phoneNumber';
// import {  RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";


// class SignIn extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             phone: '',
//             otp: '',
//         }
//     }
    
//     handleChange = event =>{
//         const {name,value} =event.target;
//         this.setState({[name]:value})
//     }

//     setupRecapcha = () => {
//         window.recaptchaVerifier = new RecaptchaVerifier(
//             'recptcha-container', 
//             {
//             'size': 'invisible',
//             'callback': (response) => {
//                 // reCAPTCHA solved, allow signInWithPhoneNumber.
//                 console.log("captch",response)
//                 this.onSignInSubmit();
//             }
//         }, auth1);
//     }

//     onSignInSubmit = (event) => {

//         event.preventDefault();
//         // const phoneNumber = getPhoneNumberFromUserInput();       
//         this.setupRecapcha();
//         const phoneNumber = this.state.phone;

//         console.log("phonenumber",phoneNumber)
//         const appVerifier = window.recaptchaVerifier;

//         signInWithPhoneNumber(auth1, phoneNumber, appVerifier)
//             .then((confirmationResult) => {
//                 // SMS sent. Prompt user to type the code from the message, then sign the
//                 // user in with confirmationResult.confirm(code).
//                 window.confirmationResult = confirmationResult;
//                 // const code = getCodeFromUserInput();
//                 console.log("confirmationResult",confirmationResult)
//                 const code = window.prompt("Enter OTP");
//                 confirmationResult.confirm(code).then((result) => {
//                   // User signed in successfully.
//                   const user = result.user;
//                   console.log("User is signed In")
//                   // ...
//                 }).catch((error) => {
//                   // User couldn't sign in (bad verification code?)
//                   // ...
//                 });
//             }).catch((error) => {
//                 // Error; SMS not sent
//                 // ...
//             });
//     }
//     render(){
//         return(
//             <div className="sign-in">
//                 <h2>I already have an account</h2>
//                 <span>Sign in with phone number</span>
//                 <form onSubmit={this.handleSubmit}>
//                     <FormInput 
//                     name="phone" 
//                     type="phone" 
//                     handleChange={this.handleChange}
//                     value={this.state.phone} 
//                     label="Enter Phone"
//                     required/>
//                     <FormInput 
//                     name="otp" 
//                     type="otp" 
//                     handleChange={this.handleChange}
//                     value={this.state.otp} 
//                     label='Enter Otp'
//                     required/>

//                     <div id="recptcha-container"></div>
//                 </form>
//                 <div className="buttons">
//                     <CustomButton onClick={this.onSignInSubmit} >Login with Phone No</CustomButton>
//                 </div>
//             </div>
//         )
//     }
// }

// export default SignIn;
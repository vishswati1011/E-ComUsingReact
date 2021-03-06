import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage  from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-signup/sign-in-sign-up.component';
import './App.css';
import {auth,createUserProfileDocument } from './firebase/firebase.utils'

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

class App extends React.Component{

  constructor(){
    super();
    this.state ={
      currentUser:null
    }
  }

  //this use because we does'nt want to leal info of user
  unsubscribeFromAuth =null 
  componentDidMount (){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user =>{
      console.log(user); //it contain email name phonenumber  and all detail
      this.setState({currentUser:user})
      createUserProfileDocument(user);
    })
  }
  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }
   render(){
  return (
    <div>
      <Router>
      <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shop/hats" element={<HatsPage />} />
          <Route exact path="/shop" element={<ShopPage />} />
          <Route exact path="/signin" element={<SignInAndSignUpPage />} />
        </Routes> 
      </Router>
      {/* <HomePage/> */}
    </div>
  )
  }
}

export default App;

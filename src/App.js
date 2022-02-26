import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage  from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-signup/sign-in-sign-up.component';
import './App.css';
import {auth,createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

class App extends React.Component{
  unsubscribeFromAuth =null 

  componentDidMount (){
    
    const {setCurrentUser} =this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
  
      if(userAuth){

        const userRef =await  createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot =>{
        setCurrentUser({
            id:snapshot.id,
            ...snapshot.data()
        })
        });
        

      }
      setCurrentUser(userAuth)

    })
  }
  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }
   render(){
  return (
    <div>
      <Router>
      <Header />
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

const mapDisptachToProps  = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})
export default connect(null,mapDisptachToProps)(App);

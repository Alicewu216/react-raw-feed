import React from 'react'
import "./SigninScreen.css";



const SigninScreen = () => {
 
  return (
    <div className="login">
      <h1>Sign In</h1>
      <form>
        <h3>E-mail</h3>
        <input type="text" />

        <h3>Password</h3>
        <input type="password" />

        <button 
        className="login_signinbtn">Sign In</button>
      </form>
      <p>
        By signing-in you agree to Raw Feed Cat Meal Prep's Conditions of Use &
        Sale. Please see our Privacy Notice, our Cookies Notice and our
        Interest-Based Ads Notice.
      </p>

      <button 
      className="login_registerbtn">Creat New Account</button>
    </div>
  );
};

export default SigninScreen;

import React, { Component } from 'react';
import "./login.css"


class Login extends Component {
  signIn = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword( email, password)
      .then((userCredential) => {
        // User signed in successfully
        const user = userCredential.user;
        console.log('User signed in:', user);
      })
      .catch((error) => {
        // Handle any sign-in errors here
        console.error('Sign-in error:', error);
      });
  };

  render() {
    return (
      <div className='bodylogin'>
        <div id="login-form-wrap">
          <h2>Login</h2>
          <form
            id="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              this.signIn();
            }}
          >
            <p>
              <input className='input1' type="email" id="email" placeholder="Email Address" required />
              <i className="validation">
                <span></span>
                <span></span>
              </i>
            </p>
            <p>
              <input className='input1' type="password" id="password" placeholder="Enter password" required />
              <i className="validation">
                <span></span>
                <span></span>
              </i>
            </p>
            <p>
              <input className='input1' type="submit" id="login" value="Login" />
            </p>
          </form>
          <div id="create-account-wrap">
            <p>Not a member? <a href="http://localhost:5173/registration">Create Account</a></p>
            {/* Change the link before deployment */}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
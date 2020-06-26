import React, { Component } from 'react';

import InputForm from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utlis';

import './sign-in.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handlerSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Signin with your email and password</span>

        <form onSubmit={this.handlerSubmit}>
          <InputForm
            name="email"
            type="text"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <InputForm
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              onClick={(e) => {
                e.preventDefault();
                signInWithGoogle();
              }}
              isGoogleBtn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

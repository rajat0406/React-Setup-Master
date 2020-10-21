import React, { Component } from "react";
import { connect } from "react-redux";
import { login, signUp } from "actions/index";
class Login extends Component {
  onButtonPressed = () => {
    this.props.login();
  };

  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <p>
          <button
            onClick={() => {
              this.onButtonPressed();
            }}
          >
            Login
          </button>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { name: state.login.data.title };
}

export default connect(mapStateToProps, { login })(Login);

import React from "react";
import { withRouter } from "react-router-dom";

class SignupPage extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    usernameError: "",
    emailError: "",
    passwordError: "",
  };
  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  validateForm() {
    let usernameError = "";
    let emailError = "";
    let passwordError = "";
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (this.state.username.length < 4) {
      usernameError = "Username should be of atleast 4 letters";
    }
    if (!this.state.email.match(mailformat)) {
      emailError = "enter valid email";
    }
    if (this.state.password.length < 4) {
      passwordError = "weak password must be atleast 4 letters";
    }

    if (usernameError || emailError || passwordError) {
      this.setState({ usernameError, emailError, passwordError });
      return false;
    }
    return true;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let isValid = this.validateForm();

    if (isValid) {
      fetch(`api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: this.state }),
      })
        .then((res) => res.json())
        .then((user) => {
          this.props.history.push("/login");
        });
    }
  };
  render() {
    return (
      <>
        <div className="container my-3 form">
          <h2 className="is-size-4 has-text-centered">SIGN UP</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="field ">
              <label className="label is-medium">Name</label>
              <div className="control has-text-centered">
                <input
                  className="input"
                  name="username"
                  type="text"
                  onChange={this.handleInput}
                  placeholder="e.g Alex Smith"
                />
                <div className="my-2 ">
                  <p className="help is-danger is-size-4">{this.state.usernameError}</p>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label is-medium">Email</label>
              <div className="control has-text-centered">
                <input
                  name="email"
                  className="input"
                  type="email"
                  onChange={this.handleInput}
                  placeholder="e.g. alexsmith@gmail.com"
                />
                 <div className="my-2 ">
                  <p className="help is-danger is-size-4">{this.state.emailError}</p>
                </div>
              </div>
            </div>

            <div className="field is-half">
              <label className="label is-medium">Password</label>
              <div className="control has-text-centered">
                <input
                  className="input"
                  name="password"
                  type="password"
                  onChange={this.handleInput}
                  placeholder="Password"
                />
                 <div className="my-2 ">
                  <p className="help is-danger is-size-4">{this.state.passwordError}</p>
                </div>
              </div>
            </div>

            <div className="control has-text-centered ">
              <button type="submit" className="button is-primary">
                SignIn
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(SignupPage);

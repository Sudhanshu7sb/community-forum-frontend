import React from "react";
import { withRouter } from "react-router-dom";

class LoginPage extends React.Component {
  state = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
  };
  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  validateForm() {
    let emailError = "";
    let passwordError = "";
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!this.state.email.match(mailformat)) {
      emailError = "enter valid email";
    }
    if (this.state.password.length < 2) {
      passwordError = "weak password must be atleast 4 letters";
    }

    if (emailError || passwordError ) {
      this.setState({ emailError , passwordError });
      return false;
    }
    return true;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let isValid = this.validateForm();
    console.log(isValid);

    if (isValid) {
      fetch(`api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: this.state }),
      })
        .then((res) => res.json())
        .then((user) => {
          if (user.token) {
            localStorage.setItem("Token", user.token);
            this.props.updateisLoggedIn(true);
            this.props.history.push("/questions");
          }
        });
    }
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="container my-3 form">
            <h2 className="is-size-4 has-text-centered">LOG IN</h2>
            <div className="field">
              <label className="label is-medium">Email</label>
              <div className="control has-text-centered">
                <input
                  name="email"
                  className="input"
                  type="email"
                  placeholder="e.g. alexsmith@gmail.com"
                  onChange={this.handleInput}
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
                  name="password"
                  className="input"
                  type="password"
                  placeholder="Password"
                  onChange={this.handleInput}
                />
                <div className="my-2 ">
                  <p className="help is-danger is-size-4">{this.state.passwordError}</p>
                </div>

              </div>
            </div>

            <div className="control has-text-centered ">
              <button type="submit" className="button is-primary">
                Log In
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default withRouter(LoginPage);

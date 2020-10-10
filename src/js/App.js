import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "../components/HomePage";
import SignupPage from "../components/SignupPage";
import LoginPage from "../components/LoginPage";
import Header from "../components/Header";
import QuestionAnswer from "../components/QuestionAnswer";
import AddQuestion from "../components/AddQuestion";
import SingleQuestion from "../components/SingleQuestion";
import AddAnswer from "../components/AddAnswer";

class App extends React.Component {
  state = {
    isLoggedIn: false,
  };
  componentDidMount() {
    let token = localStorage.getItem("Token");
    if (token) {
      this.updateisLoggedIn(true);
    }
  }
  updateisLoggedIn = (value) => {
    this.setState({ isLoggedIn: value });
  };
  
  render() {
    let {isLoggedIn} = this.state;
    return (
      <BrowserRouter>
        <Header
          updateisLoggedIn={this.updateisLoggedIn}
          isLoggedIn={isLoggedIn}
        />
        {this.state.isLoggedIn ? (
          <Private
            updateisLoggedIn={this.updateisLoggedIn}
            isLoggedIn={isLoggedIn}
          />
        ) : (
          <Public
            updateisLoggedIn={this.updateisLoggedIn}
            isLoggedIn={isLoggedIn}
          />
        )}
        
      </BrowserRouter>
    );
  }
}

function NotFound() {
  return <h1>404 Page Not Found</h1>;
}

function Private(props) {
  let info = {
    updateisLoggedIn: props.updateisLoggedIn,
    isLoggedIn: props.isLoggedIn,
  };
  return (
    <Switch>
      <Route path="/" exact component={QuestionAnswer} />
      <Route path="/login">
        <LoginPage updateisLoggedIn={props.updateisLoggedIn} />
      </Route>
      <Route path="/questions" exact>
        <QuestionAnswer {...info} />
      </Route>
      <Route path="/questions/add" exact>
        <AddQuestion
          updateisLoggedIn={props.updateisLoggedIn}
          isLoggedIn={props.isLoggedIn}
        />
      </Route>
      <Route path="/questions/:slug" exact component={SingleQuestion} />
      <Route path="/questions/:slug/answers/add" exact>
        <AddAnswer
          updateisLoggedIn={props.updateisLoggedIn}
          isLoggedIn={props.isLoggedIn}
        />
      </Route>
      <Route
        path="/questions/:slug/answers/:id"
        exact
        component={SingleQuestion}
      />
      <Route component={NotFound} />
    </Switch>
  );
}
function Public(props) {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage updateisLoggedIn={props.updateisLoggedIn} />
      </Route>
      <Route path="/login">
        <LoginPage updateisLoggedIn={props.updateisLoggedIn} />
      </Route>
      <Route path="/register">
        <SignupPage updateisLoggedIn={props.updateisLoggedIn} />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;

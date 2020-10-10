import React from "react";
import { withRouter } from "react-router-dom";

class AddAnswer extends React.Component {
  state = {
    answer: "",
    answerError: "",
  };
  handleInput = (event) => {
    this.setState({ answer: event.target.value });
  };

  validateForm() {
    let answerError = "";

    if (this.state.answer.length < 5) {
      answerError = "answer must be of atleast 5 letters";
    }

    if (answerError) {
      this.setState({ answerError });
      return false;
    }
    return true;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let isValid = this.validateForm();

    if (isValid) {
      fetch(`/api/questions/${this.props.match.params.slug}/answers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.Token,
        },
        body: JSON.stringify({ answer: { body: this.state.answer } }),
      })
        .then((res) => res.json())
        .then((answer) => {
          this.props.history.push(`/questions/${this.props.match.params.slug}`);
        });
    }
  };
  render() {
    if (!this.state.answer) console.log("no answer");
    return (
      <>
        <h2 className="is-size-4 has-text-centered">Add Answer</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="container my-3 form">
            <div className="field">
              <label className="label is-medium">Answer</label>
              <div className="control has-text-centered">
                <input
                  name="body"
                  className="input"
                  type="text"
                  placeholder="e.g. alexsmith@gmail.com"
                  onChange={this.handleInput}
                />
                <div className="my-2 ">
                  <p className="help is-danger is-size-3">{this.state.answerError}</p>
                </div>
              </div>
            </div>
            <div className="control has-text-centered ">
              <button type="submit" className="button is-primary">
                ADD
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default withRouter(AddAnswer);

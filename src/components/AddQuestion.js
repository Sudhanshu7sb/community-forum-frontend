import React from "react";
import { withRouter } from "react-router-dom";

class AddQuestion extends React.Component {
  state = {
    title: "",
    description: "",
    titleError: "",
    descriptionError: "",
  };
  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  validateForm() {
    let titleError = "";
    let descriptionError = "";

    if (this.state.title.length < 2) {
      titleError = "Question title must be atleast 4 letters";
    } else if (this.state.description.length < 8) {
      descriptionError = "description must be atleast 8 letters";
    }

    if (titleError || descriptionError) {
      this.setState({ titleError, descriptionError });
      return false;
    }
    return true;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let isValid = this.validateForm();

    if (isValid) {
      fetch(`/api/questions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.Token,
        },
        body: JSON.stringify({ question: this.state }),
      })
        .then((res) => res.json())
        .then((question) => {
          this.props.history.push("/questions");
        });
    }
  };
  render() {
    console.log("add");
    return (
      <>
        <h2 className="is-size-4 has-text-centered">Add Question</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="container my-3 form">
            <div className="field">
              <label className="label is-medium">Question Title</label>
              <div className="control has-text-centered">
                <input
                  name="title"
                  className="input"
                  type="text"
                  placeholder="e.g. alexsmith@gmail.com"
                  onChange={this.handleInput}
                />
                <div className="my-2 ">
                  <p className="help is-danger is-size-3">{this.state.titleError}</p>
                </div>
              </div>
            </div>

            <div className="field is-half">
              <label className="label is-medium">description</label>
              <div className="control has-text-centered">
                <textarea
                  name="description"
                  className="input"
                  type="text"
                  placeholder="Password"
                  onChange={this.handleInput}
                ></textarea>
                <div className="my-2 ">
                  <p className="help is-danger is-size-3">{this.state.descriptionError}</p>
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

export default withRouter(AddQuestion);

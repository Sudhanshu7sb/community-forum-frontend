import React from "react";
import { Link } from "react-router-dom";

class SingleQuestion extends React.Component {
  state = {
    question: null,
    answers: [],
  };

  componentDidMount() {
    fetch(`http://localhost:3000/api/questions/${this.props.match.params.slug}`)
      .then((res) => res.json())
      .then((question) => {
        this.setState({
          question: question.question,
          answers: [...question.question.answers],
        });
        console.log(this.state.answers);
      });
  }

  handleDelete = (answer) => {
    var filterAnswers=this.state.answers.filter(ans=>answer._id !==ans._id);
    console.log(filterAnswers,"filterAnsw");
    this.setState({answers:filterAnswers})
    fetch(`/api/questions/${this.props.match.params.slug}/answers/${answer._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.Token,
      },
      body: JSON.stringify({ question: this.state }),
    })
      .then((res) => res.json())
      .then((question) => {
        console.log(question,"here updated");
        
        this.setState({answers:question.question.answers});
        // this.props.history.push(`/questions/${this.props.match.params.slug}`);
      });
  };

  render(props) {
    console.log(this.state,"tate");
    if (!this.state.question) {
      return <h1>Loading...</h1>;
    }
    if (!this.state.question.answers.length) console.log("no answers");

    return (
      <>
        <div className="buttons my-4 mx-6 has-text-centered">
          <Link
            className="button is-primary"
            to={`/questions/${this.props.match.params.slug}/answers/add`}
          >
            Add Answer
          </Link>
        </div>
        <h2 className="is-size-3 mx-6 my-3">Q. {this.state.question.title}</h2>
        {this.state.answers.map((ans, index) => {
          return (
            <div key={ans._id} className="tile is-ancestor container mx-6">
              <div className="tile is-parent">
                <div className="tile is-child box">
                  <p className="title is-size-5">
                    A{index + 1}. {ans.body}
                  </p>
                  <div className="buttons">
                    <a href="##" className="mx-3">
                      like
                    </a>
                    <button onClick={() => this.handleDelete(ans)}>
                      Delete Answer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default SingleQuestion;

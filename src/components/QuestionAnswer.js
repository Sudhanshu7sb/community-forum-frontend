import React from "react";
import { Link } from "react-router-dom";
// import uuid from "react-uuid";

import Tags from "./Tags";

class QuestionAnswer extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: null,
    };
  }

  componentDidMount() {
    fetch("/api/questions")
      .then((res) => res.json())
      .then((allQuestion) => {
        this.setState({
          questions: [...allQuestion.questions].sort().reverse(),
        });
      });
  }

  render() {
    if (!this.state.questions) {
      return <h6>Loading...</h6>;
    }

    return (
      <section className="container py-3">
        <div className="columns">
          <div className="column is-3">
            <Link
              className="button is-primary is-alt is-medium"
              to="/questions/add"
            >
              Add Question
            </Link>
            <Tags />
          </div>
          <div className="column is-9">
            {this.state.questions.map((question, index) => {
              return (
                <div key={index} className="box content">
                  <article className="post">
                    <h4>
                      {question.title}
                      <span className="tag">Question</span>
                    </h4>
                    <div className="media">
                      <div className="media-content">
                        <div className="content">
                          <p>
                            {question.answers.length
                              ? `Answer1: ` +
                                question.answers[0].body +
                                ` @${question.answers[0].author.username}`
                              : "add answer"}
                            &nbsp;
                          </p>
                        </div>
                      </div>
                      <div className="media-right">
                        <span className="has-text-grey-light">
                          <i className="fa fa-comments"></i>
                          <Link to={`/questions/${question.slug}`}>
                            Read More Answers&rarr;
                          </Link>
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default QuestionAnswer;

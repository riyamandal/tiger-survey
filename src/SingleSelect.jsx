import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class SingleSelect extends Component {
  constructor() {
    super();
    this.addAnswer = this.addAnswer.bind(this);
  }
  state = {
    answer: "",
  };

  addAnswer = (e)=> {
    e.stopPropagation();
    console.log(e.target.id);
    this.setState({
      answer: e.target.id,
    });
  };

  render() {
    return (
      <div className="singleSelect">
        <div className="question">
          <span>?</span>
          <div>Do you have LinkedIn installed on your phone?</div>
        </div>

        <p>Options</p>

        <div className="singleSelect__answerList"  onClick={this.addAnswer}>
          <div id="Yes">
            Yes
          </div>
          <div id="No">
            No
          </div>
        </div>

        <div className="singleSelect__button">
          <Button
            className="ansButtonSingle"
            variant="contained"
            color="secondary"
            onClick={this.props.handleOpen}
          >
            Add Question
          </Button>
          <Button
            className="ansButtonSingle"
            variant="contained"
            color="secondary"
          >
            Publish
          </Button>
        </div>
      </div>
    );
  }
}

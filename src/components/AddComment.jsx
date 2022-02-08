import React, { Component } from "react";
import { Button } from "@mui/material";
import * as api from "../utils/api";

class AddComment extends Component {
  state = {
    username: this.props.username,
    body: "",
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.body.replace(/\s/g, "").length !== 0) {
      api.postNewComment(this.props.article_id, { ...this.state }).then(() => {
        this.setState({ username: this.props.username, body: "" });
        this.props.getComments();
      });
    }
  };

  render() {
    const { body } = this.state;
    return (
      <div>
        <form>
          <label className="CommentLabel">
            <input
              className="AddCommentBox"
              type="text"
              name="body"
              onChange={this.handleChange}
              value={body}
              required
              size="25"
            ></input>
          </label>
          <Button
            className="AddCommentButton"
            variant="outlined"
            onClick={this.handleSubmit}
          >
            Post Comment
          </Button>
        </form>
      </div>
    );
  }
}

export default AddComment;

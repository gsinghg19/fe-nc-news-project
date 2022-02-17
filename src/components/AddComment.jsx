import React, { Component } from 'react';
import { Button, Input, InputLabel, FormControl } from '@mui/material';

import * as api from '../utils/api';

class AddComment extends Component {
  state = {
    username: this.props.username,
    body: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {});
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.body.replace(/\s/g, '').length !== 0) {
      api
        .postNewComment(this.props.article_id, {
          username: this.props.username,
          body: this.state.body,
        })
        .then(() => {
          this.setState({ username: this.props.username, body: '' });
          // api.getComments();
        });
    }
  };

  render() {
    const { body, article_id } = this.state;
    return (
      <div>
        <form>
          <FormControl sx={{ m: 1, width: 195 }}>
            <InputLabel id="type_here-label" size="small">
              type here
            </InputLabel>
            <label className="CommentLabel">
              <Input
                className="AddCommentBox"
                type="text"
                name="body"
                onChange={this.handleChange}
                value={body}
                required={true}
                size="25"
              ></Input>
            </label>
          </FormControl>
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

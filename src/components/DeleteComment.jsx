import * as api from "../utils/api";
import { Button } from "@mui/material";

const DeleteComment = ({ comment_id, getComments, author, username }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (author === username) {
      api.deleteComment(comment_id).then(() => {
        getComments();
      });
    }
  };
  return (
    <Button className="DeleteButton" onClick={handleSubmit} variant="outlined">
      Delete comment!
    </Button>
  );
};

export default DeleteComment;

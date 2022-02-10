import DeleteComment from "./DeleteComment";
import AddComment from "./AddComment";
import { ButtonGroup } from "@mui/material";
import { Card } from "@mui/material";

const AddCommentBox = (props) => {
  return (
    <Card>
      <ButtonGroup>
        <AddComment
          comment_id={props.comment_id}
          getComments={props.comments}
          body={props.body}
          author={props.author}
          username={props.username}
          created_at={props.created_at}
        />
        <DeleteComment
          comment_id={props.comment_id}
          getComments={props.comments}
          body={props.body}
          author={props.author}
          username={props.username}
          created_at={props.created_at}
        />
      </ButtonGroup>
    </Card>
  );
};

export default AddCommentBox;

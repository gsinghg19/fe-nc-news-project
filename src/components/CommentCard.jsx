import DeleteComment from "./DeleteComment";
import AddComment from "./AddComment";
import { ButtonGroup } from "@mui/material";

const CommentCard = ({
  author,
  body,
  comment_id,
  votes,
  comments,
  username,
  created_at,
}) => {
  console.log({ comments, body });
  return (
    <div className="CommentCard">
      <div className="CommentInfo">
        <strong>{comment_id}</strong> {body}
        <ButtonGroup>
          <AddComment
            comment_id={comment_id}
            getComments={comments}
            body={body}
            author={author}
            username={username}
            created_at={created_at}
          />
          <DeleteComment
            comment_id={comment_id}
            getComments={comments}
            body={body}
            author={author}
            username={username}
            created_at={created_at}
          />
        </ButtonGroup>
      </div>
    </div>
  );
};

export default CommentCard;

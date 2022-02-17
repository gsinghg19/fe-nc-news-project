import DeleteComment from './DeleteComment';
const CommentCard = (props) => {
  return (
    <div className="CommentCard">
      <div className="CommentInfo">
        <strong>{props.author}</strong>
        <h3>{props.created_at}</h3>
        <h4>{props.votes}</h4>
        <p>{props.body}</p>
      </div>
      <DeleteComment id={props.id} />
    </div>
  );
};

export default CommentCard;

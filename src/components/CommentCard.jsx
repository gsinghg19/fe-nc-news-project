const CommentCard = (props) => {
  return (
    <div className="CommentCard">
      <div className="CommentInfo">
        <strong>{props.author}</strong>
        <p>{props.body}</p>
        <h3>{props.created_at}</h3>
      </div>
    </div>
  );
};

export default CommentCard;

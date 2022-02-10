const UserCard = (props) => {
  return (
    <div className="UserCard">
      <div className="UserInfo">
        <strong>{props.author}</strong>
        <p>{props.username}</p>
      </div>
    </div>
  );
};

export default UserCard;

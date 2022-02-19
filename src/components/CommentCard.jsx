import DeleteComment from './DeleteComment';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

const CommentCard = (props) => {
  return (
    <>
      <Card>
        <Box m={4} pt={11}>
          <div className="CommentInfo">
            <strong>{props.author}</strong>
            <h3>{props.created_at}</h3>
            <h4>{props.votes}</h4>
            <p>{props.body}</p>
          </div>
          <DeleteComment id={props.id} />
        </Box>
      </Card>
    </>
  );
};

export default CommentCard;

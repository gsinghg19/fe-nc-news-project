import * as api from '../utils/api';
import { Button } from '@mui/material';

const DeleteComment = (props) => {
  const deleteClick = () => {
    if (props.author === props.username) {
      api.deleteComment(props.id).then(() => {});
    }
  };

  return (
    <Button className="DeleteButton" onClick={deleteClick} variant="outlined">
      Delete comment!
    </Button>
  );
};

export default DeleteComment;

import DeleteComment from './DeleteComment';
import AddComment from './AddComment';
import { ButtonGroup } from '@mui/material';
import { Card } from '@mui/material';

const AddCommentBox = (props) => {
  return (
    <Card style={{ padding: 10 }}>
      <ButtonGroup>
        <AddComment
          comment_id={props.comment_id}
          getComments={props.comments}
          body={props.body}
          //author={props.author}
          username={'grumpy19'}
          created_at={props.created_at}
          article_id={props.id}
        />
      </ButtonGroup>
    </Card>
  );
};

export default AddCommentBox;

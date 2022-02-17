import { useEffect, useState } from 'react';
import { fetchArticleCommentsByArticleId } from '../utils/api';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react-router-dom';
import CommentCard from './CommentCard';
import AddCommentBox from './AddCommentBox';
import AddComment from './AddComment';
import DeleteComment from './DeleteComment';
import * as dayjs from 'dayjs';
import { padding } from '@mui/system';

const CommentList = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState();

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    ></Box>
  );

  useEffect(() => {
    setIsLoading(true);
    fetchArticleCommentsByArticleId(props.id)
      .then((articleData) => {
        //console.log(articleData);
        setComments(articleData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return isLoading ? (
    <h1>Loading....</h1>
  ) : (
    <>
      <ul>
        <AddCommentBox id={props.id} />
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <CommentCard>
              <Typography
                sx={{ fontSize: 18 }}
                color="text.secondary"
                gutterBottom
              >
                {' '}
                <article className="comments"></article>
                <br />
              </Typography>
            </CommentCard>
          </CardContent>
        </Card>
      </ul>

      <ul>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              {comments.map((commentObj) => {
                return (
                  <>
                    <CommentCard
                      id={commentObj.comment_id}
                      author={commentObj.author}
                      created_at={dayjs(commentObj.created_at).format(
                        'DD/MM/YYYY'
                      )}
                      body={commentObj.body}
                      votes={commentObj.votes}
                    ></CommentCard>
                    {/* <DeleteComment
                      comment_id={props.comment_id}
                      username={props.username}
                    /> */}
                  </>
                );
              })}
            </Typography>
          </CardContent>
        </Card>
      </ul>
    </>
  );
};

export default CommentList;

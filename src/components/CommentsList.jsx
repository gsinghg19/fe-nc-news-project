import { useEffect, useState } from "react";
import { fetchArticleCommentsByArticleId } from "../utils/api";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react-router-dom";
import CommentCard from "./CommentCard";

const CommentList = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    ></Box>
  );

  useEffect(() => {
    fetchArticleCommentsByArticleId(article_id)
      .then((articleData) => {
        console.log(articleData);
        setComments(articleData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [article_id]);

  return (
    <ul>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <CommentCard>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              {" "}
              <article className="comments"></article>
              <br />
            </Typography>
          </CommentCard>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            {comments.map((comment) => {
              return (
                <CommentCard
                  key={comment.comment_id}
                  comment={comment}
                  setComments={setComments}
                />
              );
            })}
          </Typography>
        </CardContent>
      </Card>
    </ul>
  );
};

export default CommentList;

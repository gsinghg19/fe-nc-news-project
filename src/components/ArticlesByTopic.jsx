import { useState, useEffect } from "react";
import { getArticlesViaSingleTopic } from "../utils/api";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react-router-dom";

const ArticlesByTopic = () => {
  const [specificTopic, setSpecificTopic] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log(specificTopic);
  const { slug, description } = useParams();
  console.log(slug, description);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    ></Box>
  );

  useEffect(() => {
    setIsLoading(true);
    getArticlesViaSingleTopic(slug)
      .then((topicData) => {
        setSpecificTopic(topicData);
        console.log(topicData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [slug]);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          <article className="setArticleByTopic">
            <h4>Topic: {slug}</h4>
            <h2>{description}</h2>
          </article>
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Expand</Button>
      </CardActions>
    </Card>
  );
};

export default ArticlesByTopic;

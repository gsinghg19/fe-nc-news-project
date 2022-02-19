import { useState, useEffect } from 'react';
import { getArticlesViaSingleTopic } from '../utils/api';
import { useParams } from 'react-router-dom';
import TopicList from './TopicList';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react-router-dom';

const ArticlesByTopic = () => {
  const [specificTopic, setSpecificTopic] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();
  console.log(slug);

  useEffect(() => {
    setIsLoading(true);
    getArticlesViaSingleTopic(slug)
      .then((topicData) => {
        setSpecificTopic(topicData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [slug]);

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            <article className="setArticleByTopic">
              <h4>Topic: {slug}</h4>
            </article>
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large">Expand</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ArticlesByTopic;

import { useEffect, useState } from 'react';
import { getAllTopics, getArticlesViaSingleTopic } from '../utils/api';
import { Button } from '@mui/material';
import Loading from './Loading';
import Nav from './Nav';

const TopicList = ({ topicsFromApi }) => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getAllTopics()
      .then((topicsFromApi) => {
        setTopics(topicsFromApi);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [topicsFromApi]);

  const getTopicArticles = (topic) => {
    getArticlesViaSingleTopic(topic).then((articles) => {
      setArticles(articles);
    });
  };

  return isLoading ? (
    // <h1>Loading please wait.....</h1>
    <Loading />
  ) : (
    <>
      <div>
        <h2>Topic List</h2>{' '}
        {topics.map((topic) => {
          return (
            <Button
              style={{ minWidth: '200px' }}
              variant="contained"
              onClick={() => {
                getTopicArticles(topic.slug);
              }}
            >
              <h5>{topic.slug}</h5>
            </Button>
          );
        })}
      </div>
      <div>
        {articles.map((article) => {
          return (
            <ul key={article.article_id}>
              <Button
                // sx={{ mr: 70 }}
                style={{ minWidth: '690px' }}
                variant="contained"
                href={`/articles/${article.article_id}/`}
              >
                <h5>{article.title}</h5>
              </Button>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default TopicList;

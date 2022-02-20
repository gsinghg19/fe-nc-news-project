import { useEffect, useState } from 'react';
import { getAllArticles } from '../utils/api';
import { Button } from '@mui/material';
import Sorter from './Sorter';
import Loading from './Loading';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState();

  useEffect(() => {
    setIsLoading(true);
    getAllArticles(sortBy)
      .then((articlesFromApi) => {
        console.log('line 15', articlesFromApi);
        setArticles(articlesFromApi);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sortBy]);

  useState(() => {
    getAllArticles()
      .then((criteriaFromApi) => {
        setSortBy(criteriaFromApi);
      })
      .catch((error) => {
        console.log(error);
      }, []);
  });

  return isLoading ? (
    // <h1>Loading please wait.....</h1>
    <Loading />
  ) : (
    <div>
      <Sorter />{' '}
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
  );
};

export default ArticleList;

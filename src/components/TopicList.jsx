import { useEffect, useState } from 'react';
import { getAllTopics } from '../utils/api';
import { Button } from '@mui/material';
import Loading from './Loading';

const TopicList = ({ topicsFromApi }) => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllTopics()
      .then((topicsFromApi) => {
        console.log(topicsFromApi);
        setTopics(topicsFromApi);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [topicsFromApi]);

  return isLoading ? (
    // <h1>Loading please wait.....</h1>
    <Loading />
  ) : (
    <ul>
      <h2>Topic List</h2>{' '}
      {topics.map((topic) => {
        return (
          <ul key={topic.slug} className="topic-card">
            <Button
              style={{ minWidth: '200px' }}
              variant="contained"
              href={`articles?sort_by=topic&topic=${topic.slug}`}
            >
              <h5>{topic.slug}</h5>
            </Button>
          </ul>
        );
      })}
    </ul>
  );
};

export default TopicList;

// return (
//   <li key={`${topic.slug}`} className="topic-card">
//     <h2 className="topics-title">{topic.slug}</h2>
//     <p>{topic.description}</p>
//     <Button
//       variant="contained"
//       className="link to topic articles"
//       href={`/topics/${topic.slug}`}
//     >
//       View Articles
//     </Button>
//   </li>
// );

import * as api from '../utils/api';
import { Button } from '@mui/material';

const Sorter = (props) => {
  const topicClick = () => {
    if (props.topic === props.slug) {
      api.getArticlesViaSingleTopic(props.slug).then(() => {});
    }
  };

  return (
    <Button
      className="sortByTopicsButtons"
      onClick={topicClick}
      variant="Outlined"
    ></Button>
  );
};

// const Sorter = ({ handleSortByChange }) => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     handleSortByChange(event.target.value);
//   };

//   return (
//     <div>
//       <select className="Sorter" onChange={handleSubmit}>
//         <option value="created_at">Date</option>
//         <option value="comment_count">Comments</option>
//         <option value="votes">Votes</option>
//         <option value="topics">Topics</option>
//       </select>
//     </div>
//   );
// };

export default Sorter;

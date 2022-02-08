const Sorter = ({ handleSortByChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSortByChange(e.target.value);
  };

  return (
    <div>
      <select className="Sorter" onChange={handleSubmit}>
        <option value="created_at">Date</option>
        <option value="votes">Votes</option>
        <option value="comment_count">comments</option>
      </select>
    </div>
  );
};

export default Sorter;

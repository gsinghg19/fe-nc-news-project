import Counter from './Counter';

const VotingCard = ({ article_id, votes }) => {
  return (
    <div className="articleVotingBox">
      <div className="articleVoter">
        <Counter votes={votes} id={article_id} type={'votes'} />
      </div>
    </div>
  );
};

export default VotingCard;

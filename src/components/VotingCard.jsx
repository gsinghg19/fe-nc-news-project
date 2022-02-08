import Counter from "./Counter";

const VotingCard = ({ article_id, votes }) => {
  return (
    <div className="CommentsVotingBox">
      <div className="CommentsVoter">
        <Counter votes={votes} id={article_id} type={"comments"} />
      </div>
    </div>
  );
};

export default VotingCard;

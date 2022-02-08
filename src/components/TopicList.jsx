import { useEffect, useState } from "react";
import { getAllTopics } from "../utils/api";
import { Button } from "@mui/material";

const TopicList = () => {
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
  }, []);
  console.log(topics);

  return isLoading ? (
    <h1>Loading please wait.....</h1>
  ) : (
    <ul>
      {" "}
      {topics.map((topic) => {
        return (
          <li key={topic.slug}>
            <Button
              style={{ minWidth: "200px" }}
              variant="contained"
              href={`/topics/${topic.slug}`}
            >
              <h5>{topic.slug}</h5>
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

export default TopicList;

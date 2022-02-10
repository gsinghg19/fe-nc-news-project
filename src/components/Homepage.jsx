import React from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NewspaperIcon from "@mui/icons-material/Newspaper";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleUser } from "../utils/api";
import UserCard from "./UserCard";
import { CommentsDisabled, CommentSharp } from "@mui/icons-material";

const Homepage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState();
  // const { username } = useParams();
  console.log("line 23");

  console.log("line25", users);

  useEffect(() => {
    setIsLoading(true);
    getSingleUser(sortBy)
      .then((userData) => {
        setUsers(userData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sortBy]);

  useState(() => {
    getSingleUser()
      .then((userCriteriaFromApi) => {
        setSortBy(userCriteriaFromApi);
      })
      .catch((error) => {
        console.log(error);
      }, []);
  });

  return (
    // ----header card is here for the homepage---
    <ul>
      <Stack spacing={2}>
        <Skeleton variant="text" />
        <Card sx={{ minWidth: 375 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              <article className="SingleUser">
                <h2>
                  <NewspaperIcon sx={{ fontSize: 100 }}></NewspaperIcon>
                  Welcome to nc-news!{" "}
                  <NewspaperIcon sx={{ fontSize: 100 }}></NewspaperIcon>
                </h2>
                <h3>Please use the navigation bar to move around</h3>
              </article>
            </Typography>
          </CardContent>
        </Card>

        {/* -- individual UserCard which shows user info name, image-- */}

        {users.map((user) => {
          return isLoading ? (
            <h1>Loading Please Wait.....</h1>
          ) : (
            <li key={user.username}>
              <Button
                style={{ minWidth: "660px" }}
                variant="contained"
                href={`/users/${user.username}`}
              >
                <h5>{user.username}</h5>
              </Button>
            </li>
          );
        })}
      </Stack>
    </ul>
  );
};
export default Homepage;

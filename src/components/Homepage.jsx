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

function Homepage() {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { username } = useParams();
  console.log(username);

  console.log(setUser);

  useEffect(() => {
    setIsLoading(true);
    getSingleUser(username).then((userData) => {
      console.log(userData);
      setUser(userData);
      setIsLoading(false);
    });
  }, [username]);

  return (
    <>
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
                  Just some of our regular posters!{" "}
                  <NewspaperIcon sx={{ fontSize: 100 }}></NewspaperIcon>
                </h2>
              </article>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 375 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              <article className="SingleUser">
                <h4>Author username and picture/avatar {user.username}</h4>

                <img src={user.avatar_url} alt="user avatar"></img>
              </article>
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large">Expand</Button>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: 375 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              <article className="SingleUser">
                <h4>Author name and picture/avatar {user.username}</h4>

                <img src={user.avatar_url} alt="user avatar"></img>
              </article>
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large">Expand</Button>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: 375 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              <article className="SingleUser">
                <h4>Author name and picture/avatar {user.username}</h4>

                <img src={user.avatar_url} alt="user avatar"></img>
              </article>
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large">Expand</Button>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: 375 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              <article className="SingleUser">
                <h4>Author name and picture/avatar {user.username}</h4>

                <img src={user.avatar_url} alt="user avatar"></img>
              </article>
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large">Expand</Button>
          </CardActions>
        </Card>
      </Stack>
    </>
  );
}
export default Homepage;

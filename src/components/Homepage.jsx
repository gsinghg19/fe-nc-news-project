import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { styled } from '@mui/material/styles';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleUser } from '../utils/api';
// import UserCard from './UserCard';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginRight: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Homepage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState();
  const { username } = useParams();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
                  Welcome to nc-news!{' '}
                  <NewspaperIcon sx={{ fontSize: 100 }}></NewspaperIcon>
                </h2>
                <h3>Please use the navigation bar to move around</h3>
              </article>
              <CardActions>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep
                    skillet over medium-high heat. Add chicken, shrimp and
                    chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate
                    and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and
                    fragrant, about 10 minutes. Add saffron broth and remaining
                    4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with
                    artichokes and peppers, and cook without stirring, until
                    most of the liquid is absorbed, 15 to 18 minutes. Reduce
                    heat to medium-low, add reserved shrimp and mussels, tucking
                    them down into the rice, and cook again without stirring,
                    until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don’t open.)
                  </Typography>
                </CardContent>
              </Collapse>
            </Typography>
          </CardContent>
        </Card>
        {/* -- individual UserCard which shows user info name, image-- */}
        {/* {users.map((user) => {
          return isLoading ? (
            <h1>Loading Please Wait.....</h1>
          ) : (
            <li key={user.username}>
              <Button
                style={{ minWidth: '660px' }}
                variant="contained"
                href={`/users/${user.username}`}
              >
                <h5>{user.username}</h5>
              </Button>
            </li>
          ); */}
        {/* })} */}
      </Stack>
    </ul>
  );
}

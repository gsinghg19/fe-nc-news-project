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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
                    Hello and welcome to my frontend project using my
                    Northcoders backend api project to show you Northcoders news
                    articles.
                  </Typography>
                  <Typography paragraph>
                    Northcoders News is a social news aggregation, web content
                    rating, and discussion website. Northcoders News has
                    articles which are divided into topics. Each article has
                    user curated ratings and can be up or down voted using the
                    API. Users can also add comments about an article.
                  </Typography>
                  <Typography paragraph>
                    I have Pulled together all the front-end skills,
                    technologies and best practices I have learnt. Making
                    asynchronous API calls to my own server. Using HTTP request
                    types to interact with my backend, and HTTP response codes
                    to update my UI accordingly.
                  </Typography>
                </CardContent>
              </Collapse>
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </ul>
  );
}

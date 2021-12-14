import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box
} from '@mui/material';
import { StyledWrapper } from './News.styles';
import FullPageSpinner from '../components/FullPageSpinner/FullPageSpinner';

export const query = `
         {
          allArticles {
            id
            title
            content
            image {
              url
            }
          }
        }
      `;

const News = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`
          }
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => {
        setError("Sorry, we couldn't load articles for you");
      });
  }, []);

  return (
    <StyledWrapper>
      {articles ? (
        articles.map(({ title, content, image }) => (
          <CardActionArea
            key={title}
            sx={{
              boxShadow: '0 3px 15px rgba(0, 0, 0, 0.089)',
              display: 'flex',
              width: '900px'
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 350 }}
              image={image.url}
              alt="Live from space album cover"
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardContent sx={{ display: 'flex' }}>
                <Typography component="div" variant="h5">
                  {title}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                {content}
              </Box>
            </Box>
          </CardActionArea>
        ))
      ) : (
        <FullPageSpinner />
      )}
    </StyledWrapper>
  );
};

export default News;

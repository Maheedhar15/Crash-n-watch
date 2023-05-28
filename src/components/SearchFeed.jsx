import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { CircularProgress } from 'react-cssfx-loading';
import Videos from './Videos';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const [Loading, setLoading] = useState('loading');
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}&maxResults=50`).then(
      (data) => {
        setVideos(data.items);
        setLoading('loaded');
      }
    );
  }, []);
  console.log(videos);
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        Search Results for:{' '}
        <span style={{ color: '#F31503' }}>{searchTerm}</span>
      </Typography>
      {Loading === 'loaded' ? (
        <Videos videos={{ videos }} />
      ) : (
        <CircularProgress
          color="#FF0000"
          width="60px"
          height="60px"
          duration="3s"
          style={{ marginLeft: '45rem', marginTop: '12rem' }}
        />
      )}
    </Box>
  );
};

export default SearchFeed;

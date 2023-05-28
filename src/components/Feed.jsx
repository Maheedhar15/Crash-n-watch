import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { CircularProgress } from 'react-cssfx-loading';
import Sidebar from './Sidebar';
import Videos from './Videos';

import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  const [Loading, setLoading] = useState('loading');
  useEffect(() => {
    fetchFromAPI(
      `search?part=snippet&q=${selectedCategory}&maxResults=50`
    ).then((data) => {
      setVideos(data.items);
      setLoading('loaded');
    });
  }, [selectedCategory]);
  console.log(videos);
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className="copyright" sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2023
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          {selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
        </Typography>
        {Loading === 'loaded' ? (
          <Videos videos={{ videos }} />
        ) : (
          <CircularProgress
            color="#FF0000"
            width="60px"
            height="60px"
            duration="3s"
            style={{ marginLeft: '37rem', marginTop: '14rem' }}
          />
        )}
      </Box>
    </Stack>
  );
};

export default Feed;

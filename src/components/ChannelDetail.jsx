import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

import { CircularProgress } from 'react-cssfx-loading';

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const [channelLoading, setChannelLoading] = useState('loading');
  const [VideoLoading, setVideoLoading] = useState('LOADING');
  const [videos, setvideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then(
      (data) => setchannelDetail(data?.items[0]),
      setChannelLoading('loaded')
    );
    fetchFromAPI(
      `search?channelId=${id}&part=snippet&maxResults=50&order=date`
    ).then((data) => {
      console.log(data);
      setvideos(data?.items);
      setVideoLoading('LOADED');
    });
  }, [id]);

  return (
    <Box minHeight="95vh">
      <div
        style={{
          background:
            'linear-gradient(90deg, rgba(255,151,4,1) 23%, rgba(255,255,255,1) 50%, rgba(20,163,1,1) 100%)',
          zIndex: 10,
          height: '300px',
        }}
      />
      <ChannelCard channelDetail={channelDetail} margintop="-93px" />
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px' } }} />
        {VideoLoading === 'LOADED' ? (
          <Videos videos={videos} isChannel="yes" />
        ) : (
          <CircularProgress
            color="#fff"
            width="60px"
            height="60px"
            duration="3s"
            style={{ marginLeft: '40rem' }}
          />
        )}
      </Box>
    </Box>
  );
};

export default ChannelDetail;

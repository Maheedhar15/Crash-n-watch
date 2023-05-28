import React from 'react';
import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos, isChannel, direction }) => {
  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {' '}
      {isChannel === 'yes' ? (
        <Stack
          direction={direction || 'row'}
          flexWrap="wrap"
          justifyContent="start"
          gap={2}
        >
          {videos.map((item, idx) => (
            <Box key={idx}>
              {' '}
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          ))}
        </Stack>
      ) : (
        <Stack
          direction={direction || 'row'}
          flexWrap="wrap"
          justifyContent="start"
          gap={2}
        >
          {videos.videos.map((item, idx) => (
            <Box key={idx}>
              {' '}
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default Videos;

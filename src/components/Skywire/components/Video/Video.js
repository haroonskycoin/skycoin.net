import React from 'react';
import styled from 'styled-components';
import { Box,Flex } from 'grid-styled';
import YouTube from 'react-youtube';
import Container from 'components/Container';
import media from 'utils/media';

import { COLOR } from 'config';

const videoHeight = '480';
const playerOptions = {
  height: videoHeight,
  width: '854',
  playerVars: {
    rel: 0,
  },
};

const videoId = 'wG9Q3xzSPdI';

const Wrapper = styled(Box)`
  background: ${COLOR.lightBlue};
`;

const VideoWrapper = styled(Box)`
  position: relative;
  width: 100%;
  padding-bottom: 25px;
  height:${videoHeight/2}px;

  ${media.sm.css`
    height:${videoHeight}px;
  `}
  
  & > span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
  }
  
  iframe {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const Video = () => (
  <Wrapper py={[8, 10, 13]}>
    <Container>
      <VideoWrapper>
        <YouTube videoId={videoId} opts={playerOptions} />
      </VideoWrapper>
    </Container>
  </Wrapper>
);

export default Video;

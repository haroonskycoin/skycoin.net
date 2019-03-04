import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import media from 'utils/media';

const videoHeight = 480;
const videoWidth = '100%';
const playerOptions = {
  height: videoHeight,
  width: videoWidth,
  playerVars: {
    rel: 0,
  },
};

const VideoWrapper = styled.div`
position: relative;
  width:320px;
  height:${videoHeight / 2}px;

  ${media.sm.css`
    width:100%;
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
const videoId = '-CbSdVIwr8E';


const Video = () =>
  (<VideoWrapper>
    <YouTube videoId={videoId} opts={playerOptions} />
  </VideoWrapper>);

export default Video;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import media from 'utils/media';

const StyledBox = styled(Box)`
  position: relative;
`;

const ImgWrap = styled.div`
  width: 100%;
  background: url(${props => props.img}) 0 0 no-repeat;
  background-size: cover;
`;

const GalleryWrapper = styled(Flex)`
  position: relative;
  min-height: 100%;  
  
  ${ImgWrap} {
    position: relative;
    height: 0;
  }

  ${StyledBox}:nth-child(1) {
    width: 100%;
    
    ${media.sm.css`
      width: 33%;
    `}
  
    ${ImgWrap} {
      padding-top: 68.6%;
    }
  }
  
  ${StyledBox}:nth-child(2) {
    width: 100%;
    
    ${media.sm.css`
      width: 43%;
    `}
  
    ${ImgWrap} {
      padding-top: 52%;
    }
  }

  
  ${StyledBox}:nth-child(3) {
      width: 100%;
    
    ${media.sm.css`
      width: 24%;
    `}
  
    ${ImgWrap} {
      padding-top: 97.6%;
    }
  
  }
  
 
  
  
`;

const GraphicItem = ({ src }) => (
  <StyledBox px={3} pt={3}>
    <ImgWrap img={src} />
  </StyledBox>
);

GraphicItem.propTypes = {
  src: PropTypes.string.isRequired,
};

const Gallery = ({ imgList }) => (
  <GalleryWrapper wrap mx={-3} my={3}>
    {imgList.map((item, i) => <GraphicItem key={i} src={item} />)}
  </GalleryWrapper>
);

Gallery.propTypes = {
  imgList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Gallery.defaultProps = {
  reverse: false,
};

export default Gallery;

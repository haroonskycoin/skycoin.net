import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';


import { rem } from 'polished';
import media from 'utils/media';
import { COLOR, SPACE } from 'config';


const Icon = styled.img.attrs({
  src: props => props.src,
})`
  display: block;
  max-width: 100%;
  height: ${props => props.width};
  margin-bottom: ${rem(SPACE[4])};
  witdth:${props => props.width};
  
  ${media.sm.css`
    margin-bottom: 0;  
  `}
`;

Icon.defaultProps = {
  width: 'auto',
  height: 'auto',
};

const CardWrapper = styled.div`
  padding:7px;

  ${media.md.css`
  width:100%;
  `}
`;

const Card = styled(Flex)`
  flex-direction:${props => props.flexDirection};
  background: ${COLOR.white};
  
  a {
    color: ${COLOR.base};
    text-decoration: none;
  }
`;

const Column = styled(Flex)`
  flex-direction: column;
  padding: 2rem;
`;

const ImageCard = ({ children, image, flexDirection, align, width }) =>
  (<CardWrapper>
    <Card my={rem(SPACE[4])} wrap align={align} width={width} flexDirection={flexDirection}>
      {image}
      <Box width={[1, 1, 1 / 2]}>
        <Column p={1}>
          {children}
        </Column>
      </Box>
    </Card>
  </CardWrapper>
  );

ImageCard.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  flexDirection: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
};

ImageCard.defaultProps = {
  flexDirection: 'row',
  align: 'flex-start',
  width: 'auto',
};

export default ImageCard;


const ImageWrapper = styled(Flex)`
  background: ${props => props.backgroundColor};
  height: ${props => props.height};
  
  img {
    height: 60%;
  }
`;

ImageWrapper.propTypes = {
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
};

export const ImageContainer = ({ height, width, image, iconWidth, iconHeight, backgroundColor }) =>
  (<ImageWrapper width={width} justify="center" align="center" px={5} height={height} backgroundColor={backgroundColor}>
    <Icon src={image} width={iconWidth} height={iconHeight} />
  </ImageWrapper>
  );

ImageContainer.propTypes = {
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
  iconHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  iconWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  image: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

ImageContainer.defaultProps = {
  iconWidth: 'auto',
  iconHeight: 'auto',
  backgroundColor: COLOR.dark,
};

const ImageFullWrapper = styled(Flex)`    
  align-items: center;
  padding:0;

  img {
    height: ${props => props.height};
  }
`;

ImageFullWrapper.propTypes = {
  height: PropTypes.string.isRequired,
};

export const ImageFullContainer = ({ height, width, image }) =>
  (<ImageFullWrapper width={width} justify="center" align="center" px={5} height={height}>
    <Icon src={image} />
  </ImageFullWrapper>
  );

ImageFullContainer.propTypes = {
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
  image: PropTypes.string.isRequired,
};

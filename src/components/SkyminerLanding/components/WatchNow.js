import React from 'react';
import PropTypes from 'prop-types';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { rem } from 'polished';
import { Flex } from 'grid-styled';
import Link from 'components/Link';

import ImageCard from 'components/ImageCard';
import { ImageBackgroundContainer } from 'components/ImageCard/ImageCard';
import Text from 'components/Text';
import { SPACE, COLOR } from 'config';
import Title from './Title';
import image from '../images/watchNow.png';
import youtube from '../images/youtube.svg';

const Icon = styled.img`
  margin-right: ${rem(SPACE[3])};
  width:${props => props.width}
`;


const StyledText = styled(Text)`
  display:flex;
  flex-direction:row;
  align-items:center;
  margin-bottom:0;
  
`;

const YoutubeWrapper = styled(Flex)`
  flex-direction:column;
  padding-top:${rem(SPACE[4])};
`;

const StyledLink = styled(Link)`
  cursor:pointer;
  color:black !important;
`;

const Video = ({ text, icon, url }) =>
  (<StyledLink href={url}>
    <StyledText><Icon src={icon} width="40px" /><FormattedMessage id={text} /></StyledText>
  </StyledLink>);

Video.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const WatchNow = () => {
  const props = {
    image,
    height: '360px',
    width: [1, 1, 1 / 2],
    backgroundColor: COLOR.base,
  };
  const icon = <ImageBackgroundContainer {...props} />;

  return (
    <ImageCard image={icon} width={['320px', '320px', 'auto']} flexDirection="row-reverse">
      <Title id="landing.skyminer.watchNow.title" />
      <StyledText>
        <FormattedHTMLMessage id="landing.skyminer.watchNow.description" />
      </StyledText>
      <YoutubeWrapper>
        <Video text="landing.skyminer.watchNow.youtube.video1" icon={youtube} url="https://www.youtube.com/watch?v=vG1QdyZzBzo" />
        <Video text="landing.skyminer.watchNow.youtube.video2" icon={youtube} url="https://www.youtube.com/watch?v=1F27ZWZPd8A" />
        <Video text="landing.skyminer.watchNow.youtube.video3" icon={youtube} url="https://www.youtube.com/watch?v=-CbSdVIwr8E" />
      </YoutubeWrapper>
    </ImageCard>
  );
};

export default WatchNow;

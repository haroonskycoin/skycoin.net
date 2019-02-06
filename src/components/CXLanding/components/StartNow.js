import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import ImageCard from 'components/ImageCard';
import { ImageFullContainer } from 'components/ImageCard/ImageCard';
import Text from 'components/Text';
import Title from './Title';

import startNow from '../images/startNow.png';

const StyledText = styled(Text)`
  display:flex;
  flex-direction:row;
  align-items:center;
  margin-bottom:0;
  
`;

const StartNow = () => {
  const image = <ImageFullContainer image={startNow} width={['320px', 'auto', 'auto']} height="320px" />;
  return (
    <ImageCard flexDirection="row-reverse" width={['320px', '320px', 'auto']} align="center" image={image}>
      <Title id="landing.cx.start.title" />
      <StyledText><FormattedMessage id="landing.cx.start.description" /></StyledText>
    </ImageCard>
  );
};

export default StartNow;

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import ImageCard from 'components/ImageCard';
import { ImageFullContainer } from 'components/ImageCard/ImageCard';
import Text from 'components/Text';

import afee from '../images/afee.png';
import { COLOR } from '../../../config';


const SpanLight = styled.span`
  font-weight:100;
  color:${COLOR.textGrey};
  font-style:italic;
`;

const StartNow = () => {
  const image = <ImageFullContainer image={afee} width={['320px', 'auto', 'auto']} height="320px" />;
  return (
    <ImageCard flexDirection="row-reverse" width={['320px', '320px', 'auto']} align="center" image={image}>
      <Text>
        <FormattedMessage id="landing.cx.start.text" />
        <SpanLight> - <FormattedMessage id="landing.cx.start.name" /></SpanLight>
      </Text>
    </ImageCard>
  );
};

export default StartNow;

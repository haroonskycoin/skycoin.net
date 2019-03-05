import React from 'react';
import { FormattedHTMLMessage,FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { rem } from 'polished';


import ImageCard from 'components/ImageCard';
import { ImageFullContainer } from 'components/ImageCard/ImageCard';
import Text from 'components/Text';
import { FONT_SIZES, SPACE, COLOR } from 'config';
import Title from './Title';
import image from '../images/hardware.png';


const StyledText = styled(Text)`
  ul{
    font-size:${rem(FONT_SIZES[3])};
    line-height:${rem(SPACE[7])} !important;
    margin-bottom:0;
  }
  margin-bottom:0;
`;




const Hardware = () => {
  
  const icon = <ImageFullContainer image={image} height='320px' width={[1, 1, 1 / 2]} backgroundColor={COLOR.base}/>;

  return (
    <ImageCard image={icon} width={['320px', '320px', 'auto']}>
      <Title id="landing.skyminer.hardware.title" />
      <StyledText>
        <FormattedHTMLMessage id="landing.skyminer.hardware.description" />
      </StyledText>
      
    </ImageCard>
  );
};

export default Hardware;

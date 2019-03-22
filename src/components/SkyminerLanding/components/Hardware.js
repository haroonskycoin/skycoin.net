import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';
import { rem } from 'polished';


import ImageCard from 'components/ImageCard';
import { ImageBackgroundContainer } from 'components/ImageCard/ImageCard';
import { FONT_SIZES, SPACE, COLOR, FONT_FAMILIES } from 'config';
import Title from './Title';
import image from '../images/hardware.png';


const StyledText = styled.ul`
  font-family: ${FONT_FAMILIES.sans};
  a {
    color: ${props => (props.linkColor ? props.linkColor : 'inherit')};
  }

  font-size:${rem(FONT_SIZES[3])};
  line-height:${rem(SPACE[7])} !important;
  margin-bottom:0;
`;


const Hardware = () => {
  const icon = (<ImageBackgroundContainer
    image={image}
    height="360px"
    width={[1, 1, 1 / 2]}
    backgroundColor={COLOR.base}
    iconHeight="320px"
    iconWidth="360px"
  />);

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

import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import ImageCard from 'components/ImageCard';
import { ImageContainer } from 'components/ImageCard/ImageCard';
import Text from 'components/Text';
import { FONT_SIZES, SPACE, COLOR } from 'config';
import { FormattedHTMLMessage } from 'react-intl';
import image from '../images/forbes.svg';


const StyledText = styled(Text)`
  ul{
    font-size:${rem(FONT_SIZES[5])};
    line-height:${rem(SPACE[8])} !important;
  }
`;

const Forbes = () => {
  const imageProps = {
    image,
    height: '320px',
    width: [1, 1, 1 / 2],
    iconWidth: '75%',
    backgroundColor: COLOR.black,
  };
  const icon = <ImageContainer {...imageProps} />;

  return (
    <ImageCard image={icon} width={['320px', '320px', 'auto']} flexDirection="row-reverse">
      <StyledText>
        <FormattedHTMLMessage id="landing.skyminer.forbes.description" />
      </StyledText>
    </ImageCard>
  );
};

export default Forbes;

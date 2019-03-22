import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import ImageCard from 'components/ImageCard';
import { ImageContainer } from 'components/ImageCard/ImageCard';
import Text from 'components/Text';
import { SPACE, COLOR } from 'config';
import { FormattedHTMLMessage } from 'react-intl';
import media from 'utils/media';
import image from '../images/forbes.svg';
import Title from './Title';

const StyledText = styled(Text)`
  line-height:${rem(SPACE[6])};

  ${media.md.css`
  line-height:${rem(SPACE[7])};
  `}
`;

const Link = styled.a`
  color:${COLOR.black} !important;
  text-decoration: none;
`;

const Forbes = () => {
  const imageProps = {
    image,
    height: '430px',
    width: [1, 1, 1 / 2],
    iconWidth: '75%',
    backgroundColor: COLOR.black,
  };
  const icon = <ImageContainer {...imageProps} />;

  return (
    <Link target="_blank" href="http://forbes.com/sites/andrewrossow/2018/10/04/trick-or-treat-13-blockchain-companies-by-industry-that-will-have-your-cauldrons-bubbling-for-2019/">
      <ImageCard image={icon} width={['320px', '320px', 'auto']} flexDirection="row-reverse">
        <Title id="landing.skyminer.forbes.title" />
        <StyledText>
          <FormattedHTMLMessage id="landing.skyminer.forbes.description" />

        </StyledText>
      </ImageCard>
    </Link>
  );
};

export default Forbes;

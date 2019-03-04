import React from 'react';
import PropTypes from 'prop-types';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { rem } from 'polished';

import ImageCard from 'components/ImageCard';
import { ImageFullContainer, ImageContainer } from 'components/ImageCard/ImageCard';
import Text from 'components/Text';
import { FONT_SIZES, SPACE, COLOR } from 'config';
import Title from './Title';
import Button from './Button';

const StyledButton = styled(Button)`
  border-radius:10px !important !important;
`;

const StyledText = styled(Text)`
  ul{
    font-size:${rem(FONT_SIZES[5])};
    line-height:${rem(SPACE[8])} !important;
  }
`;

const FeatureItem = ({ title, description, image, flexDirection, isIcon, to, button }) => {
  const props = {
    image,
    height: '320px',
    width: [1, 1, 1 / 2],
    backgroundColor: COLOR.base,
  };
  const icon = isIcon ? (<ImageContainer {...props} />) : (<ImageFullContainer {...props} />);

  return (
    <ImageCard image={icon} width={['320px', '320px', 'auto']} flexDirection={flexDirection}>
      <Title id={title} />
      <StyledText>
        <FormattedHTMLMessage id={description} />
      </StyledText>
      {button && <StyledButton to={to} borderRadius={10}>
        <FormattedMessage id="landing.skywallet.features.learnMore" />
      </StyledButton>}
    </ImageCard>
  );
};

FeatureItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  flexDirection: PropTypes.string.isRequired,
  button: PropTypes.bool.button.isRequired,
  isIcon: PropTypes.bool.button.isRequired,
};

FeatureItem.defaultProps = {
  to: '',
};

export default FeatureItem;

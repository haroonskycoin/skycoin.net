import React from 'react';
import PropTypes from 'prop-types';
import { FormattedHTMLMessage } from 'react-intl';

import ImageCard from 'components/ImageCard';
import { ImageFullContainer,ImageContainer } from 'components/ImageCard/ImageCard';
import Text from 'components/Text';
import Title from './Title';
import Button from './Button';
import { FormattedMessage } from 'react-intl';

const FeatureItem = ({ title, description, image,flexDirection,isIcon,to }) => {

  const props = {
    image:image,
    height:"320px",
    width:[1, 1, 1 / 2]
  };
  const icon = isIcon?(<ImageContainer {...props}/>):(<ImageFullContainer {...props}/>);

  return (
    <ImageCard image={icon} width={['320px', '320px', 'auto']} flexDirection={flexDirection}>
      <Title id={title} />
      <Text>
        <FormattedHTMLMessage id={description} />
      </Text>
      <Button to={to}>
      <FormattedMessage id='landing.skywallet.features.learnMore' />
      </Button>
    </ImageCard>
  );
};

FeatureItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

FeatureItem.defaultProps = {
  to:''
};

export default FeatureItem;

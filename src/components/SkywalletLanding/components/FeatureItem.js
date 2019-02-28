import React from 'react';
import PropTypes from 'prop-types';
import { FormattedHTMLMessage } from 'react-intl';

import ImageCard from 'components/ImageCard';
import { ImageFullContainer,ImageContainer } from 'components/ImageCard/ImageCard';
import Text from 'components/Text';
import Title from './Title';

const FeatureItem = ({ title, description, image,flexDirection,isIcon }) => {

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
    </ImageCard>
  );
};

FeatureItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FeatureItem;

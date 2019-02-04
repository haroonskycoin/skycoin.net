import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import ImageCard from 'components/ImageCard';
import { ImageContainer } from 'components/ImageCard/ImageCard';
import Text from 'components/Text';
import Title from './Title';
import styled from 'styled-components';


const SytledList = styled.ul`
  margin-left:0;
`;

const ListItem = styled.li`
  p {
    margin:0;
  }
`;

const FeatureItem = ({ title, description, image, list,iconWidth,iconHeight }) => {
  const icon = <ImageContainer image={image} height="320px" width={[1, 1, 1 / 2]} iconWidth={iconWidth} iconHeight={iconHeight} />;
  return (
    <ImageCard image={icon} width={['320px', '320px', 'auto']}>
      <Title id={title} />
      {description && <Text><FormattedMessage id={description} /></Text>}
      {list && <SytledList>{list.map((item)=> <ListItem><Text><FormattedMessage id={item} /></Text></ListItem>)}</SytledList>}
    </ImageCard>
  );
};

FeatureItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string),
  iconWidth:PropTypes.number,
  iconHeight:PropTypes.number
};

export default FeatureItem;

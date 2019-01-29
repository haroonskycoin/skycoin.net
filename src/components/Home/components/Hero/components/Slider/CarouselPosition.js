import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLOR, FONT_SIZES } from 'config';
import { rem } from 'polished';


const Container = styled.div`
color:white
`;

const Point = styled.span`
    &:before {
        content: ' \\25CF';
        font-size: ${rem(FONT_SIZES[5])};
        color:${COLOR.white};
    }
`;
const PositionPoint = styled(Point)`
    &:before {
        color:${COLOR.base};
    }
`;


const getPoints = (position, numItems) => {
  const points = [];

  for (let i = 0; i < numItems; i += 1) {
    if (i === position) {
      points.push(<PositionPoint />);
    } else {
      points.push(<Point />);
    }
  }


  return points;
};

const CarouselPosition = ({ position, numItems }) =>
  (<Container column>
    {getPoints(position, numItems)}
  </Container>);

CarouselPosition.propTypes = {
  position: PropTypes.number.isRequired,
  numItems: PropTypes.number.isRequired,
};

export default CarouselPosition;

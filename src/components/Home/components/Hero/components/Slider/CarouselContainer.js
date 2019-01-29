import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SPACE, COLOR, FONT_SIZES } from 'config';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import { rem } from 'polished';

import CarouselPosition from './CarouselPosition';


const ITEM_WITH_VALUE = 400;
const ITEM_WIDTH = `${ITEM_WITH_VALUE}px`;

const StyledContainer = styled(Flex)`
`;

const StyledCarouselContainer = styled(Flex)`
    align-items:center;
`;

const CarouselContent = styled(Flex)`
    transition:transform 1s ease;
    transform: translateX(calc(-${props => props.position * ITEM_WITH_VALUE}px));
`;

const Wrapper = styled(Flex)`
    width: ${ITEM_WIDTH};
    overflow: hidden;
`;

const CarouselSlot = styled(Flex)`
    width: ${ITEM_WIDTH};
`;

class CarouselContainer extends Component {

  getNumItems() {
    return this.props.children.length || 1;
  }


  render() {
    return (
      <StyledContainer column>
        <StyledCarouselContainer row>
          <Wrapper>
            <CarouselContent position={this.props.position}>
              { this.props.children.map((child, index) => (
                <CarouselSlot key={index}>
                  {child}
                </CarouselSlot>
              )) }
            </CarouselContent>
          </Wrapper>
        </StyledCarouselContainer>
        <CarouselPosition position={this.props.position} numItems={this.getNumItems()} />
      </StyledContainer>
    );
  }
}

CarouselContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  position: PropTypes.number.isRequired
};

export default CarouselContainer;

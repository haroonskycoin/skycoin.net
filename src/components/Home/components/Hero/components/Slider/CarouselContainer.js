import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Flex } from 'grid-styled';
import media from 'utils/media';

import CarouselPosition from './CarouselPosition';


export const ANIMATION_DURATION = 1000;
export const ITEM_WIDTH_VALUE = 450;
export const ITEM_WIDTH = `${ITEM_WIDTH_VALUE}px`;

export const ITEM_WIDTH_SM_VALUE = 250;
export const ITEM_WIDTH_SM = `${ITEM_WIDTH_SM_VALUE}px`;

const StyledContainer = styled(Flex)`
`;

const StyledCarouselContainer = styled(Flex)`
    align-items:center;
`;

const CarouselContent = styled(Flex)`    
  ${(props) => {
    if (props.animated) {
      return (`transition:transform ${ANIMATION_DURATION}ms ease;`);
    }
    return '';
  }}

  transform: translateX(calc(-${props => props.position * ITEM_WIDTH_SM_VALUE}px));
  ${media.sm.css`
    transform: translateX(calc(-${props => props.position * ITEM_WIDTH_VALUE}px));
`}    
`;

const Wrapper = styled(Flex)`
  width:${ITEM_WIDTH_SM};    
    overflow: hidden;

${media.sm.css`
    width: ${ITEM_WIDTH};
`}
`;

const CarouselSlot = styled(Flex)`
width:${ITEM_WIDTH_SM};

${media.sm.css`
      width: ${ITEM_WIDTH};
`}
`;

class CarouselContainer extends Component {
  getNumItems() {
    return this.props.children.length || 1;
  }

  getPosition() {
    return this.props.position + 1;
  }


  render() {
    return (
      <StyledContainer
        column
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
      >
        <StyledCarouselContainer row>
          <Wrapper>
            <CarouselContent position={this.getPosition()} animated={this.props.animated}>
              <CarouselSlot>
                {this.props.children[this.props.children.length - 1]}
              </CarouselSlot>
              { this.props.children.map((child, index) => (
                <CarouselSlot key={index}>
                  {child}
                </CarouselSlot>
              )) }
              <CarouselSlot>
                {this.props.children[0]}
              </CarouselSlot>
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
  position: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  animated: PropTypes.bool.isRequired,
};

CarouselContainer.defaultProps = {
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  animated: false,
};

export default CarouselContainer;

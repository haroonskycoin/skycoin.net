import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SPACE, COLOR, FONT_SIZES } from 'config';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import { rem } from 'polished';
import Fa from '@fortawesome/react-fontawesome';
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';
import CarouselPosition from './CarouselPosition';


const ITEM_WITH_VALUE = 400;
const ITEM_WIDTH = `${ITEM_WITH_VALUE}px`;

const StyledContainer = styled(Flex)`
    padding: 0 ${rem(SPACE[7])};
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

const StyledButton = styled.div`
    margin: 0 ${props => (props.mr ? props.mr : 0)} 0 ${props => (props.ml ? props.ml : 0)}}
`;

const IconStyle = {
  fontSize: rem(FONT_SIZES[5]),
  color: COLOR.paleGrey,
  fontWeight: 100,
  cursor: 'pointer',
};

const Icon = props => <Fa icon={props.icon} style={IconStyle} />;

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

class CarouselContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
    };
  }

  getNumItems() {
    return this.props.children.length || 1;
  }

  prevSlide = () => {
    const position = this.state.position - 1;

    if (position < 0) {
      return;
    }
    this.doSliding(position);
  }

  nextSlide = () => {
    const position = this.state.position + 1;
    const numItems = this.getNumItems();

    if (position > numItems - 1) {
      return;
    }

    this.doSliding(position);
  }

  doSliding = (position) => {
    this.setState({ position });
  }


  render() {
    return (
      <StyledContainer column>
        <StyledCarouselContainer row>
          <StyledButton mr={rem(SPACE[3])} onClick={() => this.prevSlide()}>
            <Icon icon={faChevronLeft} />
          </StyledButton>
          <Wrapper>
            <CarouselContent position={this.state.position}>
              { this.props.children.map((child, index) => (
                <CarouselSlot key={index}>
                  {child}
                </CarouselSlot>
              )) }
            </CarouselContent>
          </Wrapper>
          <StyledButton ml={rem(SPACE[3])} onClick={() => this.nextSlide()}>
            <Icon icon={faChevronRight} />
          </StyledButton>
        </StyledCarouselContainer>
        <CarouselPosition position={this.state.position} numItems={this.getNumItems()} />
      </StyledContainer>
    );
  }
}

CarouselContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default CarouselContainer;

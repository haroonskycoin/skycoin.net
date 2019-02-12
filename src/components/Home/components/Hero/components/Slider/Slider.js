import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { rem, rgba } from 'polished';
import Carousel from 'nuka-carousel';

import Fa from '@fortawesome/react-fontawesome';
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';


import { Flex, Box } from 'grid-styled';
import media from 'utils/media';

import Button from 'components/Button';
import Buy from 'components/Buy';
import Heading from 'components/Heading';


import { SPACE, COLOR, FONT_SIZES } from 'config';
import CarouselItem from './CarouselItem';

const AUTOPLAY_INTERVAL = 6000;
const ANIMATION_SPEED = 1000;
const ITEM_WIDTH_VALUE = 450;
const ITEM_WIDTH_SM_VALUE = 250;
const ITEM_WIDTH_SM = `${ITEM_WIDTH_SM_VALUE}px`;
const SLIDE_OFFSET = 40;
const ITEM_WIDTH = `${ITEM_WIDTH_VALUE}px`;

const Intro = styled(Box)`
  
  ${media.sm.css`
    background-color: ${rgba(16, 31, 52, 0.9)};
  `}
  
  ${media.md.css`
    margin-right: 0;
  `}
`;

const ButtonsContainer = styled(Flex)`
  padding: ${rem(SPACE[5])} 0;
  width:100%;
  flex-direction:column;
  

  ${media.sm.css`
    padding: ${rem(SPACE[5])} 0;
    width:${ITEM_WIDTH};
    flex-direction:row;
  `}
`;

const StyledBuy = styled(Buy)`
  padding: ${rem(SPACE[4])} ${rem(SPACE[5])};
  margin-bottom:${rem(SPACE[3])};
  
  ${media.sm.css`
    margin-right:${rem(SPACE[5])};
    margin-bottom:0;
  `}

`;

const StyledDownloads = styled(Button)`
  padding: ${rem(SPACE[4])} ${rem(SPACE[5])};

  ${media.sm.css`
    margin-left:${rem(SPACE[5])};
  `}

 
`;

const StyledButton = styled(Flex)`
  align-items:center;
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

const StyledCarousel = styled(Carousel)`
  width:${ITEM_WIDTH_SM} !important;
  ${media.sm.css`
    width:${ITEM_WIDTH} !important;
  `}
`;

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      autoplay: true,
      timeoutId: null,
      sliderAnimated: true,
    };
  }

  componentDidMount() {
  }

  getNumItems = () => 5

  clearTimeout = () => {
    if (this.state.timeoutId) {
      clearTimeout(this.state.timeoutId);
      this.setState({ timeoutId: null });
    }
  }


  handlePrevSlide = () => {
    this.prevSlide();
  }

  prevSlide = () => {
    this.doSliding(this.state.position - 1);
  }

  handleNextSlide = () => {
    this.nextSlide();
  }

  nextSlide = () => {
    this.doSliding(this.state.position + 1);
  }

  handleAfterSlide = (position) => {
    if (this.state.position !== position) {
      this.setState({ position });
    }
  }

  doSliding = (position) => {
    this.setState({ position });
  }

  render() {
    return (
      <Flex wrap row px={0} width={'100%'} pt={[0, 0, 9]}>
        <Intro width={['100%', 'auto', 'auto']} p={[0, 5, 5]}>
          <Flex row>
            <StyledButton mr={rem(SPACE[6])} onClick={() => this.handlePrevSlide()}>
              <Icon icon={faChevronLeft} />
            </StyledButton>
            <Flex column>
              <Heading heavy as="h1" color="white" fontSize={[6, 7, 8]} mb={rem(SPACE[3])} alignItem="center">
                <FormattedMessage id="home.hero.heading" />
              </Heading>
              <StyledCarousel
                afterSlide={this.handleAfterSlide}
                slideIndex={this.state.position}
                autoplay={this.state.autoplay}
                autoplayInterval={AUTOPLAY_INTERVAL}
                slideOffset={SLIDE_OFFSET}
                pauseOnHover
                speed={ANIMATION_SPEED}
                withoutControls
                wrapAround
                easing="easeLinear"
              >
                <CarouselItem title="home.hero.slider.revolutionary.title" content="home.hero.slider.revolutionary.description" position={1} numItems={this.getNumItems()} />
                <CarouselItem title="home.hero.slider.obelisk.title" content="home.hero.slider.obelisk.description" position={2} numItems={this.getNumItems()} />
                <CarouselItem title="home.hero.slider.cx.title" content="home.hero.slider.cx.description" position={3} numItems={this.getNumItems()} />
                <CarouselItem title="home.hero.slider.skywire.title" content="home.hero.slider.skywire.description" position={4} numItems={this.getNumItems()} />
                <CarouselItem title="home.hero.slider.fiber.title" content="home.hero.slider.fiber.description" position={5} numItems={this.getNumItems()} />
              </StyledCarousel>
              <ButtonsContainer row spaceBetween align="center" width={[1]}>
                <StyledBuy color="white" bg="base" width={'100%'} pill>
                  <FormattedMessage id="home.hero.buy" />
                </StyledBuy>
                <StyledDownloads to="downloads" color="base" bg="white" width={'100%'} pill>
                  <FormattedMessage id="home.hero.wallet.get" />
                </StyledDownloads>
              </ButtonsContainer>
            </Flex>
            <StyledButton onClick={() => this.handleNextSlide()} ml={rem(SPACE[6])}>
              <Icon icon={faChevronRight} />
            </StyledButton>
          </Flex>
        </Intro>
      </Flex>
    );
  }
}

export default Slider;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { rem, rgba } from 'polished';

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
import CarouselContainer,{ITEM_WIDTH} from './CarouselContainer';

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
  padding: ${rem(SPACE[3])} ${rem(SPACE[5])};
  margin-bottom:${rem(SPACE[3])};
  
  ${media.sm.css`
    margin-right:${rem(SPACE[5])};
    margin-bottom:0;
  `}

`;

const StyledDownloads = styled(Button)`
  padding: ${rem(SPACE[3])} ${rem(SPACE[5])};

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


const TEXT_CYCLE = 4000;

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      textCycle:true
    };
  }

  componentDidMount () {
    this.textCycle();
  }

  textCycle(){
    setTimeout(() => {
      if(this.state.textCycle){
        this.nextSlide();
      }
      this.textCycle();
    },TEXT_CYCLE);
  }

  getNumItems = () => 5

  handlePrevSlide = ()=>{
    this.prevSlide();
  }

  prevSlide = () => {
    const position = this.state.position - 1;

    if (position < 0) {
      return;
    }
    this.doSliding(position);
  }

  handleNextSlide = () => {
    this.nextSlide();
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

  handleMouseEnter = ()=>{
    this.setState({textCycle:false});
  }

  handleMouseLeave = ()=>{
    this.setState({textCycle:true});
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
              <CarouselContainer column position={this.state.position} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <CarouselItem title="home.hero.slider.revolutionary.title" content="home.hero.slider.revolutionary.description" position={1} numItems={this.getNumItems()} />
                <CarouselItem title="home.hero.slider.obelisk.title" content="home.hero.slider.obelisk.description" position={2} numItems={this.getNumItems()} />
                <CarouselItem title="home.hero.slider.cx.title" content="home.hero.slider.cx.description" position={3} numItems={this.getNumItems()} />
                <CarouselItem title="home.hero.slider.skywire.title" content="home.hero.slider.skywire.description" position={4} numItems={this.getNumItems()} />
                <CarouselItem title="home.hero.slider.fiber.title" content="home.hero.slider.fiber.description" position={5} numItems={this.getNumItems()} />
              </CarouselContainer>
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

import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { rem, rgba } from 'polished';

import { Flex, Box } from 'grid-styled';
import media from 'utils/media';

import Button from 'components/Button';
import Buy from 'components/Buy';
import Heading from 'components/Heading';


import { SPACE, COLOR } from 'config';
import CarouselItem from './CarouselItem';
import CarouselContainer from './CarouselContainer';

const Intro = styled(Box)`
  
  ${media.sm.css`
    background-color: ${rgba(COLOR.dark, 0.9)};
  `}
  
  ${media.md.css`
    margin-right: 0;
  `}
`;

const ButtonsContainer = styled(Flex)`
  padding: ${rem(SPACE[5])} ${rem(SPACE[7])};
`;

const StyledBuy = styled(Buy)`
  padding: ${rem(SPACE[3])} 0;
  margin-right:${rem(SPACE[5])};
`;

const StyledDownloads = styled(Button)`
  padding: ${rem(SPACE[3])} 0;
  margin-left:${rem(SPACE[5])};
`;


class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
    };
  }


  render() {
    return (
      <Flex wrap row px={0} mx={-5} width={'100%'} pt={[0, 0, 9]}>
        <Intro width={[1, 1, 1 / 2]}>
          <Flex column>
            <Heading heavy as="h1" color="white" fontSize={[6, 7, 8]} mb={7}>
              <FormattedMessage id="home.hero.heading" />
            </Heading>
            <CarouselContainer column>
              <CarouselItem title="home.hero.slider.revolutionary.title" content="home.hero.slider.revolutionary.description" position={1} numItems={5} />
              <CarouselItem title="home.hero.slider.obelisk.title" content="home.hero.slider.obelisk.description" position={2} numItems={5} />
              <CarouselItem title="home.hero.slider.cx.title" content="home.hero.slider.cx.description" position={3} numItems={5} />
              <CarouselItem title="home.hero.slider.skywire.title" content="home.hero.slider.skywire.description" position={4} numItems={5} />
              <CarouselItem title="home.hero.slider.fiber.title" content="home.hero.slider.fiber.description" position={5} numItems={5} />
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
        </Intro>
      </Flex>
    );
  }
}

export default Slider;

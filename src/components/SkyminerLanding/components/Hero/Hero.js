import React from 'react';
import PropTypes from 'prop-types';
import { rem } from 'polished';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Container from 'components/Container';
import Logo from 'components/Logo';
import Heading from 'components/Heading';
import { FONT_FAMILIES, COLOR, FONT_SIZES, SPACE } from 'config';
import heroImg from '../../images/hero.png';
import Content from '../Content';
import Button from '../Button';

const Wrapper = styled(Flex)`

  position: relative;
  box-sizing: border-box;
  background-color:${COLOR.white};
  background-size: cover;
  overflow: hidden;
`;

const Intro = styled(Flex)`
  position: relative;
  z-index: 1;
`;

const IntroContent = styled(Flex)`
  position: relative;
  z-index: 1;
  flex-direction:column; 
  justify-content:center !important;
`;

const StyledIntro = styled(Intro)`
  top: 0;
  height: 100%;
  width: 100%;
`;

const StyledContainer = styled(Container)`
  display:flex;
  flex-direction:row;
  padding:0 !important;
`;

const StyledLogoContainer = styled.div`
  top: 5%;
  width: 100%;
`;


const Paragraph = styled.p`
  font-size: ${rem(FONT_SIZES[4])};
  color: ${COLOR.textDark};
  font-family: ${FONT_FAMILIES.sans};
  font-weight: 400;
  line-height: 2rem;
  text-transform: none;
`;


const ImageBox = styled(Box)`
  height:${rem(370)};
  background-image:url(${props => props.src});
  background-repeat:no-repeat;
  background-position:center;
  background-size:cover;
`;

const Hero = ({ title, description, buttonText, banner, to }) => (
  <Wrapper column banner={banner} pb={[SPACE[2], SPACE[13]]}>
    <Content>
      <StyledLogoContainer>
        <Container>
          <Logo />
        </Container>
      </StyledLogoContainer>
      <StyledIntro>
        <StyledContainer>
          <IntroContent width={[1, 0.55, 0.55]}>
            <Heading heavy as="h1" fontSize={[9]} color={COLOR.textDark}>
              <FormattedMessage id={title} />
            </Heading>
            <Paragraph heavy as="h1" fontSize={[3]} color="white">
              <FormattedMessage id={description} />
            </Paragraph>
            <Button to={to} big>
              <FormattedMessage id={buttonText} />
            </Button>
          </IntroContent>
          <ImageBox width={[0, 0.45, 0.45]} src={heroImg} ml={rem(SPACE[9])} />
        </StyledContainer>
      </StyledIntro>
    </Content>
  </Wrapper>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  banner: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
};

export default Hero;

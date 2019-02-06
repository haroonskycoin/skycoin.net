import React from 'react';
import PropTypes from 'prop-types';
import { rem } from 'polished';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Container from 'components/Container';
import Logo from 'components/Logo';
import Heading from 'components/Heading';
import Button from 'components/Button';
import media from 'utils/media';
import { FONT_FAMILIES, COLOR, FONT_SIZES } from 'config';
import { SPACE } from '../../../../config';


const Wrapper = styled(Flex)`

  position: relative;
  height: 550px;
  align-items:center;
  box-sizing: border-box;
  background: black url(${props => props.banner}) no-repeat right bottom;
  background-size: cover;
  overflow: hidden;

  &:before{
    position: absolute;
    content:" ";
    top:0;
    left:0;
    width:100%;
    height:100%;
    display: block;
    z-index:0;
    background-color: rgba(0,0,0,0.75);
  }
`;

const Intro = styled(Flex)`
  position: relative;
  z-index: 1;
`;

const IntroContent = styled(Box)`
  position: relative;
  z-index: 1;
  display: block;
  
  ${media.sm.css`
    max-width: 29rem;
  `}
`;

const StyledIntro = styled(Intro)`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;

  ${media.md.css`
    width: 800px;
  `}
`;

const StyledLogoContainer = styled.div`
  position: absolute;
  top: 5%;
  width: 100%;
`;


const Paragraph = styled.p`
  font-size: ${rem(FONT_SIZES[4])};
  color: ${COLOR.white};
  font-family: ${FONT_FAMILIES.sans};
  font-weight: 400;
  line-height: 2rem;
  text-transform: none;
`;

const StyledButton = styled(Button)`
  border-radius:5px;
  width:100%;

  ${media.sm.css`
    width:auto;
  `}
`;

const Hero = ({ title, description, banner, buttonText1, to1, buttonText2, to2 }) => (
  <Wrapper column banner={banner}>
    <StyledLogoContainer>
      <Container>
        <Logo white />
      </Container>
    </StyledLogoContainer>
    <StyledIntro align="center">
      <Container>
        <IntroContent>
          <Heading heavy as="h1" fontSize={[9]} color="white">
            <FormattedMessage id={title} />
          </Heading>
          <Paragraph heavy as="h1" fontSize={[3]} color="white">
            <FormattedMessage id={description} />
          </Paragraph>
          <StyledButton big color="#fff" bg={COLOR.base} width={['auto']} mt={5} mr={[0, rem(SPACE[3]), rem(SPACE[3])]} to={to1}>
            <FormattedMessage id={buttonText1} />
          </StyledButton>
          <StyledButton big color="#fff" bg={COLOR.darkGrey} width={['auto']} mt={5} ml={[0, rem(SPACE[3]), rem(SPACE[3])]} to={to2}>
            <FormattedMessage id={buttonText2} />
          </StyledButton>
        </IntroContent>
      </Container>
    </StyledIntro>
  </Wrapper>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText1: PropTypes.string.isRequired,
  to1: PropTypes.string.isRequired,
  buttonText2: PropTypes.string.isRequired,
  to2: PropTypes.string.isRequired,
  banner: PropTypes.element.isRequired,
};

export default Hero;

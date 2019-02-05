import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl, FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { rem } from 'polished';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

import Heading from 'components/Heading';
import Footer from 'components/Footer';
import Button from 'components/Button';

import Hero from './components/Hero';
import features from './features';
import { COLOR, SPACE, FONT_SIZES } from '../../config';

import WatchNow from './components/WatchNow';
import StartNow from './components/StartNow';
import FeatureItem from './components/FeatureItem';

import banner from './images/banner.svg';

const LandingContainer = styled.div`
  background-color: ${COLOR.lightGrey};
`;

const Container = styled(Flex)`
  flex-direction:column;
  align-items:center;
  margin: 0 auto;
  width: 100%;
  max-width: 50rem;
  padding:${rem(SPACE[7])};
  box-sizing: border-box;
`;

const DividerHeading = styled(Heading)`
  line-height:${rem(SPACE[10])};
  text-align:center;
`;

const BottomWrapper = styled(Flex)`
  flex-direction:column;
  align-items:center;
  margin-bottom:${rem(SPACE[9])};
`;

const BottomButtonsWrapper = styled(Flex)`
flex-direction:row;
`;

const BottomHeading = styled(DividerHeading)`
  line-height:${rem(SPACE[9])};  

  b{
    font-weight:normal;
    color:${COLOR.base};
  }
`;

const StyledBottomButton = styled(Button)`
  color:${COLOR.white};
  background-color:${props => (props.bg ? props.bg : COLOR.base)};
  border-radius:5px;
  padding: ${rem(SPACE[4])} ${rem(SPACE[5])};

  &:hover{
    background-color:${props => (props.bg ? props.bg : COLOR.base)};
  }
`;

const CXLanding = ({ intl }) => (
  <LandingContainer>
    <Helmet>
      <title>{intl.formatMessage({ id: 'skywire.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'skywire.description' })}
      />
    </Helmet>
    <Hero
      banner={banner}
      title="landing.cx.hero.title"
      description="landing.cx.hero.heading"
      buttonText1="landing.cx.hero.button1"
      to1=""
      buttonText2="landing.cx.hero.button2"
      to2=""
    />
    <Container>
      <WatchNow />
      <StartNow />
      <DividerHeading as="h2" heavy fontSize={rem(FONT_SIZES[7])}>
        <FormattedMessage id="landing.cx.divider" />
      </DividerHeading>
      { features.map(item =>
        (<FeatureItem
          title={item.title}
          description={item.description}
          image={item.image}
          list={item.list}
          iconWidth={item.width}
          iconHeight={item.height}
        />))}
      <BottomWrapper>
        <BottomHeading heavy textAlign="center" fontSize={rem(FONT_SIZES[7])}>
          <FormattedHTMLMessage id="landing.cx.bottom.text" />
        </BottomHeading>
        <BottomButtonsWrapper>
          <StyledBottomButton href="" mr={rem(SPACE[4])}>
            <FormattedMessage id="landing.cx.bottom.button1" />
          </StyledBottomButton>
          <StyledBottomButton href="" ml={rem(SPACE[4])} bg={COLOR.darkGrey}>
            <FormattedMessage id="landing.cx.bottom.button2" />
          </StyledBottomButton>
        </BottomButtonsWrapper>
      </BottomWrapper>
    </Container>
    <Footer />
  </LandingContainer>
);

CXLanding.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(CXLanding);

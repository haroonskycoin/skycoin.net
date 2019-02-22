import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { rem } from 'polished';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import Footer from 'components/Footer';
import Hero from './components/Hero';
import { COLOR, SPACE, FONT_SIZES } from '../../config';
import features from './features.js'
import FeatureItem from './components/FeatureItem'


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


const SkywalletLanding = ({ intl }) => (
  <LandingContainer>
    <Helmet>
      <title>{intl.formatMessage({ id: 'skywallet.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'skywallet.description' })}
      />
    </Helmet>
    <Hero
      title="landing.skywallet.hero.title"
      description="landing.skywallet.hero.heading"
      buttonText="landing.skywallet.hero.button"
      to="/skywire"
    />
    <Container>
      { features.map(item =>
        (<FeatureItem
          title={item.title}
          description={item.description}
          image={item.image}
        />))}  
    </Container>
    <Footer />
  </LandingContainer>
);

SkywalletLanding.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(SkywalletLanding);

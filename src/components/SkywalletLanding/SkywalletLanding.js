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
import Content from './components/Content'


const LandingContainer = styled.div`
  background-color: ${COLOR.lightGrey};
`;


const SkywalletLanding = ({ intl }) => (
  <LandingContainer>
    <Helmet>
      <title>{intl.formatMessage({ id: 'landing.skywallet.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'landing.skywallet.description' })}
      />
    </Helmet>
    <Hero
      title="landing.skywallet.hero.title"
      description="landing.skywallet.hero.heading"
      buttonText="landing.skywallet.hero.button"
      to="/skywire"
    />
    <Content>
      { features.map(item =>
        (<FeatureItem
          title={item.title}
          description={item.description}
          image={item.image}
          flexDirection={item.flexDirection}
          isIcon={item.icon}
        />))}  
    </Content>
    <Footer />
  </LandingContainer>
);

SkywalletLanding.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(SkywalletLanding);

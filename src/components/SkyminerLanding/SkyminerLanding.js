import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';
import Footer from 'components/Footer';
import Hero from './components/Hero';
import { COLOR } from '../../config';

import Content from './components/Content';
import Forbes from './components/Forbes';
import Hardware from './components/Hardware';
import Operate from './components/Operate';
import OrderNow from './components/OrderNow';
import Support from './components/Support';
import WatchNow from './components/WatchNow';

const LandingContainer = styled.div`
  background-color: ${COLOR.lightGrey};
`;


const SkyminerLanding = ({ intl }) => (
  <LandingContainer>
    <Helmet>
      <title>{intl.formatMessage({ id: 'landing.skyminer.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'landing.skyminer.description' })}
      />
    </Helmet>
    <Hero
      title="landing.skyminer.hero.title"
      description="landing.skyminer.hero.heading"
      buttonText="landing.skyminer.hero.button"
      to=""
      buttonText2="landing.skyminer.hero.button2"
      to2=""
    />
    <Content>
      <Hardware/>
      <Operate/>
      <WatchNow/>
      <Support/>
      <OrderNow/>
      <Forbes/>      
    </Content>
    <Footer />
  </LandingContainer>
);

SkyminerLanding.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(SkyminerLanding);

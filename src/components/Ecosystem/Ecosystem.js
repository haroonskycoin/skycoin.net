import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';

import Header from 'components/Header';
import Footer from 'components/Footer';
import TopBanner from 'components/TopBanner';
import SignUpSection from 'components/SignUpSection';

import EcosystemSection from './components/EcosystemSection';
import About from './components/About';
import Whitepaper from './components/Whitepaper';

import banner from './ecosystem.svg';

const Ecosystem = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'ecosystem.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'ecosystem.description' })}
      />
    </Helmet>

    <Header />
    <TopBanner src={banner} />
    <EcosystemSection />
    <About />
    <Whitepaper />
    <SignUpSection />
    <Footer />
  </div>
);

Ecosystem.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Ecosystem);

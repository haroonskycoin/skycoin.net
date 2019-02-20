import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage, injectIntl } from 'react-intl';

import Footer from 'components/Footer';
import Header from 'components/Header';
import SignUpSection from 'components/SignUpSection';
import TopBanner from 'components/TopBanner';
import Heading from 'components/Heading';
import { SPACE, COLOR } from 'config';
import Container from 'components/Container';
import { rem } from 'polished';
import styled from 'styled-components';
import ExchangesList from './components/ExchangesList';
import exchanges from './data.js';

import bg from './bg.svg';

const StyledContainer = styled(Container)`
  margin-bottom: ${rem(SPACE[9])};
`;

const StyledHeading = styled(Heading)`
 
`;

const Exchanges = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'exchanges.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'exchanges.description' })}
      />
    </Helmet>
    <Header />
    <TopBanner src={bg} />
    <StyledContainer>
      <StyledHeading heavy as="h1" fontSize={[6, 7]} color={COLOR.textDark} mb={2}>
        <FormattedMessage id="exchanges.exchanges" />
      </StyledHeading>
      <ExchangesList exchanges={exchanges} />
    </StyledContainer>
    <SignUpSection />
    <Footer />
  </div>
);

Exchanges.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Exchanges);

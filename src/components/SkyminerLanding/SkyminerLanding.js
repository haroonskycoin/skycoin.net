import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';
import Footer from 'components/Footer';

import { COLOR } from '../../config';



const LandingContainer = styled.div`
  background-color: ${COLOR.lightGrey};
`;


const SkyminerLanding = ({ intl }) => (
  <LandingContainer>
    <Helmet>
      <title>{intl.formatMessage({ id: 'landing.skywallet.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'landing.skywallet.description' })}
      />
    </Helmet>
    <div>skyminer landing</div>
    <Footer />
  </LandingContainer>
);

SkyminerLanding.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(SkyminerLanding);

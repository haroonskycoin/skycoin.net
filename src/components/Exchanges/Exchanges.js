import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';

import Footer from 'components/Footer';


const Exchanges = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'downloads.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'downloads.description' })}
      />
    </Helmet>
    <Footer />
  </div>
);

Exchanges.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Exchanges);

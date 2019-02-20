import React from 'react';
import PropTypes from 'prop-types';
import ExchangeItem from './ExchangeItem';


const ExchangesList = ({ exchanges }) =>
  (<div>
    {exchanges.map((exchange, index) => <ExchangeItem key={index} exchange={exchange} />)}
  </div>);

ExchangesList.propTypes = {
  exchanges: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    exchanges: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      markets: PropTypes.string.isRequired,
    })),
  })).isRequired,
};
export default ExchangesList;

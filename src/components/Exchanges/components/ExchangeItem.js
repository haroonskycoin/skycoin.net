import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Heading from 'components/Heading';
import { COLOR } from 'config';
import ExchangesTable from './ExchangesTable';


const StyledContainer = styled.div`
  &:not(:last-child){
    border-bottom: 1px solid ${COLOR.borderGrey};
  }
`;

const StyledHeading = styled(Heading)`
  text-transform:uppercase
`;

const ExchangeItem = ({ exchange }) =>
  (<StyledContainer>
    <Box width={[1 / 1, 1 / 1, 2 / 3]} my={[5, 7]}>
      <StyledHeading heavy as="h2" fontSize={[2, 3]} color={COLOR.textDark}>
        <FormattedMessage id={exchange.name} />
      </StyledHeading>
    </Box>
    <ExchangesTable list={exchange.exchanges} />
  </StyledContainer>);

ExchangeItem.propTypes = {
  exchange: PropTypes.shape({
    name: PropTypes.string.isRequired,
    exchanges: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      markets: PropTypes.string.isRequired,
    })),
  }).isRequired,
};
export default ExchangeItem;

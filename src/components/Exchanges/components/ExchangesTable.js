import React from 'react';
import PropTypes from 'prop-types';
import { TableWrapper } from 'components/Table';
import { rem } from 'polished';
import { COLORS, COLOR, SPACE, FONT_SIZES } from 'config';
import styled from 'styled-components';
import media from 'utils/media';
import { FormattedMessage } from 'react-intl';


const SM_FONT_SIZE = 11;
const Table = styled.table`
  width: 100%;
  max-width:800px;
  
  td, th {
    padding: ${rem(SPACE[3])} 0;
    font-size:${rem(SM_FONT_SIZE)};

    ${media.sm.css`
      font-size:${rem(FONT_SIZES[2])};
    `}
  }
  
  td {
    padding: ${rem(SPACE[1])} ${rem(SPACE[1])};

    ${media.sm.css`
      padding: ${rem(SPACE[3])} 0;
    `}
  }
  
  
  a {
    color: ${COLORS.base};
    text-decoration: none;
  }
`;


const NameTd = styled.td`
  width:33%;

  ${media.sm.css`
    width:35%;
  `}
`;
const LinkTd = styled.td`
  width:33%;

  ${media.sm.css`
    width:45%;
  `}
`;
const MarketTd = styled.td`
  width:33%;

  ${media.sm.css`
    width:30%;
  `}

`;

const Th = styled.td`
  text-aling:left;
  color: ${COLOR.textGrey};
`;

const Link = styled.a`
  color: ${COLORS.base};
  text-decoration: none;
`;

const ExchangesTable = ({ list }) =>
  (<TableWrapper mb={rem(SPACE[2])}>
    <Table>
      <thead>
        <Th><FormattedMessage id="exchanges.table.headers.name" /></Th>
        <Th><FormattedMessage id="exchanges.table.headers.link" /></Th>
        <Th><FormattedMessage id="exchanges.table.headers.markets" /></Th>
      </thead>
      <tbody>
        {list.map(({ name, link, markets }, i) => (
          <tr key={i}>
            <NameTd>
              <FormattedMessage id={name} />
            </NameTd>
            <LinkTd>
              <Link href={link}>{link}</Link>
            </LinkTd>
            <MarketTd>
              <FormattedMessage id={markets} />
            </MarketTd>
          </tr>
        ))}
      </tbody>
    </Table>
  </TableWrapper>);

ExchangesTable.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    markets: PropTypes.string.isRequired,
  })),
};


ExchangesTable.defaultProps = {
  list: [],
};

export default ExchangesTable;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { FONT_FAMILIES, COLOR, FONT_SIZES } from 'config';
import { Flex } from 'grid-styled';
import { rem } from 'polished';

import Heading from 'components/Heading';

const Paragraph = styled.p`
  font-size: ${rem(FONT_SIZES[4])};
  color: ${COLOR.white};
  font-family: ${FONT_FAMILIES.sans};
  font-weight: 400;
  line-height: 2rem;
  text-transform: none;
  word-wrap:break-word;
`;

const StyledSpan = styled.span`
  color:${COLOR.base}
`;


const CarouselItemContainer = styled(Flex)`
  flex-direction:column;
`;

const CarouselItem = ({ title, content, position, numItems }) =>
  (<CarouselItemContainer>
    <Heading heavy as="h6" color="white" fontSize={[4, 5, 6]}>
      <StyledSpan>{position}/{numItems}.</StyledSpan> <FormattedMessage id={title} />
    </Heading>
    <Paragraph>
      <FormattedMessage id={content} />
    </Paragraph>
  </CarouselItemContainer>);

CarouselItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  numItems: PropTypes.number.isRequired,
};

export default CarouselItem;

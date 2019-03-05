import React from 'react';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import { SPACE, FONT_SIZES, COLOR } from 'config';
import { rem } from 'polished';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import Heading from 'components/Heading';
import media from 'utils/media';
import Button from './Button';

const DividerHeading = styled(Heading)`
  line-height:${rem(SPACE[10])};
  text-align:center;
`;

const BottomWrapper = styled(Flex)`
  flex-direction:column;
  align-items:center;
  margin-bottom:${rem(SPACE[9])};

  .font-blue:{
    color:${COLOR.base};
  }
`;

const BottomHeading = styled(DividerHeading)`
  line-height:${rem(SPACE[7])};
  text-align:center;

  ${media.md.css`
    line-height:${rem(SPACE[10])};
  `}


  b{
    font-weight:normal;
    color:${COLOR.base};
  }
`;

const StyledBottomButton = styled(Button)`
  color:${COLOR.white};
  background-color:${COLOR.base};
  border-radius:5px;
  padding: ${rem(SPACE[4])} ${rem(SPACE[5])};

  &:hover{
    background-color:${COLOR.base};
  }
`;

const OrderNow = () =>
  (<BottomWrapper px={rem(SPACE[3])}>
    <BottomHeading
      as="h2"
      heavy
      fontSize={[rem(FONT_SIZES[6]), rem(FONT_SIZES[7]), rem(FONT_SIZES[7])]}
      width={['70%', '90%', '90%']}
    >
      <FormattedHTMLMessage id="landing.skyminer.orderNow.text" />
    </BottomHeading>
    <StyledBottomButton href="" big>
      <FormattedMessage id="landing.skyminer.orderNow.button" />
    </StyledBottomButton>
  </BottomWrapper>);

export default OrderNow;

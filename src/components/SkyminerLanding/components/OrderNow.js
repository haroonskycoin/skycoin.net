import React from 'react'
import { FormattedHTMLMessage,FormattedMessage } from 'react-intl';
import { SPACE, FONT_SIZES,COLOR } from 'config';
import { rem } from 'polished';
import styled from 'styled-components';
import Button from './Button';
import { Flex } from 'grid-styled';
import Heading from 'components/Heading';

const DividerHeading = styled(Heading)`
  line-height:${rem(SPACE[10])};
  text-align:center;
`;

const BottomWrapper = styled(Flex)`
  flex-direction:column;
  align-items:center;
  margin-bottom:${rem(SPACE[9])};
`;

const BottomHeading = styled(DividerHeading)`
  line-height:${rem(SPACE[9])};  

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

const OrderNow = ()=>
    <BottomWrapper>
        <BottomHeading heavy textAlign="center" fontSize={rem(FONT_SIZES[7])}>
        <FormattedHTMLMessage id="landing.skyminer.orderNow.text" />
        </BottomHeading>
        <StyledBottomButton href="">
        <FormattedMessage id="landing.skyminer.orderNow.button" />
        </StyledBottomButton>
    </BottomWrapper>

export default OrderNow;
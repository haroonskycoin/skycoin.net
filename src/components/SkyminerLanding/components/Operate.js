import React from 'react';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import Heading from 'components/Heading';
import { SPACE, FONT_SIZES, COLOR } from 'config';
import { rem } from 'polished';
import styled from 'styled-components';
import media from 'utils/media';
import { Flex } from 'grid-styled';
import Button from './Button';

const DividerHeading = styled(Heading)`
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

const Wrapper = styled(Flex)`
  flex-direction:column;
  align-items:center;
  margin-bottom:${rem(SPACE[9])};

  .font-blue:{
    color:${COLOR.base};
  }
`;

const StyledButton = styled(Button)`
  //color:${COLOR.white};
  background-color:${COLOR.base};
  border-radius:5px;
  padding: ${rem(SPACE[4])} ${rem(SPACE[5])};

  &:hover{
    background-color:${COLOR.base};
  }
`;

const Operate = () =>
  (
    <Wrapper px={rem(SPACE[3])}>
      <DividerHeading
        as="h2"
        heavy
        fontSize={[rem(FONT_SIZES[6]), rem(FONT_SIZES[7]), rem(FONT_SIZES[7])]}
        width={['70%', '90%', '90%']}
      >
        <FormattedHTMLMessage id="landing.skyminer.operate.text" />
      </DividerHeading>
      <StyledButton href="" big width={300}>
        <FormattedMessage id="landing.skyminer.operate.button" />
      </StyledButton>
    </Wrapper>);

export default Operate;

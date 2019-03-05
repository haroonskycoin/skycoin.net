import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import Heading from 'components/Heading';
import { SPACE, FONT_SIZES, COLOR } from 'config';
import { rem } from 'polished';
import styled from 'styled-components';
import media from 'utils/media';

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

const Operate = () =>
  (<DividerHeading
    as="h2"
    heavy
    fontSize={[rem(FONT_SIZES[6]), rem(FONT_SIZES[7]), rem(FONT_SIZES[7])]}
    width={['70%', '90%', '90%']}
  >
    <FormattedHTMLMessage id="landing.skyminer.operate" />
  </DividerHeading>);

export default Operate;

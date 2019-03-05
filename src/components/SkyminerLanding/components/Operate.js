import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import Heading from 'components/Heading';
import { SPACE, FONT_SIZES, COLOR } from 'config';
import { rem } from 'polished';
import styled from 'styled-components';

const DividerHeading = styled(Heading)`
  line-height:${rem(SPACE[10])};
  text-align:center;

  b{
    font-weight:normal;
    color:${COLOR.base};
  }
`;

const Operate = () =>
  (<DividerHeading as="h2" heavy fontSize={rem(FONT_SIZES[7])} px={rem(SPACE[3])}>
    <FormattedHTMLMessage id="landing.skyminer.operate" />
  </DividerHeading>);

export default Operate;

import { rem } from 'polished';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

import { SPACE } from '../../../config';

const Content = styled(Flex)`
  flex-direction:column;
  align-items:center;
  margin: 0 auto;
  width: 100%;
  max-width: 50rem;
  padding-top:${rem(SPACE[7])};
  padding-bottom:${rem(SPACE[7])};
  box-sizing: border-box;
`;

export default Content;

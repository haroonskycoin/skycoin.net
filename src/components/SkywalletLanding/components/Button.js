import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';
import { COLOR } from 'config';


const StyledButton = styled(Button)`
border-radius:5px;
color:${COLOR.white} !important;
`;

const ComponentButton = ({ children, to }) => (
  <StyledButton big bg={COLOR.base} width={160} mt={5} to={to}>
    {children}
  </StyledButton>
);

export default ComponentButton;

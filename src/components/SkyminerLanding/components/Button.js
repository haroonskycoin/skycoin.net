import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import { COLOR } from 'config';


const StyledButton = styled(Button)`
  border-radius: ${props => props.borderRadius}px !important;
  color:${COLOR.white} !important;
  background-color:${props => props.backgroundColor};

  &:hover{
    background-color:${props => props.backgroundColor};
  }
`;

const ComponentButton = ({ children, to, big, borderRadius, backgroundColor }) => (
  <StyledButton
    big={big}
    bg={COLOR.base}
    width={160}
    mt={5}
    to={to}
    borderRadius={borderRadius}
    backgroundColor={backgroundColor}
  >
    {children}
  </StyledButton>
);

ComponentButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  to: PropTypes.string,
  big: PropTypes.bool,
  borderRadius: PropTypes.number,
  backgroundColor: PropTypes.string,

};

ComponentButton.defaultProps = {
  to: '',
  big: false,
  borderRadius: 5,
  backgroundColor: COLOR.base,
};

export default ComponentButton;

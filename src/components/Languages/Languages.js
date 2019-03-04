import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Languages = styled.div`
  list-style: none;
  margin: 0;
`;

const Language = styled.span`
  &:not(:first-of-type):before {
    content: ' · '
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  line-height:${props => props.lineHeight}px;
`;

StyledLink.propTypes = {
  lineHeight: PropTypes.number,
};

StyledLink.defaultProps = {
  lineHeight: 0,
};

const LanguagesComponent = ({ lineHeight }) => (
  <Languages>
    <Language><StyledLink to="/" lineHeight={lineHeight}>English</StyledLink></Language>
    <Language><StyledLink to="/fr/" lineHeight={lineHeight}>Français</StyledLink></Language>
    <Language><StyledLink to="/zh/" lineHeight={lineHeight}>中文</StyledLink></Language>
    <Language><StyledLink to="/ja/" lineHeight={lineHeight}>日本語</StyledLink></Language>
    <Language><StyledLink to="/ko/" lineHeight={lineHeight}>한국어</StyledLink></Language>
  </Languages>
);

LanguagesComponent.propTypes = {
  lineHeight: PropTypes.number,
};

LanguagesComponent.defaultProps = {
  lineHeight: 0,
};


export default LanguagesComponent;


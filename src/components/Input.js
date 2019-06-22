import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Caption from './Caption';

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  padding: 0 10px;
  margin: 6px 0 24px 0;
  border: none;
  box-shadow: ${props =>
    props.error
      ? props.theme.shadows.inputError
      : props.theme.shadows.inputDefault
  };
  appearance: none;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 20px;
  color: ${props => props.theme.colors.primary};
  text-align: right;

  &:focus {
    outline: none;
  }

  &:placeholder {
    color: ${props => props.theme.colors.secondary};
  }
`;

const ErrorMessage = styled(Caption)`
  color: ${props => props.theme.colors.alert};
  margin: 0 0 8px 0;
  text-align: center;
`;

const Input = props => (
  <>
    <StyledInput {...props} />
    {props.error && <ErrorMessage>{props.error}</ErrorMessage>}
  </>
);

Input.propTypes = {
  error: PropTypes.string
};

Input.defaultProps = {
  error: ''
};

export default Input;

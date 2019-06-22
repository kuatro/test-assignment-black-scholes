import React from 'react';
import styled from '@emotion/styled';

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  padding: 0 10px;
  margin: 6px 0 24px 0;
  border: none;
  box-shadow: ${props => props.theme.shadows.inputDefault};
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

const Input = ({ onChange, ...props }) => (
  <StyledInput {...props} onChange={e => onChange(e)} />
);

export default Input;

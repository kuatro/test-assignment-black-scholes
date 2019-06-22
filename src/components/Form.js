import React from 'react';
import styled from '@emotion/styled';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Form = props => (
  <StyledForm {...props} />
)

export default Form;

import styled from '@emotion/styled';

const Button = styled.button`
  height: 60px;
  width: 240px;
  align-self: center;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.colors.important};
  border-radius: 60px;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 24px;
  color: ${props => props.theme.colors.important};
  cursor: pointer;

  &:disabled {
    border-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondary};
    cursor: not-allowed;
  }
`;

export default Button;

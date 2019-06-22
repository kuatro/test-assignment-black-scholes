import styled from '@emotion/styled';

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export default AppWrapper;

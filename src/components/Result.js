import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import copy from 'copy-to-clipboard';
import Caption from './Caption';

const ResultWrapper = styled.tr`
  height: 60px;

  &:nth-of-type(even) {
    background-color: ${props => props.theme.colors.lightGray};
  }
`;

const DigitalCaption = styled(Caption.withComponent('button'))`
  border: none;
  background: none;
  text-align: right;
  cursor: pointer;
`;

const Result = ({ name, call, put }) => (
  <ResultWrapper>
    <td>
      <Caption size='l'>{name}</Caption>
    </td>
    <td>
      <DigitalCaption size='l' onClick={() => copy(call)}>{call}</DigitalCaption>
    </td>
    <td>
      <DigitalCaption size='l' onClick={() => copy(put)}>{put}</DigitalCaption>
    </td>
  </ResultWrapper>
);

Result.propTypes = {
  name: PropTypes.string.isRequired,
  call: PropTypes.number,
  put: PropTypes.number.isRequired
};

Result.defaultProps = {
  call: null
};

export default Result;

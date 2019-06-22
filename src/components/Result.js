import React from 'react';
import PropTypes from 'prop-types';
import Caption from './Caption';

const Result = ({ name, call, put }) => (
  <tr>
    <td>
      <Caption size='l'>{name}</Caption>
    </td>
    <td>
      <Caption size='l'>{call}</Caption>
    </td>
    <td>
      <Caption size='l'>{put}</Caption>
    </td>
  </tr>
);

Result.propTypes = {
  name: PropTypes.string.isRequired,
  call: PropTypes.number.isRequired,
  put: PropTypes.number.isRequired
};

export default Result;

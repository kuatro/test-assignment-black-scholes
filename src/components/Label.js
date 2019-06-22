import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Caption from './Caption';

const Label = styled(Caption.withComponent('label'))`
  color: ${props => props.theme.colors.secondary};
  margin: 0 0 0 10px;
`;

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired
};

export default Label;

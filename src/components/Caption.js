import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const fontSize = size => {
  switch (size) {
    case 'l':
      return '24px';
    case 'm':
      return '18px';
    case 's':
      return '16px';
    default:
      return '16px';
  }
};

const Caption = styled.p`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => fontSize(props.size)};
  color: ${props => props.theme.colors.primary};
  margin: ${props => props.as === 'h2' ? '20px 10px' : '0'};
`;

Caption.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l']),
  as: PropTypes.oneOf(['p', 'h2'])
};

Caption.defaultProps = {
  size: 's',
  as: 'p'
};

export default Caption;

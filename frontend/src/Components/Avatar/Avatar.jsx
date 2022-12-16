import styled from 'styled-components';
import PropTypes from 'prop-types';

const Img = styled.img.attrs((props) => ({
  src: props.user.profilePicture,
  referrer: 'no-referrer',
}))`
  background: url('${(props) => props.user.profilePicture}');
  background-position: center;
  height: ${(props) => (props.small ? '30px' : '40px')};
  width: ${(props) => (props.small ? '30px' : '40px')};
  border-radius: ${({ square }) => (square ? '5px' : '50%')};
  background-size: cover;
  align-self: flex-start;
`;

const Avatar = ({ user, small, square }) => (
  <Img user={user} small={small} square={square} />
);

Avatar.propTypes = {
  user: PropTypes.object.isRequired,
  small: PropTypes.bool,
  square: PropTypes.bool,
};

Avatar.defaultProps = {
  small: false,
  square: false,
};

export default Avatar;

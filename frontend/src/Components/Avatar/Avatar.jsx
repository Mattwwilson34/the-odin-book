import styled from 'styled-components';
import PropTypes from 'prop-types';

const Img = styled.img.attrs((props) => ({
  src: props.user.profilePicture,
}))`
  background: url('${(props) => props.user.profilePicture}');
  background-position: center;
  height: ${(props) => (props.small ? '30px' : '40px')};
  width: ${(props) => (props.small ? '30px' : '40px')};
  border-radius: 50%;
  background-size: cover;
  align-self: flex-start;
`;

const Avatar = ({ user, small }) => <Img user={user} small={small} />;

Avatar.propTypes = {
  user: PropTypes.object.isRequired,
  small: PropTypes.bool,
};

Avatar.defaultProps = {
  small: false,
};

export default Avatar;

import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
  background: url('${(props) => props.user.profilePicture}');
  background-position: center;
  height: ${(props) => (props.small ? '30px' : '40px')};
  width: ${(props) => (props.small ? '30px' : '40px')};
  border-radius: 50%;
  background-size: cover;
`;

const Avatar = ({ user }) => <Div user={user} />;

Avatar.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Avatar;

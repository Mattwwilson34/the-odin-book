import PropTypes from 'prop-types';
import Timeline from '../../../timeline';
import ContentContainer from '../../../../components/StyledComponents/ContentContainer';
import ProfileContainer from '../StyledComponents/ProfileContainer';
import Intro from '../Intro';
import Photos from '../Photos';
import Friends from '../Friends';

const Profile = ({ user }) => (
  <ContentContainer border background='#eff2f5' width='80%' margin='auto'>
    <ProfileContainer maxWidth='450px'>
      <Intro />
      <Photos />
      <Friends />
    </ProfileContainer>
    <ProfileContainer>
      <Timeline user={user.data} />
    </ProfileContainer>
  </ContentContainer>
);

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Profile;

import PropTypes from 'prop-types';
import IntroContainer from '../StyledComponents/IntroContainer';
import IntroButton from '../StyledComponents/IntroButton';

const Intro = ({ admin, profile }) =>
  admin ? (
    <IntroContainer>
      <h2>Intro</h2>
      <IntroButton>Add bio</IntroButton>
      <IntroButton>Edit details</IntroButton>
      <IntroButton>Add hobbies</IntroButton>
    </IntroContainer>
  ) : (
    <IntroContainer>
      <h2>Intro</h2>
      <p>{profile.bio}</p>
      <p>{profile.jobTitle}</p>
      <p>{`${profile.city}, ${profile.state}`}</p>
    </IntroContainer>
  );

Intro.propTypes = {
  admin: PropTypes.bool,
  profile: PropTypes.object.isRequired,
};

Intro.defaultProps = {
  admin: false,
};

export default Intro;

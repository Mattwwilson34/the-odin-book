import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PhotoContainer from '../StyledComponents/PhotoContainer';
import Image from '../StyledComponents/Image';

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  font-size: 1.5rem;
  font-family: 'klavika-medium';

  & > a {
    font-size: 1.25rem;
  }

  & > div {
    display: block;
    width: 100%;
  }
`;

const Photos = ({ profile }) => {
  const { userPhotos } = profile;
  const reducedPhotos = userPhotos.slice(0, 9);

  return (
    <PhotoContainer>
      <Header>
        Photos
        <Link to='/'>See all photos</Link>
      </Header>
      {reducedPhotos.map((photo) => (
        <Image src={photo.photoURL} key={photo.photoID} />
      ))}
    </PhotoContainer>
  );
};
Photos.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default Photos;

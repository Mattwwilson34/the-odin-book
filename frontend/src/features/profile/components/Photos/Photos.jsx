import PhotoContainer from '../StyledComponents/PhotoContainer';
import Image from '../StyledComponents/Image';
import seedImage from '../../assets/images/seedImage.jpg';

const Photos = () => (
  <PhotoContainer>
    <Image src={seedImage} />
    <Image src={seedImage} />
    <Image src={seedImage} />
    <Image src={seedImage} />
    <Image src={seedImage} />
    <Image src={seedImage} />
    <Image src={seedImage} />
    <Image src={seedImage} />
    <Image src={seedImage} />
  </PhotoContainer>
);

export default Photos;

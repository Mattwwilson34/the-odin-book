/* eslint-disable no-unused-vars */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContentContainer from '../../../../components/StyledComponents/ContentContainer';

const Card = styled(ContentContainer)`
  border: 1px dashed red;
  padding: 0;
  align-items: flex-start;
  gap: 10px;
  flex: 0 1 200px;
`;

const Div = styled.div`
  background-image: url(${({ src }) => src});
  background-size: cover;
  width: 100%;
  height: 150px;
  border: 1px dashed red;
`;

const FriendCard = ({ src, user }) => (
  <Card>
    <Div src={src} />
    <h2>{`${user.firstName} ${user.lastName}`}</h2>
  </Card>
);

FriendCard.propTypes = {
  src: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};
export default FriendCard;

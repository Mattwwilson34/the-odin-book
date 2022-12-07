import styled from 'styled-components';
import PropTypes from 'prop-types';

import usePostData from '../../../posts/hooks/usePostData';

import Status from '../../../status/components/Status';
import Posts from '../../../posts/components/Posts';

const TimelineContainer = styled.div`
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Timeline = ({ user }) => {
  const { isLoading, data, isError, error } = usePostData();

  if (isLoading) {
    return <TimelineContainer>Loading...</TimelineContainer>;
  }

  if (isError) return <h2>{error.message}</h2>;

  return (
    <TimelineContainer>
      <Status user={user} />
      <Posts postData={data.data} user={user} />
    </TimelineContainer>
  );
};

Timeline.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Timeline;

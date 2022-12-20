import { useQuery } from '@tanstack/react-query';
import getProfileData from '../api/getProfileData';

const useProfileData = (userID) =>
  useQuery({
    queryKey: ['profile', userID],
    queryFn: () => getProfileData(userID),
  });

export default useProfileData;

import { useQuery } from '@tanstack/react-query';
import getActiveUser from '../utils/getActiveUser';

const useUserData = () =>
  useQuery(['activeUser'], getActiveUser, {
    retry: false,
  });

export default useUserData;

import { useQuery } from '@tanstack/react-query';
import getUser from '../utils/getUser';

const useUserData = () =>
  useQuery(['user'], getUser, {
    retry: false,
  });

export default useUserData;

import { useQuery } from '@tanstack/react-query';
import getFriends from '../api/getFriends';

const useFriendsData = (userID) =>
  useQuery(['friends'], () => getFriends(userID));

export default useFriendsData;

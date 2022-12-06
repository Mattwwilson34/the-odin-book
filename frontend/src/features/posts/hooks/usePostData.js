import { useQuery } from '@tanstack/react-query';
import getPosts from '../api/getPosts';

const usePostData = () => useQuery(['posts'], getPosts);

export default usePostData;

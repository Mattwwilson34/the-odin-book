import { useQuery } from '@tanstack/react-query';
import getPosts from '../api/getPosts';

const onSuccess = () => console.log('Successfuylly fetched posts');
const onError = () => console.log('Failed to fetch posts');

const usePostData = () =>
  useQuery(['posts'], getPosts, {
    onSuccess,
    onError,
  });

export default usePostData;

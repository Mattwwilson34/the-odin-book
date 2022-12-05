/* eslint-disable arrow-body-style */
import { useMutation, useQueryClient } from '@tanstack/react-query';

import addPost from '../api/addPost';

const useAddPostData = () => {
  const queryClient = useQueryClient();
  return useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });
};

export default useAddPostData;

/* eslint-disable arrow-body-style */
import { useMutation, useQueryClient } from '@tanstack/react-query';

import addCommentData from '../api/addCommentData';

const useAddCommentData = () => {
  const queryClient = useQueryClient();
  return useMutation(addCommentData, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });
};

export default useAddCommentData;

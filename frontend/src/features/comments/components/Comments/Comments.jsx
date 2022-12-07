import Comment from '../Comment';

const Comments = ({ commentData }) =>
  commentData.map((comment) => (
    <Comment commentData={comment} key={comment.postCommentID} />
  ));

export default Comments;

import Post from '../Post';

const Posts = ({ postData, user }) =>
  postData.map((post) => (
    <Post postData={post} key={post.postID} user={user} />
  ));

export default Posts;

import {
  useGetPostByIdQuery,
  useGetPostsQuery,
} from "../redux/features/api/baseApi";
import PostInput from "./PostInput";

const Posts = () => {
  const { data: posts, isLoading } = useGetPostsQuery();
  const { data: postById } = useGetPostByIdQuery(1); //query return a object

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="p-3">
      <PostInput />
      <h2>All Posts Here</h2>
      {posts.map((post, idx) => (
        <div key={idx}>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;

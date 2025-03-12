import {
  useGetPostByIdQuery,
  useGetPostsQuery,
} from "../redux/features/api/baseApi";

const Posts = () => {
  const { data: posts, isLoading } = useGetPostsQuery();
  const { data: postById } = useGetPostByIdQuery(1);
  console.log(postById);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <h2>All Posts Here</h2>
      {posts.map((post, idx) => (
        <div key={idx}>{post.title}</div>
      ))}
    </div>
  );
};

export default Posts;

import { useForm } from "react-hook-form";
import { useSetPostMutation } from "../redux/features/api/baseApi";

const PostInput = () => {
  //redux mutation return 2 value in array [setter function, return object]
  const [setPost, { data: PostData }] = useSetPostMutation();
  console.log(PostData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (post) => {
    setPost({ userId: "200", title: "This is a Title", body: post.post });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* include validation with required or other standard HTML validation rules */}
        <input className="w-1/2" {...register("post", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <button
          className="border px-3 py-2 text-white bg-slate-400 rounded"
          type="submit"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default PostInput;

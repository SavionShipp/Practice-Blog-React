import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";

export function PostPage() {
  var posts = [
    {
      id: 1,
      title: "___",
      body: "___",
      image: "___",
    },
    {
      id: 2,
      title: "___",
      body: "___",
      image: "___",
    },
    {
      id: 3,
      title: "___",
      body: "___",
      image: "___",
    },
  ];

  return (
    <>
      <PostNew />
      <PostIndex myname={name} posts={posts} />
    </>
  );
}

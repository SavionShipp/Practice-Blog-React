import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";
import axios from "axios"
import{ useState, useEffect } from 'react';
import { Modal } from "./Modal";
export function PostPage() {
  const [posts, setPosts] = useState([]);

  const getPostData = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data)
    })
  }

    useEffect(getPostData, [])

  return (
    <>
      <PostNew />
      <PostIndex myname={name} posts={posts} />
      <Modal />
      {/* <button onClick={getPostData}>Press for data</button> */}
    </>
  );
}

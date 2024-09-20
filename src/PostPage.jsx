import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";
import axios from "axios"
import{ useState, useEffect } from 'react';
import { Modal } from "./Modal";
export function PostPage() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false)
  const [currentPost, setCurrentPost] = useState({})

  const handleShow = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post)
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  const getPostData = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data)
    })
  }

    useEffect(getPostData, [])

  return (
    <>
    <button onClick={handleShow}>Show Modal</button>
      <PostNew />
      <PostIndex posts={posts} onShow={handleShow}/>
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <div>
        <h2>Title: {currentPost.title}</h2>
        <p>Body: {currentPost.body}</p>
        <p>Image:<img src= {currentPost.image}/></p>
        </div>
      </Modal>
    </>
  );
}

// myname={name}
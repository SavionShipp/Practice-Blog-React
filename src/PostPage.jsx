import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";
import axios from "axios"
import{ useState, useEffect } from 'react';
import { Modal } from "./Modal";
export function PostPage() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setPostsShowVisible] = useState([]);


  const getPostData = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data)
    })
  };

  const handleCreate = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then(response => {
      console.log(response.data)
      setPosts([...posts, response.data])
    })
  }

  // const handleShow = () => {
  //   setPostsShowVisible(true)
  // };

  const handleClose = () => {
    setPostsShowVisible(false)
  };

    useEffect(getPostData, [])

  return (
    <>
      <PostNew onCreate={handleCreate}/>
      <PostIndex posts={posts}/> 
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <p>test</p>
      </Modal>
    </>
  );
}

// myname={name}
{/* <PostShow post={currentPost} /> */}
{/* <Modal show={isPostsShowVisible} onClose={handleClose}>
      </Modal> */}
      // onShow={handleShow}
// const [isPostsShowVisible, setIsPostsShowVisible] = useState(false)
  // const [currentPost, setCurrentPost] = useState({})

  // const handleShow = (post) => {
  //   setIsPostsShowVisible(true);
  //   setCurrentPost(post)
  // };

  // const handleClose = () => {
  //   setIsPostsShowVisible(false);
  // };
  // import { Modal } from "./Modal";
// import { PostShow } from "./PostShow";

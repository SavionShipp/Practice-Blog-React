export function PostIndex(props) {
  console.log(props);
  return (

    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map(post => (
        <div key={post.id} className="posts">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <img src={post.image} alt="" />
        </div>
      ))}

      <h2>Savion owns this blog</h2>
      <p>this is all a body paragraph section</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRyPsC-WOTRffoXvCe-VYnG_97c8b7qavsTA&s" alt="random picture"></img>

      <h2>This is my last post</h2>
      <p>This is where the paragraph will go for all the information</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSezeZV4X0U6iMxfjDDDZfd6kGr_r91-kGseQ&s" alt="random image"></img>

    </div>
  );
}

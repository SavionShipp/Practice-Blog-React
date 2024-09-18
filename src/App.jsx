
import './App.css'
function Header() {
  return (
  <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
  </header>
      )
}

function PostNew() {
  return (
    <div id="posts-new">
        <form>
        <h1>New post</h1>

        <label>Post Title:</label>
        <input type="text" id="title" name="title" required></input>

        <label>Post Body:</label>
        <input type="body" id="body" name="body" rows="10" required>
      
        </input>
        <label>Post Image:</label>
        <input type="file" id="image" name="image" accept="image/*" required></input>
        </form>
      </div>
  )
}

function PostIndex () {
return (

  <div id="posts-index">

  <h1>All posts</h1>
  <h2>Savion owns this blog</h2>
  <p>this is all a body paragraph section</p>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRyPsC-WOTRffoXvCe-VYnG_97c8b7qavsTA&s" alt="random picture"></img>

  <h2>This is my last post</h2>
  <p>This is where the paragraph will go for all the information</p>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSezeZV4X0U6iMxfjDDDZfd6kGr_r91-kGseQ&s" alt="random image"></img>

</div>
)
}

function Footer () {
  return (
    <footer>
        <p>Copyright 2024</p>
      </footer>
  )
}

function PostPage() {
  return (
    <>
    <PostNew />
    <PostIndex />
    </>
  )
}
function All() {
  return (
    <>
    <Header />
      <PostPage />
      <Footer />
    </>
  )
}
function App() {
  return (
    <div>
      <All />
    </div>
  );
}

export default App;
// import axios from "axios"
export function PostNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreate(params)
      event.target.reset()
  }
  
  return (
    <div id="posts-new">
      <form onSubmit={handleSubmit}>
        <h1>New post</h1>
      <div>
        title:<input name="title" type= "text"></input>
      </div>
      <div>
        body:<input name="body" type= "text"></input>
      </div>
      <div>
        image url:<input name="image" type= "text"></input>
      </div>
      <div>
        <button type="submit">Create</button>
      </div>
      </form>
    </div>
  );
}

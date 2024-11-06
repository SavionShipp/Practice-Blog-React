export function PostShow(props) {
  return (
    <div>
    <h2>Title: {props.currentPost.title}</h2>
    <p>Body: {props.currentPost.body}</p>
    <p>Image:<img src= {props.currentPost.image}/></p>
    </div>
  );
}
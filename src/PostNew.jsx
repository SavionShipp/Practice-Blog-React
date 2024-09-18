export function PostNew() {
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
  );
}

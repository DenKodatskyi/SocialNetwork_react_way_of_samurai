import React from "react";
import st/* st - style */ from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {

  let postsElements = props.posts.map((p/* p - postsEl */) => <Post message={p.message} id={p.id} likes={p.likes} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={st.myPosts_block}>
      <h3>My posts</h3>

      <div>
        <div>
          <textarea ref={newPostElement} placeholder="Your post..." onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div> 

      <div className={st.posts}>
        {postsElements}
      </div>


    </div>
  )
}


export default MyPosts;






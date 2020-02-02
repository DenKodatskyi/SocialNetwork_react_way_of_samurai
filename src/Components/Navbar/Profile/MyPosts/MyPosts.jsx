import React from "react";
import st/* st - style */ from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
import AddNewPostFormRedux from "./Post/AddNewPostForm";

const MyPosts = (props) => {

  let postsElements = props.posts.map((p/* p - postsEl */) => <Post message={p.message} id={p.id} likes={p.likes} />);

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={st.myPosts_block}>
      <h3>My posts</h3>

      <AddNewPostFormRedux onSubmit={onAddPost} />

      <div className={st.posts}>
        {postsElements}
      </div>


    </div>
  )
}


export default MyPosts;






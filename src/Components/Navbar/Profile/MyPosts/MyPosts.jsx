import React from "react";
import st/* st - style */ from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {

  let posts = [
    { id: 0, message: "Hi, how are you?", likes: 15 },
    { id: 1, message: "It`s my first post", likes: 8 },
    { id: 2, message: "It`s test", likes: 1 }
  ]

  let postsElements = posts.map((p/* p - postsEl */) => <Post message={p.message} id={p.id} likes={p.likes} />);

  return (
    <div className={st.myPosts_block}>
      <h3>My posts</h3>

      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div> 

      <div className={st.posts}>
        {postsElements}
      </div>


    </div>
  )
}


export default MyPosts;






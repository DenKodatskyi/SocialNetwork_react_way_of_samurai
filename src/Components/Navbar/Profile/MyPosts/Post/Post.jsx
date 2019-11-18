import React from "react";
import st/* st - style */ from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={st.item}>
      <img className={st.item_img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdB7kAnk19CTv5hV3VAnyzVlgsbCquhaRlxoNqD0OmK0Y4N4sv&s" />
      {props.message}
      <div>
        <span>{props.likes}</span>
      </div>
    </div>

  )
}


export default Post;






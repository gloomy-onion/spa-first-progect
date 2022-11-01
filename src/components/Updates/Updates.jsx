import React from "react";
import Post from "./Post/Post";
import styles from "./Updates.module.css";
import cn from "classnames";

const Updates = (props) => {
  const { newPostText, postsData } = props;
  const newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={cn(styles.posts)}>
      <h3>Our Thoughts and Updates</h3>
      <textarea
        ref={newPostElement}
        value={newPostText}
        onChange={onPostChange}
      />
      <button onClick={onAddPost}>Post</button>
      <button>Remove</button>
      <div className={styles.posts}>
        {postsData.map((data) => {
          return (
            <Post
              message={data.message}
              id={data.id}
              likesCount={data.likesCount}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Updates;

import React from 'react';

const PostItem = (props) => {
    const deletePostBtn = () => {
      const id = props.post.id
      props.deletePost(id)
    }

    return(
        <div className="course-plate">
          <h2>{props.post.id}. {props.post.title}</h2>
          <p>{props.post.body}</p>
          <button className="delete-btn" onClick={deletePostBtn}>Delete</button>
        </div>
    );
}

export default PostItem;
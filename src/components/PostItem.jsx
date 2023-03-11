import React from 'react';

const PostItem = (props) => {
    
    return(
        <div className="course-plate">
          <h2>{props.post.id}. {props.post.title}</h2>
          <p>{props.post.body}</p>
          <button className="order-btn">Order</button>
        </div>
    );
}

export default PostItem;
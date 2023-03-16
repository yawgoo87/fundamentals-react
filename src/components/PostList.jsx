import React from "react";
import PostItem from "./PostItem";

const PostList = (props) => {

    if (!props.posts){
        return(
            <div className="empty"><p>There is no post yet.<br/>Try to create one in form above👆</p></div>
        )
    }

    return(
        <div>
            <h1 style={{textAlign: 'center'}}>{props.title}</h1>
            <div className="plate-collection">
                {
                    props.posts.map(post => 
                        <PostItem post={post} deletePost={props.deletePost} key={post.id}/>
                    ) 
                }
            </div> 
        </div>
    );
}

export default PostList;
import React from "react";
import PostItem from "./PostItem";

const PostList = (props) => {

    return(
        <div>
            <h1 style={{textAlign: 'center'}}>{props.title}</h1>
            <div className="plate-collection">
                {
                    props.posts.map(post => 
                        <PostItem post={post} key={post.id}/>
                    ) 
                }
                
            </div> 
        </div>

        

    );
}

export default PostList;
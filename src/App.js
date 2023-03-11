import React, { useState } from "react";
import './App.css';
import Tags from "./components/UI/Tags/Tags";
import Counter from './components/Counter';
import Input from './components/Input';
import ClassCounter from './components/ClassCounter';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import Form from "./components/Form";

function App() {

  const [posts, setPosts] = useState([
    // {id: 1, body: "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.", title: "JavaScript"},
    // {id: 2, body: "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language, and to support and facilitate", title: "Python"},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      {/* Part I */}
      <Counter/>
      <Tags tags={["#useState", "#functional_component"]}/>
      <hr/>

      {/* Part II */}
      <Input/>
      <Tags tags={["#two-way_binding"]}/>
      <hr/>

      {/* Part III */}
      <Form create={createPost} post_id={posts.length+1}/>
      {
        posts.length == 0
          ? <div className="empty"><p>There is no post yet.<br/>Try to create one in form above👆</p></div>
          : <PostList posts={posts} title={'Posts'}/>
      }
      <Tags tags={["#ui_components", "#communication_between_components", "#conditional_rendering", "#work_with_lists"]}/>
      <hr/>

    </div>
  );
}

export default App;

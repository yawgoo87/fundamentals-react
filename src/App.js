import React, { useState } from "react";
import './App.css';
import Tags from "./components/UI/Tags/Tags";
import Counter from './components/Counter';
import Input from './components/Input';
// import ClassCounter from './components/ClassCounter';
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import Form from "./components/Form";
import DropDownList from "./components/UI/DropDownList/DropDownList";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, body: "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.", title: "JavaScript"},
    {id: 2, body: "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language, and to support and facilitate.", title: "Python"},
    {id: 3, body: "is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup.", title: "C++"},
    {id: 4, body: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.", title: "Java"},
    {id: 5, body: "Kotlin is a cross-platform, statically typed, general-purpose high-level programming language with type inference.", title: "Kotlin"},
    {id: 6, body: "PHP is a general-purpose scripting language geared toward web development.[8] It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995.", title: "PHP"},
  ]);
  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (_id) => {
    setPosts(posts.filter(post => post.id !== _id))
  }

  // sort - sort method from drop-down list
  const sortPost = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
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
      <DropDownList
        value={selectedSort}
        onChange={sortPost}
        defaultValue={"Sort by"}
        options={[
          {value: 'title', name: 'By header'},
          {value: 'body', name: 'By description'}
        ]}
      />
      {
        posts.length === 0
          ? <div className="empty"><p>There is no post yet.<br/>Try to create one in form above👆</p></div>
          : <PostList posts={posts} deletePost={deletePost} title={'Posts'}/>
      }
      <Tags tags={["#ui_components", "#communication_between_components", "#conditional_rendering", "#work_with_lists"]}/>
      <hr/>

      <hr/>
    </div>
  );
}

export default App;

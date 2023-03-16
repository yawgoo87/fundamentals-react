import React, { useMemo, useState } from "react";
import './App.css';
import Tags from "./components/UI/Tags/Tags";
import Counter from './components/Counter';
import Input from './components/Input';
// import ClassCounter from './components/ClassCounter';
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import Form from "./components/Form";
// import DropDownList from "./components/UI/DropDownList/DropDownList";
// import Search from "./components/Search";
import PostFilter from "./components/PostFilter";
import ModalWindow from "./components/UI/ModalWindow/ModalWindow";
import Button from "./components/UI/Button/Button";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, body: "F JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.", title: "JavaScript"},
    {id: 2, body: "E The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language, and to support and facilitate.", title: "Python"},
    {id: 3, body: "D is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup.", title: "C++"},
    {id: 4, body: "C Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.", title: "Java"},
    {id: 5, body: "B Kotlin is a cross-platform, statically typed, general-purpose high-level programming language with type inference.", title: "Kotlin"},
    {id: 6, body: "A PHP is a general-purpose scripting language geared toward web development.[8] It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995.", title: "PHP"},
  ]);

  const [filter, setFilter] = useState({sort: '', search: ''})
  const [modalVisible, setModalVisible] = useState(false)

  const sortedPosts = useMemo(() => {
    console.log("getSortedPosts()")
    if (filter.sort){
      return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts]);

  const searchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.body.toLowerCase().includes(filter.search.toLowerCase()));
  },[filter.search, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModalVisible(false);
  }

  const deletePost = (_id) => {
    setPosts(posts.filter(post => post.id !== _id))
  }

  return (
    <div className="App">

      <ModalWindow visible={modalVisible} setVisible={setModalVisible}>
        <Form create={createPost} post_id={posts.length+1}/>
      </ModalWindow>

      {/* Part I */}
      <Counter/>
      <Tags tags={["#useState", "#functional_component"]}/>
      <hr/>

      {/* Part II */}
      <Input/>
      <Tags tags={["#two-way_binding"]}/>
      <hr/>

      {/* Part III */}
      
      <Button onClick={() => setModalVisible(true)}>
        Create post
      </Button>

      <PostFilter
        filter = {filter}
        setFilter = {setFilter}
      />

      <PostList posts={searchedPosts} deletePost={deletePost} title={'Posts'}/>
      
      <Tags tags={["#ui_components", "#communication_between_components", "#conditional_rendering", "#work_with_lists", "sorting", "useMemo"]}/>
      <hr/>

      <hr/>
    </div>
  );
}

export default App;

import React, { useRef, useState } from "react"
import '../Form.css';
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button"

const Form = ({create, post_id}) => {

    const [post, setPost] = useState({title:'', body:''})
    // const inputBody = useRef(); // Сoстояние неуправляемого компонента

    const addPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: post_id
        }
        create(newPost)
        setPost({title: '', body: ''})
        //console.log(inputBody.current.value)
    }

    return(
        <div class="form">
            <div className="description"><p>Post creating form. Put name and description of the post and press Enter👉</p></div>
            <form>
                {/* Управляемый компонент */}
                <Input 
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})} 
                    type="text" 
                    placeholder="Post name"
                />

                <Input 
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})} 
                    type="text" 
                    placeholder="Post name"
                />

                {/* Неуправляемый компонент */}
                {/* <Input 
                    ref={inputBody}
                    type="text" 
                    placeholder="Text"
                /> */}
                
                <Button onClick={addPost}>Enter</Button>
            </form>
        </div>
    )
}

export default Form;
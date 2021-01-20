import React from 'react'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'


const API = "http://localhost:3001/posts"
const Join = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({
    id: '',
    name: '',
    group: '',
    desc: '',
    img: '',
    link: ''
  })
  useEffect(() => {
    axios.get(API).then((response) => setPosts(response.data));
  }, []);

  const changeHandler = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    })
  }
  const addPostHandler = (e) => {
    e.preventDefault();
    axios.post(API, post).then(() => {
      return axios.get(API)
    }).then((response) => setPosts(response.data))

  }


  return (
    <div>
      <form onSubmit={addPostHandler}>
        <input type="text" name="id" placeholder="id" onChange={changeHandler} />
        <input type="text" name="name" placeholder="name" onChange={changeHandler} />
        <input type="text" name="group" placeholder="group" onChange={changeHandler} />
        <input type="text" name="desc" placeholder="description" onChange={changeHandler} />
        <input type="text" name="img" placeholder="image" onChange={changeHandler} />
        <input type="text" name="link" placeholder="link" onChange={changeHandler} />
        <Button variant="success" type="submit">Post</Button>{' '}
      </form>
    </div>
  )
}

export default Join

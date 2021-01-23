import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Dummy from "./dummy";

const API = "http://localhost:3001/posts";
const Join = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({
    id: "",
    name: "",
    group: "",
    desc: "",
    img: "",
    link: "",
  });

  const [message, setMessage] = useState("");
  useEffect(() => {
    axios.get(API).then((response) => setPosts(response.data));
  }, []);

  const changeHandler = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };
  const addPostHandler = (e) => {
    e.preventDefault();
    axios.post(API, post).then(
      alert(`Your Information with ID 
    ${post.id}has been successfully added`)
    );
  };

  return (
    <div>
      <div className="joinheading">
        <h3>HBC StudentInfo card Sample</h3>
      </div>
      <Card style={{ width: "18rem", margin: " 2rem auto" }}>
        <Card.Img
          variant="top"
          src="https://source.unsplash.com/400x300/?user"
        />
        <Card.Body>
          <Card.Title>Your Card</Card.Title>
          <Card.Text>
            Do you want to create your cool HBC <em>studentInfo</em> card like
            this? Create your Student infocard listing by clicking on the Join
            us Button.
          </Card.Text>
          <Button variant="primary">Get to Know More</Button>
        </Card.Body>
      </Card>

      <Form.Group style={{ margin: "4rem 3rem" }}>
        <Form.Row>
          <Form.Label column="lg" lg={2}>
            ID
          </Form.Label>
          <Col xs="auto">
            <Form.Control
              name="id"
              type="text"
              placeholder="Insert ID"
              onChange={changeHandler}
            />
          </Col>
        </Form.Row>
        <br />
        <Form.Row>
          <Form.Label column="lg" lg={2}>
            Full Name
          </Form.Label>
          <Col xs="auto">
            <Form.Control
              name="name"
              type="text"
              placeholder="Insert firstname lastname"
              onChange={changeHandler}
            />
          </Col>
        </Form.Row>
        <br />
        <Form.Row>
          <Form.Label column="lg" lg={2}>
            Group
          </Form.Label>
          <Col xs="auto">
            <Form.Control
              name="group"
              type="text"
              placeholder="Insert Group Name "
              onChange={changeHandler}
            />
          </Col>
        </Form.Row>
        <br />
        <Form.Row>
          <Form.Label column="lg" lg={2}>
            Description
          </Form.Label>
          <Col xs="auto">
            <Form.Control
              name="desc"
              type="text"
              placeholder="Write about yourself"
              onChange={changeHandler}
            />
          </Col>
        </Form.Row>
        <br />
        <Form.Row>
          <Form.Label column="lg" lg={2}>
            Image
          </Form.Label>
          <Col xs="auto">
            <Form.Control
              name="img"
              type="text"
              placeholder="Insert image link"
              onChange={changeHandler}
            />
          </Col>
        </Form.Row>
        <br />
        <Form.Row>
          <Form.Label column="lg" lg={2}>
            Link
          </Form.Label>
          <Col xs="auto">
            <Form.Control
              name="link"
              type="text"
              placeholder="Insert Profile Link"
              onChange={changeHandler}
            />
          </Col>
        </Form.Row>
        <br />
        <Button variant="success" type="submit" onClick={addPostHandler}>
          {" "}
          Join Us
        </Button>
      </Form.Group>
    </div>
  );
};

export default Join;

import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import SingleUser from "./singleuser";

const List = () => {
  const [result, setResult] = useState([]);
  const [hide, setHide] = useState(true);
  const [showme, setShowme] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((resp) => {
      setResult(resp.data);
    });
  }, []);

  const SearchHandler = () => {
    axios
      .get(`http://localhost:3001/posts/${searchTerm}`)
      .then((response) => setResult(response.data))
      .then(setHide(false))
      .then(setShowme(true));
    console.log("Successful load");
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      {showme && (
        <SingleUser
          name={result.name}
          group={result.group}
          desc={result.desc}
          image={result.img}
          link={result.link}
        />
      )}
      <div>
        <input
          type="number"
          name="userid"
          value={searchTerm}
          onChange={handleChange}
          style={{
            padding: "1rem",
            margin: " 2rem auto",
            borderRadius: "5px",
            fontSize: "1rem",
            textAlign: "center",
            display: "flex",
          }}
          placeholder="Search By UserID"
          required
        ></input>
        <Button variant="success" size="lg" block onClick={SearchHandler}>
          Find
        </Button>
      </div>
      <div className="cards-list">
        {hide &&
          result.map((item) => (
            <div className="listCards" key={item.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.group}</Card.Text>
                  <Card.Text>{item.desc}</Card.Text>
                  <Card.Text>{item.link}</Card.Text>
                  <Button variant="primary">Get to Know More</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
    </>
  );
};

export default List;

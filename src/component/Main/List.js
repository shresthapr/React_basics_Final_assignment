import React, { Component } from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const List = () => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/posts').then((resp) => { setResult(resp.data) });
  }, []);


  return (
    <div>
      {result.map((item) => (
        <div className="listCards" key={item.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.group}
              </Card.Text>
              <Card.Text>
                {item.desc}
              </Card.Text>
              <Button variant="primary">Get to Know More</Button>
            </Card.Body>
          </Card>
        </div>
      ))}

    </div>
  )

}

export default List

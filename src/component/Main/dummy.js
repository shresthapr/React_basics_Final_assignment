import React from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Dummy = (props) => {
  return (
    <div>
      <Card style={{ width: '18rem', margin: ' 2rem auto' }}>
        <Card.Img variant="top" src="https://source.unsplash.com/400x300/?user" />
        <Card.Body>
          <Card.Title>Your Card</Card.Title>
          <Card.Text>
            Do you want to create your cool HBC <em>studentInfo</em> card like this?
             Create your Student infocard listing by clicking on the Join us Button.
      </Card.Text>
          <Button variant="primary" onClick={props.click}>Join Us</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Dummy


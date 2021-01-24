import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const SingleUser = ({ image, name, group, desc, link }) => {
  return (
    <>
      <Card style={{ width: "18rem", margin: "0 auto" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{group}</Card.Text>
          <Card.Text>{desc}</Card.Text>
          <Card.Text>{link}</Card.Text>
          <Button variant="primary">Get to Know More</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleUser;

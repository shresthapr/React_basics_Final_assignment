import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Alertlabel({ display }) {
  return (
    <>
      <Alert variant="warning">
        <Alert.Heading>Covid-19 Alert!!!!</Alert.Heading>
        <p onClick={display}>
          Maintain safe social distancing. Maintain good hand hygiene. Reach our
          Helpline +358 111222333
        </p>
        <Button onClick={display}>Hide Alert</Button>
      </Alert>
    </>
  );
}

export default Alertlabel;

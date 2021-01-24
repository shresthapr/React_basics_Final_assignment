import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

export default class Navigator extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/hbc-college">
            Helsinki Business College
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/lists">Students List</Nav.Link>
            <Nav.Link href="/joinus">Join Us</Nav.Link>
            <Nav.Link href="/leave">Leave Team</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Find</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

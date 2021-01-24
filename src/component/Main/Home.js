import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

const API = "http://localhost:3001/posts";
class Home extends Component {
  state = {
    studentdata: [],

    isLoading: false,
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get(API, { params: { _limit: 4 } }).then((res) =>
      this.setState({
        studentdata: res.data,
        isLoading: false,
      })
    );
  }
  render() {
    if (this.state.isLoading) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }
    return (
      <div>
        {/* {this.state.studentdata.map((item) =>
          <Carousel key={item.id}>
            <Carousel.Item>
              <h1>See this> </h1>
              <img
                className="d-block w-100"
                src={item.img}
                alt={item.alt}
              />
              <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        )
        } */}

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/600x900/?hills"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First student card</h3>
              <p>Student's Info with description.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/600x900/?mountains"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/1600x900/?oasis"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/1600x900/?ocean"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Fourth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Home;

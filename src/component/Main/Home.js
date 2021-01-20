import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

const API = "http://localhost:3001/posts'"
class Home extends Component {
  state = {
    studentInfo: [],
    name: '',
    image: '',
    description: '',
    alt: '',
    isLoading: false
  }
  componentDidMounf() {
    this.setState({ isLoading: true });
    axios.get(API, {
      params: { _limit: 10, },
    }).then((res) => this.setState({
      studentInfo: res.data,
      name: res.name,
      img: res.img,
      desc: res.desc,
      alt: res.group,
      isLoading: false
    }))
    console.log(this.state.studentInfo)
  }
  render() {
    if (this.state.isLoading) {
      return <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    }
    return (
      <div>
        {this.state.studentInfo.map((item) => (
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={item.image}
                alt={item.alt}
              />
              <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        ))}

        {/* <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/1600x900/?hills"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
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
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
      </div>
    );
  }
}

export default Home;
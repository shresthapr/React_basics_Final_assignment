
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'


const API = "http://localhost:3001/posts";
const Leave = () => {
  const [posts, setPosts] = useState([]);
  const [key, setKey] = useState([]);

  useEffect(() => {
    axios.get(API).then((response) => setPosts(response.data))
  }, []);

  const searchHandler = (e) => {
    console.log(e)
    setKey({
      [e.target.name]: e.target.value,
    });
    console.log(setKey)
  }
  return (
    <>
      <h1>Remove Item by clicking on remove </h1>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text onChange={searchHandler}>First name</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl />
      </InputGroup>
      <Button variant="primary" size="lg" block>
        Remove
  </Button>
    </>
  )
}
// export class Leave extends Component {

//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

export default Leave;




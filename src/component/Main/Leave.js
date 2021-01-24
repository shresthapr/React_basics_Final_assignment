import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Test from "./test";

const API = "http://localhost:3001/posts";
const Leave = () => {
  const [posts, setPosts] = useState({
    id: "",
    name: "",
    group: "",
    desc: "",
    img: "",
    link: "",
  });
  const [key, setKey] = useState(0);

  useEffect(() => {
    axios.get(API).then((response) => setPosts(response.data));
  }, []);

  const searchHandler = (e) => {
    setKey({
      [e.target.name]: e.target.value,
    });
  };

  const removeHandler = (id) => {
    console.log(id);
    const myIndex = posts.findIndex((item) => {
      return item.id === id;
    });
    const oldArray = [...posts];
    oldArray.splice(myIndex, 1);
    setPosts({ posts: oldArray });
    alert(`Your HBC StudentCardInfo ${id} has been deleted`);
  };

  return (
    <>
      {key.userid}
      <InputGroup className="mb-3">
        <input
          type="number"
          name="userid"
          onChnage={searchHandler}
          style={{
            padding: "1rem",
            margin: " 2rem auto",
            borderRadius: "5px",
            fontSize: "1rem",
          }}
          placeholder="Insert userID"
          required
        ></input>
      </InputGroup>
      <Button variant="primary" size="lg" block onClick={searchHandler}>
        Remove
      </Button>
    </>
  );
};
// export class Leave extends Component {

//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

export default Leave;

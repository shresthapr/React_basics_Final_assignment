import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

const API = "http://localhost:3001/posts";
const Leave = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [person, setPerson] = useState([]);

  useEffect(() => {
    axios.get(API).then((response) => setPerson(response.data));
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const removeHandler = (e) => {
    e.preventDefault();
    const results = person.findIndex((item) => item.id === searchTerm);
    alert(`Your HBC StudentCardInfo ${searchTerm} has been deleted`);
    const oldArray = [...person];
    oldArray.splice(results, 1);
    setPerson(oldArray);
  };

  return (
    <>
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
        placeholder="Insert userID"
        required
      ></input>

      <Button variant="primary" size="lg" block onClick={removeHandler}>
        Remove
      </Button>
    </>
  );
};

export default Leave;

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function Inputapp() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [person, setPerson] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((resp) => {
      setPerson(resp.data);
    });
  }, []);

  const searchHandler = () => {
    const results = person.findIndex((item) => item.id == searchTerm);
    console.log(results);
    alert(`Your HBC StudentCardInfo ${searchTerm} has been deleted`);
    setSearchResults(results);
    const oldArray = [...person];
    oldArray.splice(results, 1);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit" onClick={searchHandler}>
        Click{" "}
      </button>
      {/* <ul>
        {searchResults.map((item) => (
          <li>{item}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default Inputapp;

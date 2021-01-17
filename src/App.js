
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Navigator from './component/Header/Navigator';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (

    <>
      <Router>
        <Header />


      </Router>
    </>

  );
}


export default App;

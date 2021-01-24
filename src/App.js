import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./component/Main/Main";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </>
  );
}

export default App;

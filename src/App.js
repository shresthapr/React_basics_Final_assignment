
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Navigator from './component/Header/Navigator';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Tapp from './Test'
import Main from './component/Main/Main';
import Footer from './component/Footer/Footer'

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

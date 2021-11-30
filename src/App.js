import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Projects from "./Pages/Home/Projects/Projects";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          {/* <Route path='/about'>
            <Home></Home>
          </Route>
          <Route path='/projects'>
            <Projects></Projects>
          </Route> */}
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

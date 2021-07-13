import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Calculator from "./components/Calculator.jsx"
import Home from "./components/Home.jsx"
import { Button, Typography, Box } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path='/my-app/' component={Home} />
      <Route exact path='/my-app/calculator' component={Calculator} />
    </Router>

  );
}

export default App;

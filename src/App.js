import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Navigation from './pages/SharedComponents/Navigation/Navigation';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>

        <Switch>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="*">
            <HomePage></HomePage>
          </Route>
        </Switch>
      </Router>      
    </div>
  );
}

export default App;

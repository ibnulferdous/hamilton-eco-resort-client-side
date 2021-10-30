import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Navigation from './pages/SharedComponents/Navigation/Navigation';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import LoginPage from './pages/LoginPage/LoginPage';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/LoginPage/PrivateRoute/PrivateRoute';
import ManageBookingsPage from './pages/ManageBookingsPage/ManageBookingsPage';
import MyBookingsPage from './pages/MyBookingsPage/MyBookingsPage';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>

          <Switch>
            <Route path="/home">
              <HomePage></HomePage>
            </Route>
            <PrivateRoute path="/manage-my-bookings">
              <MyBookingsPage></MyBookingsPage>
            </PrivateRoute>
            <PrivateRoute path="/manage-all-bookings">
              <ManageBookingsPage></ManageBookingsPage>
            </PrivateRoute>
            <Route path="/log-in">
              <LoginPage></LoginPage>
            </Route>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider> 
    </div>
  );
}

export default App;

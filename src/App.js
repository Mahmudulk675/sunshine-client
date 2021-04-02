
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import CheckOut from './Components/CheckOut/CheckOut';
import Admin from './Components/Admin/Admin';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Orders from './Components/Orders/Orders';
import { Nav, Navbar } from 'react-bootstrap';

 export const CustomerContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  
  return (
    // <div className="App">
      <CustomerContext.Provider value={[loggedInUser,setLoggedInUser]}>
          <Router>
      <div>
       <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">SunShine</Navbar.Brand>
    <Nav className="mr-auto navbar">

      <span className="navLink"><Link to="/">Home</Link></span>
      <span className="navLink"><Link to="/orders">Orders</Link></span>
      <span className="navLink"> <Link to="/admin">Admin</Link></span>
      <span className="navLink"><Link to="/login">Login</Link></span>

    </Nav>
  </Navbar>
</>


        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/checkOut/:id">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </div>
    </Router>
    </CustomerContext.Provider>
    // {/* </div> */}
  );
}

export default App;

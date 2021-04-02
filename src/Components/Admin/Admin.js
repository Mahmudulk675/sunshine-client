import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import AddItem from './AddItem/AddItem';
import Manage from './Manage/Manage';



const Admin = () => {
  return (

    <div>

      <Router>
        <div className="container">

          <Navbar bg="light" variant="light" className="mt-5">
            <Nav className="mr-auto">
              <span className="navLink"><Link to="/admin/manage">Manage Item</Link></span>
              <span className="navLink"><Link to="/admin/addItems">Add Item</Link></span>
            </Nav>
          </Navbar>

          <Switch>
            <Route exact path="/admin/addItems">
              <AddItem></AddItem>
            </Route>
            <Route path="/admin/manage">
              <Manage></Manage>
            </Route>
          </Switch>
        </div>
      </Router>


    </div>

  );
};

export default Admin;
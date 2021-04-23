import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Dashboard } from "./pages/Dashboard";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

export default function App() {
  let history = useHistory();
  const [user, setUser] = useState();

  const logout = () =>{
    setUser(null)
    console.log(history)
  }
  return (
    <Router>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/products">
            <Nav.Link>Products</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        {!user ? (
          <>
            <Nav.Item>
              <LinkContainer to="/register">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </>
        ) : (
          <>
            <Nav.Item>
              <LinkContainer to="/dashboard">
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={()=>logout()}>Logout</Nav.Link>
            </Nav.Item>
          </>
        )}
      </Nav>

      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} user={user} />}
        />
        <Route
          path="/products"
          render={(props) => <Products {...props} user={user} />}
        />
        <Route
          path="/dashboard"
          render={(props) => <Dashboard {...props} user={user} setUser={setUser}/>}
        />
        <Route
          path="/register"
          render={(props) => (
            <Register {...props} user={user} setUser={setUser} />
          )}
        />
        <Route
          path="/login"
          render={(props) => <Login {...props} user={user} setUser={setUser} />}
        />
      </Switch>
    </Router>
  );
}

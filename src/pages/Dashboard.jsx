import React, { useState, useEffect } from "react";
import {
  Container,
  Jumbotron,
  Nav,
  Button,
  CardColumns,
} from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";
import { UpdateUser } from "./UpdateUser";
import { CreateProduct } from "./CreateProduct";
import { MyProducts } from "./MyProducts";

export const Dashboard = (props, { match }) => {
  let user = props.user
  let updateUser = props.updateUser

  let { path, url } = useRouteMatch();
  //   useEffect(() => {
  //     let endpoint = "http://localhost:8080/products";
  //     axios.get(endpoint).then((res) => {
  //       setProducts(res.data);
  //     });
  //   }, []);

  return (
    <React.Fragment>
      {!props.user ? (
        <h1>Vous devez être connecté</h1>
      ) : (
        <React.Fragment>
          <Jumbotron
            fluid
            style={{
              height: "350px",
              backgroundImage: "url(img/home.jpg)",
              backgroungSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              color: "white",
              textAlign: "center",
            }}
          >
            <Container>
              <h1 className="mt-2 display-3 font-weight-bold">Dashboard</h1>
            </Container>
          </Jumbotron>
          <Container>
            <Nav className="">
              <Nav.Item>
                <LinkContainer to={`${url}/editUser`}>
                  <Nav.Link>Modifier infos</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to={`${url}/createProduct`}>
                  <Nav.Link>Créer un produit</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to={`${url}/products`}>
                  <Nav.Link>Mes Produits</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
            <Switch>
            <Route exact path={`${path}`}>
                <h1>tets</h1>
            </Route>
              <Route
                path={`${path}/editUser`}
                render={(props) => (
                  <UpdateUser {...props} user={user} setUser={updateUser} />
                )}
              />
              <Route
                path={`${path}/createProduct`}
                render={(props) => (
                  <CreateProduct {...props} user={user} />
                )}
              />
              <Route
                path={`${path}/products`}
                render={(props) => (
                  <MyProducts {...props} user={user} />
                )}
              />
            </Switch>
          </Container>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

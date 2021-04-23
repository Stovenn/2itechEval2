import React, { useState, useEffect } from "react";
import {
  Container,
  Jumbotron,
  Card,
  Button,
  CardColumns,
} from "react-bootstrap";
import axios from "axios";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let endpoint = "http://localhost:8080/products";
    axios.get(endpoint).then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
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
          <h1 className="mt-2 display-3 font-weight-bold">
            Jouets
          </h1>
        </Container>
      </Jumbotron>
      <Container>
        <CardColumns>
          {products.map((p) => (
            <Card key={p._id} style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>{p.price}$</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </Container>
    </React.Fragment>
  );
};

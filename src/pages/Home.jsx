import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";

export const Home = () => {
  return (
    <Jumbotron
      fluid
      style={{
        height: "550px",
        backgroundImage: "url(img/home.jpg)",
        backgroungSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center center',
        color: "white",
        textAlign: "center",
      }}
    >
      <Container>
        <h1 className="display-3 font-weight-bold">Bienvenue sur jouets pour tous</h1>
        <h3 className="mt-5">
            Commencez sans plus tarder à donner une seconde vie à vos anciens jouets.
        </h3>
        <Button className="mt-5">C'est par ici</Button>
      </Container>
    </Jumbotron>
  );
};

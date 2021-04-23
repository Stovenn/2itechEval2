import React from "react";
import { Formik } from "formik";
import { Container, Button, Form } from "react-bootstrap";
import axios from 'axios';
import { useHistory } from "react-router-dom";

export const Register = (props) => {
    let history = useHistory();
  return (
    <Container className="mt-5">
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        onSubmit={(values, {setSubmitting, resetForm}) =>{
            const endpoint = 'http://localhost:8080/users'
            setSubmitting(true);
            
            setTimeout(() => {
            axios.post(endpoint, values).then((res)=>{
              if(res.status === 201){
                resetForm();
                setSubmitting(false);
                history.push('/products')
              } else {
              }
                
            })

            
          }, 500);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div>
            <h1 className="text-center mb-5">Créer un nouveau compte</h1>
            <Form className="mx-auto" onSubmit={handleSubmit}>
              <Form.Group controlId="formFirstname">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  type="text"
                  name="firstName"
                  placeholder="Jean"
                />
              </Form.Group>
              <Form.Group controlId="formLastname">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  type="text"
                  name="lastName"
                  placeholder="Castex"
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type="email"
                  name="email"
                  placeholder="jeancastex@example.com"
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  type="password"
                  name="password"
                  placeholder="minimum 8 caractères"
                />
              </Form.Group>
              <Button type="submit" disabled={isSubmitting}>S'inscrire</Button>
            </Form>
          </div>
        )}
      </Formik>
    </Container>
  );
};

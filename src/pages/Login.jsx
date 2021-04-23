import React from "react";
import { Formik } from "formik";
import { Container, Button, Form } from "react-bootstrap";
import axios from 'axios';
import { useHistory } from "react-router-dom";

export const Login = (props) => {
    let history = useHistory();
    return (
        <Container className="mt-5">
          <Formik
            initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
            onSubmit={(values, {setSubmitting, resetForm}) =>{
                const endpoint = 'http://localhost:8080/users/login'
                setSubmitting(true);
                
                setTimeout(() => {
                axios.post(endpoint, values).then(res => {
                    props.setUser(res.data)
                })
                resetForm();

                setSubmitting(false);
                history.push('/products')
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

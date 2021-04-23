import React from "react";
import { Formik } from "formik";
import { Container, Button, Form } from "react-bootstrap";
import axios from 'axios';
import { useHistory } from "react-router-dom";

export const CreateProduct = (props) => {
    let history = useHistory();
  return (
    <Container className="mt-5">
      <Formik
        initialValues={{ title: "", price: ""}}
        onSubmit={(values, {setSubmitting, resetForm}) =>{
            const endpoint = 'http://localhost:8080/products'
            setSubmitting(true);
            setTimeout(() => {
            axios.post(endpoint, {...values, user: props.user}).then(()=>{
                resetForm();
                setSubmitting(false);

                history.goBack()
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
            <h1 className="text-center mb-5">Rajouter une annonce</h1>
            <Form className="mx-auto" onSubmit={handleSubmit}>
              <Form.Group controlId="formFirstname">
                <Form.Label>Titre</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  type="text"
                  name="title"
                  placeholder=""
                />
              </Form.Group>
              <Form.Group controlId="formLastname">
                <Form.Label>Prix</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.price}
                  type="number"
                  name="price"
                  placeholder=""
                />
              </Form.Group>
              <Button type="submit" disabled={isSubmitting}>Créer annonce</Button>
            </Form>
          </div>
        )}
      </Formik>
    </Container>
  );
};

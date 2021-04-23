import React, {useState, useEffect} from "react";
import { Jumbotron, Container, Button , Form} from "react-bootstrap";
import { Formik } from "formik";
import axios from 'axios';
import { useHistory } from "react-router-dom";

export const UpdateUser = (props) => {

    const [userdata, setUserdata] = useState(props.user)
    let history = useHistory()
    

    useEffect(() => {
        console.log(userdata)
    }, [])

  return (
      <Container>
        <Formik
            initialValues={{ firstName: userdata.firstName, lastName: userdata.lastName, email: userdata.email }}
            onSubmit={(values, {setSubmitting, resetForm}) =>{
                const endpoint = 'http://localhost:8080/users/update'
                setSubmitting(true);
                
                setTimeout(() => {
                axios.put(endpoint, values).then(res => {
                    //props.setUser(res.data)
                    console.log(res)
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
              <h1 className="text-center mt-5">Modification du profil</h1>
                <Form className="mx-auto" onSubmit={handleSubmit}>
                <Form.Group controlId="formFirstname">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      type="text"
                      name="firstName"
                      placeholder="Prénom"
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
                      placeholder="Nom"
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
                      placeholder="Email"
                      readOnly
                    />
                  </Form.Group>
                  
                  <Button type="submit" disabled={isSubmitting}>Mettre a jour</Button>
                </Form>
              </div>
            )}
          </Formik>

        
      </Container>
  );
};
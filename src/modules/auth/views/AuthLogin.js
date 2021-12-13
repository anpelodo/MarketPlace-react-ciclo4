import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormGroup, Button, Form, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';

export default function AuthLogin() {
  const auth = useAuth();
  let [badAuth, setBadAuth] = useState(false);
  const baseURL = 'http://localhost:3002/api/users/login';
  let history = useHistory();
  let state = history.location.state;
  console.log(state);

  const onSubmitForm = (values, { setSubmitting, resetForm }) => {
    setSubmitting(false);

    axios
      .post(baseURL, { ...values })
      .then((resp) => {
        const data = resp.data;
        auth.putAuthData(data);
        console.log(data);

        setBadAuth(false);
        resetForm();

        if (!state) {
          history.push('/');
        } else {
          history.push(state);
        }
      })
      .catch((error) => {
        const data = error.response.data;
        const status = error.response.status;

        if (status === 401 || status === 404) {
          setBadAuth(true);
        }

        if (status >= 500) {
          console.error('Error on AuthLogin:', error.response);
          alert(data.msg, 'error:', data.error);
        }
      });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('*Debe ser una dirección de correo válido')
      .max(100, '*No debe tener más de 100 caracteres')
      .required('*Este campo es obligatorio'),

    password: Yup.string()
      .min(8, '*Debe tener al menos 8 caracteres')
      .max(50, '*No debe tener más de 50 caracteres')
      .required('*Este campo es obligatorio'),
  });
  return (
    <div className="d-flex w-100 justify-content-center py-3">
      <div className="mw-25">
        <div className="d-flex w-100 justify-content-center">
          <h2 className="pb-4">Bienvenido de nuevo.</h2>
        </div>

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={onSubmitForm}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <Form onSubmit={handleSubmit}>
              <div className="text-primary fs-5 fw-bold" hidden={!badAuth}>
                * Correo y/o contraseña incorrectas
              </div>
              <FormGroup className="row gap-3 pt-3">
                <InputGroup hasValidation className="p-0">
                  <Form.Control
                    name="email"
                    type="text"
                    placeholder="Correo-e"
                    size="lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    isInvalid={touched.email && errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>

                <InputGroup hasValidation className="p-0">
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                    size="lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    isInvalid={touched.password && errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </InputGroup>

                <Button
                  type="submit"
                  className="text-white fw-bolder"
                  disabled={isSubmitting}
                >
                  Iniciar sesión
                </Button>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

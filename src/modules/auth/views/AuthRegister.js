import React from 'react';
import { FormGroup, Button, Form } from 'react-bootstrap';

import { Formik } from 'formik';
import * as Yup from 'yup';

export default function AuthRegister() {
  const onSubmitForm = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const validationSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(2, '*Debe tener al menos 2 caracteres')
      .max(50, '*No debe tener más de 50 caracteres')
      .required('*Este campo es obligatorio'),

    apellido: Yup.string()
      .min(2, '*Debe tener al menos 2 caracteres')
      .max(50, '*No debe tener más de 50 caracteres')
      .required('*Este campo es obligatorio'),

    usuario: Yup.string()
      .min(2, '*Debe tener al menos 2 caracteres')
      .max(50, '*No debe tener más de 50 caracteres')
      .required('*Este campo es obligatorio'),

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
    <div className="d-flex w-100 justify-content-center">
      <div className="mw-25">
        <h3 className="pb-4">Crear una cuenta es gratis.</h3>
        <Formik
          initialValues={{
            nombre: '',
            apellido: '',
            usuario: '',
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
              {console.log(values)}
              <FormGroup className="row gap-3">
                <Form.Control
                  name="nombre"
                  type="text"
                  placeholder="Nombre"
                  size="lg"
                  className="col-6 col-md"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nombre}
                  isInvalid={touched.nombre && errors.nombre}
                />
                <Form.Control
                  name="apellido"
                  type="text"
                  placeholder="Apellido"
                  size="lg"
                  className="col-6 col-md"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.apellido}
                  isInvalid={touched.apellido && errors.apellido}
                />
              </FormGroup>
              <FormGroup className="row gap-3 pt-3">
                <Form.Control
                  name="usuario"
                  type="text"
                  placeholder="Nombre de usuario"
                  size="lg"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.usuario}
                  isInvalid={touched.usuario && errors.usuario}
                />

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

                <Button type="submit" className="text-white fw-bolder">
                  Continuar
                </Button>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

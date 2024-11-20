import { ErrorMessage, Field, Formik } from "formik";
import { Component } from "react";
import { Button, Form } from "react-bootstrap";
import * as Yup from 'yup';

class RegistrationForm extends Component {
  // Initial form values
  initialValues = {
    name: '',
    email: ''
  };

  // Validation schema using Yup
  validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(4, 'Name must be at least 4 characters long'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required')
  });

  // Form submission handler
  handleSubmit = (values, actions) => {
    console.log('Form submitted:', values);
    actions.setSubmitting(false);
    // Additional form submission logic (like API calls) goes here
  };

  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        validationSchema={this.validationSchema}
        onSubmit={this.handleSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="mt-4">
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Field
                type="text"
                name="name"
                as={Form.Control}
                placeholder="Enter your name"
              />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </Form.Group>

            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Field
                type="email"
                name="email"
                as={Form.Control}
                placeholder="Enter email"
              />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </Form.Group>

            <Button type="submit" variant="primary" className="mt-3" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default RegistrationForm;

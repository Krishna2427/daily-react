import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Container } from 'react-bootstrap';

const SignUpForm = () => {
    const [userData, setUserData] = useState(null);

    // Define validation schema
    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Name is required')
            .min(2, 'Name must be at least 2 characters'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
    });

    // Initial form values
    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    // Form submission handler
    const onSubmit = (values,{resetForm}) => {
        setUserData(values);  // Store data in state (simulating database storage)
        alert('User registered successfully!');
        resetForm(); // Reset form after submission
    };

    return (
        <Container>
            <h2>Sign Up Form</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ values, isValid }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <Field
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter your name"
                            />
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="text-danger"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter your email"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter your password"
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="text-danger"
                            />
                        </div>
                        <Button
                            type="submit"
                            variant="primary"
                            disabled={!isValid || !values.name || !values.email || !values.password}
                        >
                            Sign Up
                        </Button>
                    </Form>
                )}
            </Formik>

            {userData && (
                <div className="mt-4">
                    <h3>Stored User Data:</h3>
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Password:</strong> {userData.password}</p>
                </div>
            )}
        </Container>
    );
};

export default SignUpForm;

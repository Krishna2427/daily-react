
import { ErrorMessage, Field, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

import { Container, Form, Button } from 'react-bootstrap'

const LoginForm = () => {

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('User Name'),
        password: Yup.string().required('Password is required')
            .min(6, 'Password must be at least 6 charecters')
    })
const initialValues = {
    username: '',
    password: ''
}

const onSubmit = (values, { resetForm }) => {
    alert(`Username: ${values.username}\nPassword:${values.password}`);
    resetForm('');
}
return (
    <Container>
        <h2>Login Form</h2>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmiting }) => (
                <Form>
                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <Field
                            type='text'
                            name='username'
                            className='form-control'
                            placeholder='Enter username'
                        />
                        <ErrorMessage
                            name='username'
                            component='div'
                            className='text-danger'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <Field
                            type='password'
                            name='password'
                            className='form-control'
                            placeholder='Enter password'
                        />
                        <ErrorMessage
                            name='password'
                            component='div'
                            className='text-danger'
                        />
                    </div>
                    <Button
                        type='submit'
                        variant='primary'
                        disabled={isSubmiting}
                    >Login</Button>
                </Form>
            )}
        </Formik>
    </Container>
)
}

export default LoginForm
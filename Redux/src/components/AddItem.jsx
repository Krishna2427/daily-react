import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/itemsSlice';
import * as Yup from 'yup';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { Button, Col, Container, Row, Form as BootstrapForm } from 'react-bootstrap'


const AddItem = () => {

    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is Required'),
        description: Yup.string().required('Description is Required')
    })

    const initialValues = {
        title: '',
        description: '',
    }

    const handleSubmit = (values, { resetForm }) => {
        dispatch(addItem(values));
        console.log(addItem);
        resetForm();
    };
    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col md={6}>
                    <h2 className='mb-4'>Add new Item</h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmiting }) => (
                            <Form>
                                <BootstrapForm.Group controlId="formTitle" className="mb-3">
                                    <BootstrapForm.Label>Title</BootstrapForm.Label>
                                    <Field
                                        name="title"
                                        type="text"
                                        placeholder="Enter title"
                                        className="form-control"
                                    />
                                    <ErrorMessage name='title'
                                        component="div"
                                        className='text-danger'
                                    />
                                </BootstrapForm.Group>
                                <BootstrapForm.Group controlId="formDescription" className="mb-3">
                                    <BootstrapForm.Label>Description</BootstrapForm.Label>
                                    <Field
                                        as="textarea"
                                        name="description"
                                        placeholder="Enter description"
                                        className="form-control"
                                        rows={3}
                                    />
                                    <ErrorMessage
                                        name='description'
                                        component="div"
                                        className='text-danger'
                                    />
                                    <Button
                                        variant='primary'
                                        type='submit'
                                        disabled={isSubmiting}
                                        className='mt-1 rounded-3'
                                    >
                                        {isSubmiting ? "Submitting..." : "Add Item"}
                                    </Button>
                                </BootstrapForm.Group>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>

    );
};
export default AddItem;

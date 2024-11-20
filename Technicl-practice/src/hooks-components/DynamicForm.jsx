import React, { useState } from 'react';
import { Button, Col, Container, Form, InputGroup } from 'react-bootstrap';

const DynamicForm = () => {
    const [field, setField] = useState([{ value: '' }]);
    const [errors, setErrors] = useState({});

    const handleAddField = () => {
        setField([...field, { value: '' }]);
    };

    const handleChange = (index, event) => {
        const newField = field.map((f, i) => (i === index ? { value: event.target.value } : f));
        setField(newField);

        // Simple Validations
        const newErrors = { ...errors };
        newErrors[index] = event.target.value ? '' : 'Field is required';
        setErrors(newErrors);
    };

    const handleDeleteField = (index) => {
        const newField = field.filter((_, i) => i !== index); // Remove the field at the specified index
        setField(newField);

        // Adjust errors after deleting
        const newErrors = { ...errors };
        delete newErrors[index];
        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = field.every((f) => f.value);
        if (isValid) {
            alert('Form is Submitted');
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                {field.map((field, index) => (
                    <Form.Group key={index} controlId={`formField${index}`} className="mb-3">
                        <Form.Label>Field {index + 1}</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                value={field.value}
                                onChange={(e) => handleChange(index, e)}
                                isInvalid={!!errors[index]}
                            />
                            <Button
                                variant="warning"
                                onClick={() => alert('Editing Field')} // Placeholder for edit logic
                            >
                                Edit
                            </Button>
                            <Button
                                variant="danger"
                                onClick={() => handleDeleteField(index)}
                            >
                                Delete
                            </Button>
                            <Form.Control.Feedback type="invalid">
                                {errors[index]}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                ))}
                <Button variant="secondary" onClick={handleAddField}>Add Field</Button>
                <Button type="submit" className="ms-2">Submit</Button>
            </Form>
        </Container>
    );
};

export default DynamicForm;

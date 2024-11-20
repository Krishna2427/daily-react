import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import UserService from '../../services/userServices';
import { useEffect, useState } from 'react';

const UserForm = () => {
    const { userId } = useParams();
    const isEdit = !!userId;
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({ name: "", email: "" });
    const [message, setMessage] = useState("");

    // Yup validation schema
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, "Name is too short!")
            .required("Name is required"),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
    });

    // Fetch user details if editing
    useEffect(() => {
        if (isEdit) {
            UserService.getUser(userId)
                .then((response) => {
                    const user = response.data;
                    setInitialValues({ name: user.name, email: user.email });
                    console.log("Fetched user data:", user); // Debugging line
                })
                .catch((error) => console.log("Error fetching user data:", error));
        }
    }, [userId, isEdit]);

    // Debugging initialValues load
    // useEffect(() => {
    //     console.log("Initial Values after fetch:", initialValues);
    // }, [initialValues]);

    // Form submission handler
    
    const handleSubmit = (values) => {
        console.log("useEffect triggered with userId:", userId, "isEdit:", isEdit);
        if (isEdit) {
            UserService.updateUser(userId, values)
                .then(() => {
                    setMessage("User updated successfully!");
                    console.log("User updated successfully!"); // Debugging line
                })
                .catch((error) => console.log("Error updating user:", error));
        } else {
            UserService.createUser(values)
                .then(() => {
                    setMessage("New user created successfully!");
                    console.log("New user created successfully!"); // Debugging line
                })
                .catch((error) => console.log("Error creating user:", error));
        }
    };


    return (
        <div className="container mt-5">
            <h2>{isEdit ? "Edit User" : "Add User"}</h2>
            {message && (
                <div className="alert alert-success">
                    {message}
                </div>
            )}
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                placeholder="Enter name"
                            />
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary me-2">
                            {isEdit ? "Update" : "Create"}
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => navigate("/users")}
                        >
                            Back to User List
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UserForm;

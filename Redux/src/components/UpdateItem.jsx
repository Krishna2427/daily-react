import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Button, Form as BootstrapForm, Container, Row, Col  } from "react-bootstrap";
import { updateItem } from "../redux/itemsSlice";

const UpdateItem = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Fetch the item from the Redux store using the ID
    const item = useSelector((state) => 
     state.items.list.find((item) => item.id === id)
    );

    // Validation schema with Yup
    const validationSchema = Yup.object({
        title: Yup.string().required("Title is required"),
        description: Yup.string().required("Description is required"),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        dispatch(updateItem({ id, ...values }));
        setSubmitting(false);
        navigate("/"); // Navigate back to the item list or desired route after update
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>
                <h2 className="mb-4">Update Item</h2>
                {item ? (
                    <Formik
                     initialValues={{
                        title: item.title,
                        description: item.description,
                     }}
                     validationSchema={validationSchema}
                     onSubmit={handleSubmit}
                     enableReinitialize
                     >
                        {({ isSubmitting }) => (
                            <Form>
                                <BootstrapForm.Group controlId="formTitle" className="mb-3">
                                    <BootstrapForm.Label>Title</BootstrapForm.Label>
                                    <Field
                                    name="title"
                                    type="text"
                                    placeholder="Enter title"
                                    className="form-control"
                                    />
                                    <ErrorMessage
                                    name="title"
                                    component="div"
                                    className="text-danger"
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
                                    name="description"
                                    component="div"
                                    className="text-danger"
                                    />
                                </BootstrapForm.Group>

                                <Button
                                 variant="primary"
                                 type="submit"
                                 disabled={isSubmitting}
                                 >
                                    {isSubmitting ? "Updating..." : "Update Item"}
                                 </Button>
                            </Form>
                        )}
                     </Formik>
                ) : (
                    <p>Item not found. Please go back to the list</p>
                )}
                </Col>
            </Row>
        </Container>
    );
};
export default UpdateItem;
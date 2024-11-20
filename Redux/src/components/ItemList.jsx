import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, deleteItem } from '../redux/itemsSlice';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

const ItemList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const items = useSelector((state) => state.items.list);

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    return (
        <div>
            <h2 className='mb-4'>Item List</h2>
            <Row>
                {items.map((item) => (
                    <Col md={4} key={item.title} className='mb-4'>
                        <Card>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Button
                                    variant='danger'
                                    onClick={() => dispatch(deleteItem(item.id))}
                                    className='me-2'
                                >
                                    <FaTrashAlt />
                                </Button>
                                <Link to={`/update/${item.id}`}>
                                    <Button variant='primary'>Edit</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ItemList;

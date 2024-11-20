import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const ContactList = ({ data }) => {
    const [contacts, setContacts] = useState(data);

    const handleDelete = (deleteItem) => {
        setContacts(contacts.filter(contact => contact.id !== deleteItem.id));
    };

    return (
        <Container>
            <h1>Contact List</h1>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        {contact.name} - {contact.mobileNo}
                        <Button variant="danger" onClick={() => handleDelete(contact)}>Delete</Button>
                    </li>
                ))}
            </ul>
        </Container>
    );
};
export default ContactList;

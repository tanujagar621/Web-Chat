import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";
import { useConversations } from "../contexts/ConversationsProvider";
export default function NewConversationModal({ closeModal }) {
  const { contacts } = useContacts();
  const { createConversation } = useConversations();
  const [selectedContactsList, setSelectedContactsList] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    createConversation(selectedContactsList);
    closeModal();
  }
  function handleCheckBoxChange(contactId) {
    setSelectedContactsList((prevSelectedContactsList) => {
      if (prevSelectedContactsList.includes(contactId)) {
        return prevSelectedContactsList.filter((prevId) => {
          return prevId !== contactId;
        });
      } else {
        return [...prevSelectedContactsList, contactId];
      }
    });
  }
  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactsList.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckBoxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}

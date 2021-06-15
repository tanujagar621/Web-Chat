import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import {contacts} from '../contexts/ContactsProvider'
export default function NewConversationModal(props) {
  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map(contact => (
            
          ))}
          {/* <Form.Group className="my-2">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required></Form.Control>
          </Form.Group> */}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}

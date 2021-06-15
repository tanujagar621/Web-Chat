import React from "react";
import { ListGroup } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";

export default function Contacts() {
  const { contacts } = useContacts();
  return (
    <ListGroup>
      {contacts.map((contact) => {
        return (
          <ListGroup.Item key={contact.id}>
            <h6> {contact.name} </h6>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

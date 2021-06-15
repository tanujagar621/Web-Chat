import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

export default function Login(props) {
  const idRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    props.onIdSubmit(idRef.current.value);
  }
  function createNewId() {
    props.onIdSubmit(uuidV4());
  }
  return (
    <Container
      style={{ height: "100vh" }}
      className="align-items-center d-flex"
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group className="my-2">
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required></Form.Control>
        </Form.Group>
        <Button type="submit">Login</Button>
        <Button onClick={createNewId} variant="secondary" className="mx-2">
          Create Id
        </Button>
      </Form>
    </Container>
  );
}

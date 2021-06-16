import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../contexts/ContactsProvider";
import { ConversationsProvider } from "../contexts/ConversationsProvider";

function App() {
  const [id, setId] = useLocalStorage("id");

  // const dashboard = (
  //   <ContactsProvider>
  //     <Dashboard id={id} />
  //   </ContactsProvider>
  // );

  return id ? (
    <ContactsProvider>
      <ConversationsProvider id={id}>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  ) : (
    <Login onIdSubmit={setId} />
  );
}

export default App;

import React from "react";
import Sidebar from "./Sidebar";
import OpenConversation from "./OpenConversation";
import { useConversations } from "../contexts/ConversationsProvider";

export default function Dashboard(props) {
  const { selectedConversation } = useConversations();
  return (
    <div className="d-flex bg-dark text-light" style={{ height: "100vh" }}>
      <Sidebar id={props.id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
}

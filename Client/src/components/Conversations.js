import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversations } from "../contexts/ConversationsProvider";

export default function Conversations() {
  const { conversations, selectedConversationIndex } = useConversations();
  return (
    <ListGroup>
      {/* {console.log(conversations)} */}
      {conversations.map((conversation, index) => {
        return (
          <ListGroup.Item
            key={index}
            action
            onClick={() => selectedConversationIndex(index)}
            active={conversation.selected}
          >
            {conversation.recipients.map((r) => r.name).join(", ")}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

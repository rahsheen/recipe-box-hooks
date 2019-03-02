import React from "react";
import {
  Message,
  MessageBody,
  MessageHeader,
  Container,
  Delete,
  Button
} from "bloomer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function Recipe({ name, ingredients, onDelete, onEdit }) {
  return (
    <Container key={name}>
      <Message isColor="info">
        <MessageHeader>
          {name}
          <div isPulled="right">
            <Delete onClick={onDelete} />
            <Button
              onClick={onEdit}
              style={{
                maxWidth: "20px",
                maxHeight: "20px",
                background: "none",
                border: "none",
                color: "white"
              }}
            >
              <FontAwesomeIcon
                icon={faEdit}
                size="xs"
                fixedWidth
                mask={["far", "circle"]}
              />
            </Button>
          </div>
        </MessageHeader>
        <MessageBody>{ingredients}</MessageBody>
      </Message>
    </Container>
  );
}

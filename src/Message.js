import React, { forwardRef } from "react";
import "./Message.css";
import { Card, CardContent, Typography } from "@mui/material";

const Message = forwardRef(({ message, username }, ref) => {
  const isMe = username === message.username;
  return (
    <div ref={ref} className={`message ${isMe && `message_user`}`}>
      <Card className={isMe ? "my_message_card" : "guest_message_card"}>
        <CardContent>
          <Typography color="black" variant="h5" component="h4">
            {!isMe && `${message.username || "Unknown User"}: `} {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;

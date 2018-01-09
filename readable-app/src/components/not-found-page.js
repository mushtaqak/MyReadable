import React from 'react';
import { Message } from 'semantic-ui-react';

export default function NotFoundPage({message}) {
  return (
    <Message negative><Message.Header>{message}</Message.Header></Message>
  );
}

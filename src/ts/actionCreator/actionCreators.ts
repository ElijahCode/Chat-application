import { Action, Message } from "../types";

export function createActionSendMessage(message: Message): Action {
  return {
    type: "send message",
    name: message.name,
    message: message.message,
    now: message.now,
  };
}

export function createActionGetMessagesList(messages: Message[]): Action {
  return {
    type: "get messages list",
    messages,
  };
}

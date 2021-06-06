import { Action, Message } from "../types";

export function createActionSendMessage(message: Message): Action {
  return {
    type: "send message",
    message: { ...message },
  };
}

export function createActionGetMessagesList(messages: Message[]): Action {
  return {
    type: "get messages list",
    messages,
  };
}

export function createActionObserveToServer() {
  return {
    type: "observe to server",
  };
}

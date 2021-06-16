import { Action, Message } from "../types";

export function createActionSendMessage(message: Message): Action {
  return {
    type: "SENDMESSAGE",
    message: { ...message },
  };
}

export function createActionGetMessagesList(messages: Message[]): Action {
  return {
    type: "GETMESSAGELIST",
    messages,
  };
}

import { Action, Message } from "../types";

export function createActionSendMessage(message: Message): Action {
  return {
    type: "SendMessage",
    message: { ...message },
  };
}

export function createActionGetMessagesList(messages: Message[]): Action {
  return {
    type: "GetMessagesList",
    messages,
  };
}

export function createActionObserveToServer(): Action {
  return {
    type: "ObserveToServer",
  };
}

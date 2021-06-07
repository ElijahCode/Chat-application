import { Action, Message, State } from "../types";
import {
  sendMessage,
  getMessagesList,
  observeWithEventSource,
} from "../fireBaseMessagesAPI/fireBaseMessagesApi";
import { render } from "../render/render";
import { createActionGetMessagesList } from "../actionCreator/actionCreators";

export function reducer(state: State, action: Action): State {
  const newState = { ...state };
  switch (action.type) {
    case "send message":
      newState.messages.push({
        ...action.message,
      });
      break;
    case "get messages list":
      newState.messages = action.messages;
      break;
    default:
      break;
  }

  return newState;
}

import { Action, Message, State } from "../types";
import {
  sendMessage,
  getMessagesList,
  observeWithEventSource,
} from "../fireBaseMessagesAPI/fireBaseMessagesApi";
import { render } from "../render/render";
import { createActionGetMessagesList } from "../actionCreator/actionCreators";

export function reducer(state: State, action: Action): State {
  let newState = {...state};
  switch (action.type) {
    case "send message":
      newState.messages.push({
        ...action.message,
      });
      render(newState.messages);
      break;
    case "get messages list":
      newState.messages = action.messages;
      render(newState.messages);
      break;
    default:
      break;
  }

  return newState;
}

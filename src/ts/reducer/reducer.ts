import { Action, State } from "../types";
import {
  sendMessage,
  getMessagesList,
  observeWithEventSource,
} from "../fireBaseMessagesAPI/fireBaseMessagesApi";
import { createActionUpdateMessagesList } from "../actionCreator/actionCreators";
import { render } from "../render/render";

export function reducer(state: State, action: Action): State {
  let newState = state;
  switch (action.type) {
    case "send message":
      newState.push({
        ...action.message,
      });
      sendMessage(action.message);
      render(newState);
      break;
    case "get messages list":
      newState = getMessagesList();
      render(newState);
      break;
    case "update messages list":
      newState = getMessagesList();
      render(newState);
      break;
    case "observe to server":
      observeWithEventSource((data) => createActionUpdateMessagesList(data));
      break;
    default:
      break;
  }

  return newState;
}

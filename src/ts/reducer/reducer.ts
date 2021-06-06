import { Action, State } from "../types";
import {
  sendMessage,
  getMessagesList,
  observeWithEventSource,
} from "../fireBaseMessagesAPI/fireBaseMessagesApi";
import { createActionUpdateMessagesList } from "../actionCreator/actionCreators";

export function reducer(state: State, action: Action): State {
  let newState = state;
  switch (action.type) {
    case "send message":
      newState.push({
        ...action.message,
      });
      sendMessage(action.message);
      // render()
      break;
    case "get messages list":
      newState = getMessagesList();
      // render();
      break;
    case "update messages list":
      newState = getMessagesList();
      // render();
      break;
    case "observe to server":
      observeWithEventSource((data) => createActionUpdateMessagesList(data));
      break;
    default:
      break;
  }

  return newState;
}

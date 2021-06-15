import { Action, State } from "../types";

export function reducer(state: State, action: Action): State {
  const newState = { ...state };
  switch (action.type) {
    case "SendMessage":
      newState.messages.push({
        ...action.message,
      });
      break;
    case "GetMessagesList":
      newState.messages = action.messages;
      break;
    default:
      break;
  }

  return newState;
}

import { Action, State } from "../types";

export function reducer(state: State, action: Action): State {
  const newState = { ...state };
  switch (action.type) {
    case "SENDMESSAGE":
      newState.messages.push({
        ...action.message,
      });
      break;
    case "GETMESSAGELIST":
      newState.messages = action.messages;
      break;
    default:
      break;
  }

  return newState;
}

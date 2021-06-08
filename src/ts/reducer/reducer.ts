import { Action, State } from "../types";

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

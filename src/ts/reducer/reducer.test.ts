import { reducer } from "./reducer";
import {
  createActionGetMessagesList,
  createActionObserveToServer,
  createActionSendMessage,
} from "../actionCreator/actionCreators";
import { Message, State } from "../types";
import {
  getMessagesList,
  sendMessage,
} from "../fireBaseMessagesAPI/fireBaseMessagesApi";

it("reducer react at send message action", async () => {
  const message: Message = {
    name: "Peter",
    message: "Hi!",
    now: Date.now(),
  };
  const state: State = {
    userName: "Bob",
    messages: [],
  };
  const result: State = {
    userName: "Bob",
    messages: [message],
  };
  const newState = reducer(state, createActionSendMessage(message));
  expect(newState).toStrictEqual(result);
});

it("reducer react at get messages list action ", async () => {
  const messages: Message[] = [
    {
      name: "Peter",
      message: "Hi!",
      now: Date.now(),
    },
    {
      name: "Bob",
      message: "Hi!",
      now: Date.now(),
    },
    {
      name: "Peter",
      message: "How are you?",
      now: Date.now(),
    },
  ];
  const state: State = {
    userName: "Bob",
    messages: [],
  };
  const result: State = {
    userName: "Bob",
    messages,
  };
  const newState = reducer(state, createActionGetMessagesList(messages));
  expect(newState).toStrictEqual(result);
});

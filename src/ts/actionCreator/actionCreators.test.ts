import {
  createActionSendMessage,
  createActionGetMessagesList,
} from "./actionCreators";
import { Action, Message } from "../types";

describe("createActionSendMessage testing", () => {
  it("Must return correct action", () => {
    const now = Date.now();
    const message: Message = {
      name: "Peter",
      message: "Hi!",
      now,
    };
    const result: Action = {
      type: "send message",
      message: {
        name: "Peter",
        message: "Hi!",
        now,
      },
    };
    expect(createActionSendMessage(message)).toStrictEqual(result);
  });
});

describe("createActionGetMessagesList testing", () => {
  it("Must return correct action", () => {
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
    const result: Action = {
      type: "get messages list",
      messages,
    };
    expect(createActionGetMessagesList(messages)).toStrictEqual(result);
  });
});

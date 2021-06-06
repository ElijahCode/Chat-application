import {
  createActionSendMessage,
  createActionGetMessagesList,
  createActionUpdateMessagesList,
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
    const now1 = Date.now();
    const now2 = Date.now();
    const now3 = Date.now();
    const messages: Message[] = [
      {
        name: "Peter",
        message: "Hi!",
        now: now1,
      },
      {
        name: "Bob",
        message: "Hi!",
        now: now2,
      },
      {
        name: "Peter",
        message: "How are you?",
        now: now3,
      },
    ];
    const result: Action = {
      type: "get messages list",
      messages,
    };
    expect(createActionGetMessagesList(messages)).toStrictEqual(result);
  });
});

describe("createActionUpdateMessagesList testing", () => {
  it("Must return correct action", () => {
    const now1 = Date.now();
    const now2 = Date.now();
    const now3 = Date.now();
    const messages: Message[] = [
      {
        name: "Peter",
        message: "Hi!",
        now: now1,
      },
      {
        name: "Bob",
        message: "Hi!",
        now: now2,
      },
      {
        name: "Peter",
        message: "How are you?",
        now: now3,
      },
    ];
    const result: Action = {
      type: "update messages list",
      messages,
    };
    expect(createActionUpdateMessagesList(messages)).toStrictEqual(result);
  });
});

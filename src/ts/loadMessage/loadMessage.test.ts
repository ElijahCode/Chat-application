import { createStore } from "@elijahcode/redux";
import { loadMessage } from "./loadMessage";
import { State, Message } from "../types";
import { reducer } from "../reducer/reducer";

const state: State = {
  userName: "Bob",
  messages: [],
};
const store = createStore(reducer, state);

global.fetch = jest.fn();

it("testing loadData", async () => {
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
  const result = [
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
  (fetch as jest.Mock).mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve({ messages }),
    })
  );

  await loadMessage(store);

  expect(store.getState().messages).toStrictEqual([result]);
});

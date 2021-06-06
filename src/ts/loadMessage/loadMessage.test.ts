import { createStore } from "@elijahcode/redux";
import { loadMessage } from "./loadMessage";
import { State, Message } from "../types";
import { reducer } from "../reducer/reducer";

const state: State = {
  userName: "Bob",
  messages: [],
};
const store = createStore(reducer, state);
document.body.innerHTML = `
<div class = "messagesHistory"></div>
`;
const messageBlock = document.querySelector(".messagesHistory");

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
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve({ messages }),
    })
  );

  await loadMessage(store);

  expect(store.getState().messages).toStrictEqual(result);
  console.log(messageBlock.innerHTML);
  expect(messageBlock.innerHTML).not.toBe("");
});

import { createStore } from "@elijahcode/redux";
import { reducer } from "./reducer/reducer";
import { createActionSendMessage } from "./actionCreator/actionCreators";
import { loadMessage } from "./loadMessage/loadMessage";
import { State, Message } from "./types";
import {
  sendMessage,
  observeWithEventSource,
} from "./fireBaseMessagesAPI/fireBaseMessagesApi";
import "./css/index.css";
import { render } from "./render/render";

let userName;
userName = userName === "" ? "Anonymous" : userName;

if (localStorage.getItem("userName")) {
  userName = JSON.parse(localStorage.getItem("userName"));
} else {
  userName = prompt("Please, enter you name", "");
  userName = userName === "" ? "Anonymous" : userName;
}

if (userName !== "Anonymous") {
  localStorage.setItem("userName", JSON.stringify(userName));
}

const state: State = { userName, messages: [] };

const store = createStore(reducer, state, []);

const input: HTMLInputElement = document.querySelector(".messageBox");
const button: HTMLButtonElement = document.querySelector(".sendButton");

store.subscribe(() => {
  render(store.getState().messages);
});

async function handler(event) {
  const messageText = input.value;
  const message: Message = {
    name: userName,
    message: messageText,
    now: Date.now(),
  };
  input.value = "";
  store.dispatch(createActionSendMessage(message));
  await sendMessage(message);
}

button.addEventListener("click", handler);
input.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    handler(event);
  }
});

observeWithEventSource(async (data: Message[]) => {
  await loadMessage(store);
});

(async () => {
  await loadMessage(store);
})();

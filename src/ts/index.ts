import { createStore } from "@elijahcode/redux";
import { reducer } from "./reducer/reducer";
import { createActionSendMessage } from "./actionCreator/actionCreators";
import { loadMessage } from "./loadMessage/loadMessage";
import { State, Message } from "./types";
import {
  sendMessage,
  observeWithEventSource,
} from "./fireBaseMessagesAPI/fireBaseMessagesApi";
import { render } from "./render/render";
import "./css/index.css";
import "./images/smile.png";
import "./images/sad.png";

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
const messagesHistoryBlock: HTMLDivElement = document.querySelector(
  ".messagesHistory"
);

store.subscribe(() => {
  render(store.getState());
  messagesHistoryBlock.scrollTop = messagesHistoryBlock.scrollHeight;
});

async function handler() {
  const messageText = input.value;
  const message: Message = {
    name: userName,
    message: messageText,
    now: Date.now(),
  };
  input.value = "";
  try {
    await sendMessage(message);
    store.dispatch(createActionSendMessage(message));
  } catch {
    alert("Your message is not sending, try later!");
  }
  store.dispatch(createActionSendMessage(message));
}

button.addEventListener("click", handler);
input.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    handler();
  }
});

observeWithEventSource(async () => {
  await loadMessage(store);
});

(async () => {
  await loadMessage(store);
  messagesHistoryBlock.scrollTop = messagesHistoryBlock.scrollHeight;
})();

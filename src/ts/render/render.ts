import { Message } from "../types";

export function render(messages: Message[]): void {
  const messagesHistory: HTMLDivElement = document.querySelector(
    ".messagesHistory"
  );
  messagesHistory.innerHTML = "";
  messages.forEach((el) => {
    const date = new Date(el.now);
    messagesHistory.innerHTML += `<div class ="messageBlock"><p class="messageHeader">${
      el.name
    } wrote at ${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}</p><p class ="message">${
      el.message
    }</p></div>\n`;
  });
}

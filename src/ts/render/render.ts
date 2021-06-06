import { Message } from "../types";

export function render(messages: Message[]): void {
  const messagesHistory: HTMLDivElement = document.querySelector(
    ".messagesHistory"
  );
  messages.forEach((el) => {
    messagesHistory.innerHTML += `<div class ="messageBlock"><p class="messageHeader">${
      el.name
    } wrote at ${new Date(el.now)}</p><p class ="message">${
      el.message
    }</p></div>\n`;
  });
}

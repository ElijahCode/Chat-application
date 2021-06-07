import { emoji } from "../emoji/emoji";
import { Message } from "../types";

export function render(messages: Message[]): void {
  const messagesHistory: HTMLDivElement = document.querySelector(
    ".messagesHistory"
  );

  let resultString = "";
  messages.forEach((el) => {
    const date = new Date(el.now);
    resultString += `<div class ="messageBlock"><p class="messageHeader">${
      el.name
    } wrote at ${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}</p><p class ="message">${
      el.message
    }</p></div>\n`;
  });

  emoji.forEach((el) => {
    resultString = resultString.replace(
      el.key,
      (...args) => `<img class="emoji" src=${el.source}>`
    );
  });

  messagesHistory.innerHTML = resultString;
}

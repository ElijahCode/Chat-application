import { emoji } from "../emoji/emoji";
import { Message, State } from "../types";

export function render(state: State): void {
  const messagesHistory: HTMLDivElement = document.querySelector(
    ".messagesHistory"
  );

  let resultString = "";
  state.messages.forEach((el) => {
    const date = new Date(el.now);
    if (el.name === state.userName && el.name !== "Anonymous") {
      resultString += `<div class ="userMessageBlock"><p class="messageHeader">${
        el.name
      } wrote at ${date.getDate()}.${
        date.getMonth() + 1
      }.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}</p><p class ="message">${
        el.message
      }</p></div>\n`;
    } else {
      resultString += `<div class ="messageBlock"><p class="messageHeader">${
        el.name
      } wrote at ${date.getDate()}.${
        date.getMonth() + 1
      }.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}</p><p class ="message">${
        el.message
      }</p></div>\n`;
    }
  });

  emoji.forEach((el) => {
    resultString = resultString.replace(
      el.regExp,
      `<img class="emoji" src=${el.source} heigth=20px width=20px>`
    );
  });
  messagesHistory.innerHTML = resultString;
}

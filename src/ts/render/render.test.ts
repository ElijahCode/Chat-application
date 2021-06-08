import { render } from "./render";
import { emoji } from "../emoji/emoji";
import { Message, State } from "../types";

describe("render function testing", () => {
  document.body.innerHTML = `
    <div class = "messagesHistory"></div>
    `;

  it("Must correct change innerHTml property", () => {
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
    ];
    const date1 = new Date(messages[0].now);
    const date2 = new Date(messages[1].now);
    const state: State = { userName: "Peter", messages };
    const result = `<div class="userMessageBlock"><p class="messageHeader">${
      messages[0].name
    } wrote at ${date1.getDate()}.${
      date1.getMonth() + 1
    }.${date1.getFullYear()} ${date1.getHours()}:${date1.getMinutes()}</p><p class="message">${
      messages[0].message
    }</p></div>\n<div class="messageBlock"><p class="messageHeader">${
      messages[1].name
    } wrote at ${date2.getDate()}.${
      date2.getMonth() + 1
    }.${date2.getFullYear()} ${date2.getHours()}:${date2.getMinutes()}</p><p class="message">${
      messages[1].message
    }</p></div>\n`;
    render(state);
    expect(document.querySelector(".messagesHistory").innerHTML).toBe(result);
  });

  it("emoji test", () => {
    const messages = {
      name: "Peter",
      message: "Hi :) there!",
      now: Date.now(),
    };
    const date1 = new Date(messages.now);
    const state: State = { userName: "Peter", messages: [messages] };
    const result = `<div class="userMessageBlock"><p class="messageHeader">${
      messages.name
    } wrote at ${date1.getDate()}.${
      date1.getMonth() + 1
    }.${date1.getFullYear()} ${date1.getHours()}:${date1.getMinutes()}</p><p class="message">Hi <img class="emoji" src="${
      emoji[0].source
    }" heigth="20px" width="20px"> there!</p></div>\n`;
    render(state);
    expect(document.querySelector(".messagesHistory").innerHTML).toBe(result);
  });
});

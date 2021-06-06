import { render } from "./render";
import { Message } from "../types";

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
    const result = `<div class="messageBlock"><p class="messageHeader">${
      messages[0].name
    } wrote at ${new Date(messages[0].now)}</p><p class="message">${
      messages[0].message
    }</p></div>\n<div class="messageBlock"><p class="messageHeader">${
      messages[1].name
    } wrote at ${new Date(messages[1].now)}</p><p class="message">${
      messages[1].message
    }</p></div>\n`;
    render(messages);
    expect(document.querySelector(".messagesHistory").innerHTML).toBe(result);
  });
});

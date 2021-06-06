import {
  sendMessage,
  getMessagesList,
  observeWithEventSource,
} from "./fireBaseMessagesApi";

global.fetch = jest.fn();

it("sendMessage testing", async () => {
  const message = {
    name: "Peter",
    message: "Hi!",
    now: Date.now(),
  };
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve({ ...message }),
    })
  );
  expect(await sendMessage(message)).toStrictEqual({ ...message });
});

it("getMessageList testing", async () => {
  const messages = [
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
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve({ messages }),
    })
  );
  expect(await getMessagesList()).toEqual([{ 0: messages[0], 1: messages[1] }]);
});

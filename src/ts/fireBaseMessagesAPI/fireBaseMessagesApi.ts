import { Message } from "../types";

const config = {
  firebaseBaseUrl:
    "https://chat-application-ca587-default-rtdb.europe-west1.firebasedatabase.app",
  firebaseCollection: "messages.json",
};

export async function getMessagesList(): Promise<Message[]> {
  return fetch(`${config.firebaseBaseUrl}/${config.firebaseCollection}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data: Message) => {
      const result = [];
      Object.values(data).forEach((el) => {
        result.push(...el);
      });
      return result;
    });
}

export async function sendMessage(data: Message): Promise<boolean> {
  return fetch(`${config.firebaseBaseUrl}/${config.firebaseCollection}`, {
    method: "POST",
    body: JSON.stringify({
      ...data,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

export function observeWithEventSource(cb): void {
  // https://developer.mozilla.org/en-US/docs/Web/API/EventSource/EventSource
  const evtSource = new EventSource(
    `${config.firebaseBaseUrl}/${config.firebaseCollection}`
  );
  function handler(ev) {
    return cb(JSON.parse(ev.data).data);
  }
  evtSource.addEventListener("put", handler);
}

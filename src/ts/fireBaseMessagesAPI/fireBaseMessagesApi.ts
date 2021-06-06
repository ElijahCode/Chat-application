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
    .then((data: Message) =>
      Object.values(data).map((el) => ({
        ...el,
        now: new Date(el.now),
      }))
    );
}

export async function sendMessage(data: Message): Promise<boolean> {
  return fetch(`${config.firebaseBaseUrl}/${config.firebaseCollection}`, {
    method: "POST",
    body: JSON.stringify({
      ...data,
      now: Date.now(),
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

  evtSource.addEventListener("put", (ev) => cb(JSON.parse(ev.data).data));
}

export interface Message {
  name: string;
  message: string;
  now: number;
}

export interface Action {
  [key: string]: any;
  type: string;
}

export interface State {
  userName: string;
  messages: Message[];
}

export interface Emoticon {
  key: string;
  name: string;
  source: string;
}

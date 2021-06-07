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
  regExp: RegExp;
  name: string;
  source: string;
}

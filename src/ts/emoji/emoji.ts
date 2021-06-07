import { Emoticon } from "../types";

export const emoji: Emoticon[] = [
  {
    regExp: /:\)/gm,
    name: "smile",
    source: "./images/smile.png",
  },
  {
    regExp: /:\(/gm,
    name: "sad",
    source: "./images/sad.png",
  },
];

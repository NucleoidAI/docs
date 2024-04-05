// codeTheme.js
"use strict";

const theme = {
  plain: {
    color: "#adbac7",
    backgroundColor: "#22272e",
  },
  styles: [
    {
      types: ["prolog", "constant", "builtin"],
      style: {
        color: "#dcbdfb",
      },
    },
    {
      types: ["inserted", "function"],
      style: {
        color: "#8ddb8c",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "#ff938a",
      },
    },
    {
      types: ["changed"],
      style: {
        color: "#f69d50",
      },
    },
    {
      types: ["punctuation", "symbol"],
      style: {
        color: "#6cb6ff",
      },
    },
    {
      types: ["string", "char", "tag", "selector"],
      style: {
        color: "#96d0ff",
      },
    },
    {
      types: ["keyword", "variable"],
      style: {
        color: "#f47067",
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "#768390",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#8ddb8c",
      },
    },
  ],
};

module.exports = theme;

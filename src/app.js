/* eslint-disable */
"use strict";
import "bootstrap";
import "./style.css";

// window.onload =function() {};
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let n = 0; n < noun.length; n++) {
      // console.log("${pronoun[i]adj[j]}.com");
      let div = document.createElement("div");
      div.innerText = `${pronoun[i]}${adj[j]}${noun[n]}.com`;
      document.body.appendChild(div);
    }
  }
}

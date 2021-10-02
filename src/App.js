import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grining face",
  "😂": "Laughing face",
  "🙄": "Rolling eyes face",
  "🤑": "Money mouth face",
  "😨": "Fearful face",
  "👾": "Alien monster",
  "🥱": "Yawning face",
  "💕": "Two hearts",
  "🎶": "Musical notes",
  "🌹": "Rose Flower"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We dont have this emoji's meaning";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Boi</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>Emoji to View</h3>

      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.3rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

import React from "react";
import EmojiCell from "./EmojiCell";
import "./index.css";

export default function App() {
  const emojiPairs = [
    { name: "lion", color: "" },
    { name: "fox", color: "" },
    { name: "wolf", color: "" },
    { name: "frog", color: "" },
    { name: "bear", color: "" },
    { name: "unicorn", color: "" },
    { name: "butterfly", color: "" },
    { name: "snail", color: "" },
    { name: "whale", color: "" },
    { name: "squid", color: "" },
    { name: "bee", color: "" },
    { name: "pig", color: "" },
  ];

  return (
    <div className="App">
      {emojiPairs.map((emojiPair) => {
        return <EmojiCell emojiPair={emojiPair} />;
      })}
    </div>
  );
}

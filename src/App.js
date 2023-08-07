import React from "react";
import EmojiCell from "./EmojiCell";
import "./index.css";

export default function App() {
  const emojiPairs = [
    { name: "lion", color: "" },
    { name: "unicorn", color: "" },
    { name: "wolf", color: "" },
    { name: "frog", color: "" },
    { name: "bear", color: "" },
    { name: "pig", color: "" },
    { name: "butterfly", color: "" },
    { name: "unicorn", color: "" },
    { name: "whale", color: "" },
    { name: "fox", color: "" },
    { name: "squid", color: "" },
    { name: "dinosaur", color: "" },
  ];
  return (
    <div className="App">
      {emojiPairs.map((emojiPair) => {
        return <EmojiCell emojiPair={emojiPair} />;
      })}
    </div>
  );
}

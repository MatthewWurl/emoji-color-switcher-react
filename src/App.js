import React, { useEffect, useState } from "react";
import EmojiCell from "./EmojiCell";
import "./index.css";

export default function App() {
  const [activeEmojiName, setActiveEmojiName] = useState();

  useEffect(() => {
    console.log(`Active set to ${activeEmojiName}`);
  }, [activeEmojiName]);

  const emojiPairs = [
    { id: 1, name: "lion", color: "" },
    { id: 2, name: "fox", color: "" },
    { id: 3, name: "wolf", color: "" },
    { id: 4, name: "frog", color: "" },
    { id: 5, name: "bear", color: "" },
    { id: 6, name: "unicorn", color: "" },
    { id: 7, name: "butterfly", color: "" },
    { id: 8, name: "snail", color: "" },
    { id: 9, name: "whale", color: "" },
    { id: 10, name: "squid", color: "" },
    { id: 11, name: "bee", color: "" },
    { id: 12, name: "pig", color: "" },
  ];

  return (
    <div className="App">
      {emojiPairs.map((emojiPair) => {
        return (
          <EmojiCell
            key={emojiPair.id}
            emojiPair={emojiPair}
            activeEmojiName={activeEmojiName}
            setActiveEmojiName={setActiveEmojiName}
          />
        );
      })}
    </div>
  );
}

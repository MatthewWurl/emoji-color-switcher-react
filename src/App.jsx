import React, { useState } from "react";
import EmojiCell from "./Components/EmojiCell";
import { emojis, getGradient } from "./Utils/utils";
import "./index.css";

export default function App() {
  const [activeEmoji, setActiveEmoji] = useState({});

  return (
    <div className="App" style={getGradient(activeEmoji.color)}>
      {emojis.map((emoji) => {
        return (
          <EmojiCell
            key={emoji.id}
            emoji={emoji}
            activeEmoji={activeEmoji}
            setActiveEmoji={setActiveEmoji}
          />
        );
      })}
      <footer>A Scrimba Vue.js project recreated using React.</footer>
    </div>
  );
}

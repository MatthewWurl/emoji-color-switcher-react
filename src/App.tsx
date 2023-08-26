import { useState } from "react";
import EmojiCell from "./Components/EmojiCell";
import Emoji from "./emoji";
import { getGradient } from "./lib/gradient";
import "./index.css";

const App = () => {
  const [activeEmoji, setActiveEmoji] = useState({} as Emoji);

  const emojis = [
    new Emoji(1, "lion", "#FDB825"),
    new Emoji(2, "fox", "#F47A00"),
    new Emoji(3, "wolf", "#8D8D8D"),
    new Emoji(4, "frog", "#ABD065"),
    new Emoji(5, "bear", "#9B6A43"),
    new Emoji(6, "unicorn", "#EF77F9"),
    new Emoji(7, "butterfly", "#2ED1FF"),
    new Emoji(8, "snail", "#E4CA9E"),
    new Emoji(9, "whale", "#5DC3D5"),
    new Emoji(10, "squid", "#FF7858"),
    new Emoji(11, "bee", "#E1BF03"),
    new Emoji(12, "pig", "#DA90A2"),
  ];

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
      <footer>
        A Scrimba Vue.js project recreated using React and TypeScript.
      </footer>
    </div>
  );
};

export default App;

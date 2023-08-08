import { getGradient } from "../Utils/utils";

export default function EmojiCell({ emoji, activeEmoji, setActiveEmoji }) {
  const name = emoji.name;
  const color = emoji.color;

  const emojify = (name) => {
    return <img src={`emojis/${name}.png`} alt="emoji" />;
  };

  const animationClass = emoji.name === activeEmoji.name ? "bounce" : "";

  return (
    <>
      <div className="emoji-cell" onClick={() => setActiveEmoji(emoji)}>
        <div className="emoji-cell--top" style={getGradient(color)}>
          <span className={animationClass}>{emojify(name)}</span>
        </div>
        <div className="emoji-cell--bottom" style={{ color: color }}>
          {color}
        </div>
      </div>
    </>
  );
}

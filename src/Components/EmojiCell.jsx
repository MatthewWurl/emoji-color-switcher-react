import { getGradient } from "../lib/gradient";

export default function EmojiCell({ emoji, activeEmoji, setActiveEmoji }) {
  const { color, name } = emoji;
  const animationClass = name === activeEmoji.name ? "bounce" : "";

  const emojify = (name) => {
    return <img src={`emojis/${name}.png`} alt="emoji" />;
  };

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
